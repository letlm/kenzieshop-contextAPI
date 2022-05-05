// import { Container } from './styles';
import Carrinho from "../img/carrinho.png";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../Providers/Cart";
import { Container } from "./styles";

const Price = () => {
  const { cart, setCart } = useContext(CartContext);

  const finish = () => {
    setCart([]);
    toast("✨ Pedido finalizado!", {
      className: "toastify-color-progress-light",
    });
  };

  return (
    <Container>
      <div className="items">
        <span className="total">Total de itens: {cart.length}</span>
        <span className="price">
          Total:
          {cart
            .reduce((acc, value) => {
              acc += value.price;
              return acc;
            }, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>

        <button onClick={finish}>
          <span className="label">Finalizar pedido!</span>
          <span className="icon">
            <img src={Carrinho} alt="Carrinho de compras" />
          </span>
        </button>
      </div>
    </Container>
  );
};

export default Price;
