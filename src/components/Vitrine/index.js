import { useContext } from "react";

import { ProductContext } from "../../Providers/Shop/index";
import Product from "../Product";

import { Container } from "./styles";

const Vitrine = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Container>
  );
};

export default Vitrine;
