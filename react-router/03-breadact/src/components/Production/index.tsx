import data from "../../assets/data.json";
import { ProductContainer, ProductImage, ProductsContainer } from "./styles";

export const Production = () => {
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
    </div>
  );
};
