namespace Officecore.LayoutService.RenderingContentsResolver
{
    using Newtonsoft.Json.Linq;
    using Sitecore;
    using Sitecore.Common;
    using Sitecore.Configuration;
    using Sitecore.Data;
    using Sitecore.Data.Items;
    using Sitecore.Diagnostics;
    using Sitecore.LayoutService.Configuration;
    using Sitecore.LayoutService.Helpers;
    using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
    using Sitecore.Links;
    using System.Collections.Generic;
    using System.Collections.Specialized;
    using System.Linq;

    public class CustomRenderingContentsResolver : IRenderingContentsResolver
    {
        public bool IncludeServerUrlInMediaUrls { get; set; } = true;

        public bool UseContextItem { get; set; }

        public string ItemSelectorQuery { get; set; }

        public NameValueCollection Parameters { get; set; } = new NameValueCollection(0);

        public bool RandomizeResults { get; set; }

        public virtual object ResolveContents(Sitecore.Mvc.Presentation.Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            Assert.ArgumentNotNull(rendering, nameof(rendering));
            Assert.ArgumentNotNull(renderingConfig, nameof(renderingConfig));
            
            Item contextItem = GetContextItem(rendering, renderingConfig);
            if (contextItem == null)
                return null;

            if (string.IsNullOrWhiteSpace(ItemSelectorQuery))
                return ProcessItem(contextItem, rendering, renderingConfig);

            JObject jobject = new JObject()
            {
                ["items"] = new JArray()
            };


            IEnumerable<Item> items = GetItems(contextItem);
            List<Item> itemsList = items?.ToList();
            if (itemsList == null || itemsList.Count == 0)
                return jobject;

            jobject["context"] = ProcessItem(contextItem, rendering, renderingConfig);
            jobject["items"] = ProcessItems(itemsList, rendering, renderingConfig);
            return jobject;
        }

        protected virtual IEnumerable<Item> GetItems(Item contextItem)
        {
            Assert.ArgumentNotNull(contextItem, nameof(contextItem));
            return string.IsNullOrWhiteSpace(ItemSelectorQuery) ? Enumerable.Empty<Item>() : contextItem.Axes.SelectItems(ItemSelectorQuery);
        }

        protected virtual Item GetContextItem(Sitecore.Mvc.Presentation.Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            if (UseContextItem)
                return Context.Item;
            if (string.IsNullOrWhiteSpace(rendering.DataSource))
                return null;

            Item item = rendering.RenderingItem?.Database.GetItem(rendering.DataSource);
            if (item != null)
                return item;

            DataUri uri = DataUri.Parse(rendering.DataSource);
            if (!(uri != null))
                return null;

            return rendering.RenderingItem?.Database.GetItem(uri);
        }

        protected virtual JArray ProcessItems(IEnumerable<Item> items, Sitecore.Mvc.Presentation.Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            JArray jarray = new JArray();

            foreach (Item obj in items)
            {
                JObject jobject1 = this.ProcessItem(obj, rendering, renderingConfig);
                JObject jobject2 = new JObject()
                {
                    ["id"] = (JToken)obj.ID.Guid.ToString(),
                    ["url"] = (JToken)LinkManager.GetItemUrl(obj, ItemUrlHelper.GetLayoutServiceUrlOptions()),
                    ["name"] = (JToken)obj.Name,
                    ["displayName"] = (JToken)obj.DisplayName,
                    ["fields"] = (JToken)jobject1
                };
                jarray.Add((JToken)jobject2);
            }
            return jarray;
        }

        protected virtual JObject ProcessItem(Item item, Sitecore.Mvc.Presentation.Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            Assert.ArgumentNotNull(item, nameof(item));

            using (new SettingsSwitcher("Media.AlwaysIncludeServerUrl", (Switcher<bool, IncludeServerInMediaUrlSwitcher>.CurrentValue || IncludeServerUrlInMediaUrls).ToString()))
                return JObject.Parse(renderingConfig.ItemSerializer.Serialize(item));
        }
    }
}