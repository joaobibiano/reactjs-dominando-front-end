import { Box, Button, Heading, Spinner, Image, Text } from "grommet";
import { useHistory, useParams } from "react-router-dom";

import { IProduct } from "../../types/IProduct";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const data: IProduct = {
    id: 1,
    title: "Product 1",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Category 1",
    image:
      "https://images.unsplash.com/photo-1589170781884-b8b8d8f8e8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: {
      rate: 4.5,
      count: 10,
    },
    stock: 10,
  };

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

  if (!data) {
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
