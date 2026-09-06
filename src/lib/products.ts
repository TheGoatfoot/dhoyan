import { products } from "@/content/products";
import { categories } from "@/content/categories";
import { Product, ProductCategory } from "@/types/product";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  if (product.relatedSlugs && product.relatedSlugs.length > 0) {
    const matched = product.relatedSlugs
      .map((slug) => getProductBySlug(slug))
      .filter((p): p is Product => p !== undefined);
    if (matched.length >= limit) return matched.slice(0, limit);
  }

  // Fallback to same category
  const sameCat = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  );
  return sameCat.slice(0, limit);
}

export function getAllCategories(): ProductCategory[] {
  return categories;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

