// Helper to get the correct asset path
// Custom domain serves from root, no prefix needed
export function getAssetPath(path) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}
