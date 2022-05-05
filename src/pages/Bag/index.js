import React from "react";
import { useHistory } from "react-router-dom";
import BagShop from "../../components/BagShop";
import { Container, Header } from "./styles";

function Bag() {
  const history = useHistory();

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
          <button onClick={() => handleNavigation("/shop")}>
            <span className="label">Vitrine</span>
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
          <button onClick={() => handleNavigation("/")}>
            <span className="label">Sair</span>
            <span className="icon">
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
        </div>
      </Header>
      <div>
        <BagShop />
      </div>
    </Container>
  );
}

export default Bag;
