import { type PortableTextBlock } from "sanity";

export interface Product {
  _id: string;
  _type: "product";
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
}
