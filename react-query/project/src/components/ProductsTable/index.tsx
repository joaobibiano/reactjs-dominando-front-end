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
import axios from "axios";
import { useQuery } from "react-query";

export interface IState {
  total?: number;
  items: Array<IProduct>;
}

async function fetch(page: number, perPage: number): Promise<IState> {
  const request = await axios.get<IProduct[]>(
    `http://localhost:3333/products?_page=${page}&_limit=${perPage}`
  );

  return {
    items: request.data,
    total: Number(request.headers["x-total-count"]),
  };
}

const PER_PAGE = 6;
export const ProductsTable = () => {
  const history = useHistory();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get("page") || "1");
  const { data, isLoading } = useQuery<IState>(
    ["products", page, PER_PAGE],
    () => fetch(page, PER_PAGE)
  );

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
