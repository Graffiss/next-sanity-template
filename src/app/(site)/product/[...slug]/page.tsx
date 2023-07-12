import { getProduct } from "../../../../../sanity/handlers/product/handle-get";

const ProductDetailsPage = async ({ slug }: { slug: string }) => {
  const product = await getProduct(slug);

  return (
    <>
      <h1>Product details</h1>
      {product && (
        <div key={product.slug}>
          <h2>{product.name}</h2>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
