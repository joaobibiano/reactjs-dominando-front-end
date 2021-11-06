import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  return <h1>Product page {router.query.id}</h1>;
};

export default Product;
