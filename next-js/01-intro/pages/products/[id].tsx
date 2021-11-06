import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// generate pages on each request
// generate pages on build

type Props = {
  productId: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const productId = context.query.id as string;

  return {
    props: {
      productId: productId,
    },
  };
};

type ProductProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Product = ({ productId }: ProductProps) => {
  return <h1>Product page {productId}</h1>;
};

export default Product;
