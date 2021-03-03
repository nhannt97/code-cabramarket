import vendors from "./vendors.json";
export async function getAllVendors() {
  return vendors;
}
export async function getVendorBySlug(slug) {
  return vendors.find((current) => current.slug === slug);
}
