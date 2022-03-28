import { useParams } from "react-router-dom";
import data from "../../assets/data.json";

type ParamsType = {
  selectedProduct: string;
};

export const Recipe = () => {
  const { selectedProduct } = useParams<ParamsType>();

  const selected = data.products.find(
    (p) => p.id.toString() === selectedProduct
  );

  return <p>{selected?.recipe}</p>;
};
