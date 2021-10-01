import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import { ProductContainer, ProductImage, ProductsContainer } from "./styles";

type ParamsType = {
  selectedProduct: string;
};

export const Production = () => {
  const { selectedProduct } = useParams<ParamsType>();

  const selected = data.products.find(
    (p) => p.id.toString() === selectedProduct
  );

  return (
    <div>
      <h3>O que você vai fabricar hoje?</h3>

      <ProductsContainer>
        {data.products.map((product) => (
          <ProductContainer key={product.id}>
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContainer>
        ))}
      </ProductsContainer>
      <p>{selected?.recipe}</p>
    </div>
  );
};
