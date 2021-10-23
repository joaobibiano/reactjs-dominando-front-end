import { Clock, Add, Subtract } from "grommet-icons";
import { Box, Button, Text } from "grommet";
import { IProduct } from "../../types/IProduct";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { IState } from "../ProductsTable";

type ProductStockProps = {
  product: IProduct;
  queryKey: Array<string | number>;
};

async function updateProduct(product: IProduct) {
  const request = await axios.put(
    `http://localhost:3333/products/${product.id}`,
    product
  );

  return request.data;
}

export const ProductStock = ({ product, queryKey }: ProductStockProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateProduct, {
    onMutate: async (updatedProduct) => {
      // cancelar qualquer query que esteja acontecendo
      await queryClient.cancelQueries(queryKey);

      const previousState = queryClient.getQueryData(queryKey);

      // atualizar o cache com o novo produto
      queryClient.setQueryData<IState>(queryKey, (oldState) => {
        const newItems = oldState?.items.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );

        return { total: oldState?.total, items: newItems ?? [] };
      });

      // retornar daqui de dentro o estado antigo
      return { previousState };
    },
    onError: async (err, variables, context: any) => {
      // se der erro, eu volto o cache para o estado antigo
      queryClient.setQueryData(queryKey, context.previousState);
    },
    onSettled: async () => {
      // vai cair aqui, se der sucesso OU erro
      // forçar uma revalidação do request
      queryClient.invalidateQueries(queryKey);
    },
  });

  function increment() {
    mutation.mutate({
      ...product,
      stock: product.stock + 1,
    });
  }

  function decrement() {
    mutation.mutate({
      ...product,
      stock: product.stock - 1,
    });
  }

  return (
    <Box direction="row" align="center">
      {mutation.isLoading ? <Clock size="small" /> : null}
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
