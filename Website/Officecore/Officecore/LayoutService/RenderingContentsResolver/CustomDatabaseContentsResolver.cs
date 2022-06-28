namespace Officecore.LayoutService.RenderingContentsResolver
{
    using Newtonsoft.Json.Linq;
    using Sitecore.Diagnostics;
    using Sitecore.LayoutService.Configuration;
    using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
    using Sitecore.Mvc.Presentation;
    using System.Collections.Specialized;
    using System.Data.SqlClient;

    public class CustomDatabaseContentsResolver : IRenderingContentsResolver
    {
        public bool IncludeServerUrlInMediaUrls { get; set; } = true;

        public bool UseContextItem { get; set; }

        public string ItemSelectorQuery { get; set; }

        public NameValueCollection Parameters { get; set; } = new NameValueCollection(0);

        public bool RandomizeResults { get; set; }

        public object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var prodId = Sitecore.Context.Item["ProductId"];
            Assert.IsNotNullOrEmpty(prodId, "No ProductId specified");

            var connectionString = "Server=.;Database=;User Id=sa;Password=MySuperSecretPassword;";
            string query = "SELECT Id, Name, Price, Sku, Description FROM [dbo].[Products] WHERE id = @ProductId";
            JArray jarray = new JArray();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@ProductId", prodId);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                try
                {
                    while (reader.Read())
                    {
                        JObject jobject = new JObject()
                        {
                            ["productId"] = (JToken)reader["Id"],
                            ["productName"] = (JToken)reader["Name"],
                            ["productPrice"] = (JToken)reader["Price"],
                            ["productSku"] = (JToken)reader["Sku"],
                            ["productDescription"] = (JToken)reader["Description"]
                        };
                        jarray.Add(jobject);
                    }
                }
                finally
                {
                    reader.Close();
                }

                return jarray;
            }
        }
    }
}