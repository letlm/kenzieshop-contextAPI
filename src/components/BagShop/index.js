import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index";
import ProductBag from "../ProductBag";
import Cacto from "../img/cactook.png";
import { Container, EmptyContext, FullContext } from "./styles";
import Price from "../Price";

const BagShop = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyContext>
          <div>
            <span className="bagEmpty">Ops, sacola vazia 😔</span>
            <span className="subTitle">
              Volte à vitrine para adicionar "prantinhas" incríveis!
            </span>
          </div>
          <img src={Cacto} alt="Vaso de planta sendo segurado por duas mãos" />
        </EmptyContext>
      ) : (
        <FullContext>
          <div className="productsBag">
            {cart.map((product, index) => (
              <ProductBag key={index} product={product} />
            ))}
          </div>
          <Price />
        </FullContext>
      )}
    </Container>
  );
};

export default BagShop;
