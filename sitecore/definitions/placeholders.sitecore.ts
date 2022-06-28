import { Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adding placeholders is optional but allows setting a user-friendly display name. Placeholder Settings
 * items will be created for any placeholders explicitly added, or discovered in your routes and component definitions.
 * Invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest
 */
export default function addPlaceholdersToManifest(manifest: Manifest): void {
  manifest.addPlaceholder(
    { name: 'jss-main', displayName: 'Main' },
    { name: 'jss-header', displayName: 'Header' },
    { name: 'jss-footer', displayName: 'Footer' },
    { name: 'jss-left', displayName: 'Left Column' },
    { name: 'jss-middle', displayName: 'Middle Column' },
    { name: 'jss-right', displayName: 'Right Column' },
  );
}
