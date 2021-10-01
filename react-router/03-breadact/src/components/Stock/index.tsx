import {
  useParams,
  useHistory,
  useRouteMatch,
  generatePath,
} from "react-router-dom";
import data from "../../assets/data.json";
import { ButtonVisibily, StockContainer } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Stock = () => {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const showStock = false;

  return (
    <div>
      <h3>
        Estoque de produtos
        <ButtonVisibily>
          {showStock ? <AiFillEyeInvisible /> : <AiFillEye />}
        </ButtonVisibily>
      </h3>

      <StockContainer>
        {data.products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>{showStock ? product.stock : "-"}</h5>
          </div>
        ))}
      </StockContainer>
    </div>
  );
};
