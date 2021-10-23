import { Box, Button, Heading, Spinner, Image, Text } from "grommet";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../../types/IProduct";
import { useQuery } from "react-query";

async function fetchProduct(id: string) {
  const request = await axios.get(`http://localhost:3333/products/${id}`);

  return request.data as IProduct;
}

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery<IProduct>(
    ["products", id],
    () => fetchProduct(id),
    {
      staleTime: 10000,
    }
  );

  const history = useHistory();

  const LoadingComponent = () => {
    return (
      <Box
        align="center"
        justify="center"
        fill="vertical"
        animation="fadeIn"
        background="light-2"
        height={{
          min: "200px",
        }}
      >
        <Spinner size="medium" />
      </Box>
    );
  };

  if (!data || isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Box align="center" pad="xsmall">
      <Heading level={2}>Detalhe do Produto #{id}</Heading>

      <Box
        width="large"
        background="light-1"
        round="xsmall"
        elevation="small"
        pad="medium"
        align="center"
      >
        <Box height="small" width="small">
          <Image fit="cover" src={data.image} />
        </Box>

        <Box gap="small">
          <Text>
            <strong>ID: </strong>
            {data.id}
          </Text>
          <Text>
            <strong>Title: </strong>
            {data.title}
          </Text>
          <Text>
            <strong>Price: </strong>
            {data.price}
          </Text>
          <Text>
            <strong>Description: </strong>
            {data.description}
          </Text>
          <Text>
            <strong>Category: </strong>
            {data.category}
          </Text>
        </Box>

        <Button secondary label="Voltar" onClick={() => history.goBack()} />
      </Box>
    </Box>
  );
};
