import { useHistory } from "react-router-dom";
import Vitrine from "../../components/Vitrine";
import { Container, Header } from "./styles";
import Carrinho from "../../components/img/carrinho.png";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

function Shop() {
  const history = useHistory();
  const { cart } = useContext(CartContext);
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Header>
        <div className="logo">
          <h1>"Prantinhas"</h1>
          <h2>Shop</h2>
        </div>
        <div className="buttons">
          <button onClick={() => handleNavigation("/")}>
            <span className="label">Início</span>
            <span className="vitrine">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
          <button onClick={() => handleNavigation("/bag")}>
            <span className="label">Sacola</span>
            <span className="number">
              {cart.length === 0 ? <></> : `|${cart.length}`}
            </span>
            <span className="icon">
              <img src={Carrinho} alt="Carrinho de compras" />
            </span>
          </button>
        </div>
      </Header>

      <Vitrine />
    </Container>
  );
}

export default Shop;
