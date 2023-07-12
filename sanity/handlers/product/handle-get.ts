import { createClient, groq } from "next-sanity";
import { type Product } from "sanity/types/product.types";
import clientConfig from "../../config/client-config";

export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    _type,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    content
  }`;

  return createClient(clientConfig).fetch(groq`${query}`);
}

export async function getProduct(slug: string): Promise<Product> {
  const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      _type,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`;

  return createClient(clientConfig).fetch(groq`${query}`, { slug });
}
