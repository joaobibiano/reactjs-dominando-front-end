import { Clock, Add, Subtract } from "grommet-icons";
import { Box, Button, Text } from "grommet";
import { IProduct } from "../../types/IProduct";

type ProductStockProps = {
  product: IProduct;
};

export const ProductStock = ({ product }: ProductStockProps) => {
  const isLoading = false;

  function increment() {}
  function decrement() {}

  return (
    <Box direction="row" align="center">
      {isLoading ? <Clock size="small" /> : null}
      <Text>{product.stock}</Text>
      <Button size="small" icon={<Add size="small" />} onClick={increment} />
      <Button
        size="small"
        icon={<Subtract size="small" />}
        onClick={decrement}
      />
    </Box>
  );
};
