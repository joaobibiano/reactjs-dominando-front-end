import {
  Box,
  Button,
  ColumnConfig,
  DataTable,
  Heading,
  Pagination,
  Spinner,
} from "grommet";
import { useHistory, useLocation } from "react-router-dom";
import { IProduct } from "../../types/IProduct";
import { Star } from "grommet-icons";
import { ProductStock } from "../ProductStock";

export interface IState {
  total?: number;
  items: Array<IProduct>;
}

const PER_PAGE = 6;
export const ProductsTable = () => {
  const history = useHistory();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get("page") || "1");

  const data: IState = {
    total: 1,
    items: [
      {
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
      },
    ],
  };
  const isLoading = false;

  const columns: ColumnConfig<IProduct>[] = [
    {
      header: "Id",
      property: "id",
    },
    { header: "Title", property: "title" },
    {
      header: "Price",
      property: "price",
    },
    {
      header: "Rating",
      property: "rating",
      render: (data) => {
        const rate = Math.ceil(data.rating.rate);

        const stars = new Array(rate)
          .fill(true)
          .map((_, i) => <Star color="status-warning" key={i} />);

        return <Box direction="row">{stars}</Box>;
      },
    },
    {
      header: "Stock",
      property: "stock",
      render: (data) => {
        return <ProductStock product={data} />;
      },
    },
    {
      header: "",
      property: "detail",
      render: (data) => {
        return (
          <Button
            size="small"
            label="Detail"
            onClick={() => history.push(`/products/${data.id}`)}
          />
        );
      },
    },
  ];

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

  return (
    <Box pad="medium">
      <Heading level={2}>Lista de produtos</Heading>

      <DataTable
        data={data?.items}
        columns={columns}
        placeholder={isLoading ? <LoadingComponent /> : null}
      />

      {!isLoading && (
        <Box align="center" pad="large">
          <Pagination
            numberItems={data?.total}
            step={PER_PAGE}
            page={page}
            onChange={({ page }) => {
              history.replace(`/products?page=${page}`);
            }}
          />
        </Box>
      )}
    </Box>
  );
};
