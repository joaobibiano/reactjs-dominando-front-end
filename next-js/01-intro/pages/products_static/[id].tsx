import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

type Props = {
  productId?: string;
};

// renderiza pra mim
// produto 1 -> keyboard
// produto 2 -> cadeira
// produto 3 -> webcam
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      productId: context.params?.id as string,
    },
  };
};

type ProductProps = InferGetStaticPropsType<typeof getStaticProps>;

const Product = ({ productId }: ProductProps) => {
  return <h1>Product page {productId}</h1>;
};

export default Product;
