import products from "./products.json";
export async function getAllProducts() {
  return products;
}
export async function getProductBySlug(slug) {
  return products.find((current) => current.slug === slug);
}
