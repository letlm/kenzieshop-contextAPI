import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index";
import { toast } from "react-toastify";
import { Container } from "./styles";

const ProductBag = ({ product }) => {
  const { name, price, img } = product;

  const { removeFromCart } = useContext(CartContext);

  const removeCart = (product) => {
    removeFromCart(product);
    toast('✖️ "Prantinha" removida da sacola', {
      className: "toastify-color-progress-light",
    });
  };

  return (
    <Container>
      <div className="card-img">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <p className="text-title">{name}</p>
        <span className="text-title-price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="card-footer">
        <button className="card-button" onClick={() => removeCart(product)}>
          Remover
        </button>
      </div>
    </Container>
  );
};

export default ProductBag;
