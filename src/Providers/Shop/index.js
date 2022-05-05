import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bambus",
      price: 232.99,
      category: "Folhagem",
      img: "https://cdn.pixabay.com/photo/2019/01/29/01/32/tropical-3961591_960_720.png",
    },
    {
      id: 2,
      name: "Bonsai",
      price: 105.09,
      category: "Bonsai",
      img: "https://cdn.pixabay.com/photo/2019/12/09/20/31/bonsai-tree-4684340_960_720.png",
    },
    {
      id: 3,
      name: "Bambus II",
      price: 158.0,
      category: "Folhagem",
      img: "https://cdn.pixabay.com/photo/2019/02/19/08/58/plant-4006379_960_720.png",
    },
    {
      id: 4,
      name: "Decoração",
      price: 250.99,
      category: "Folhagem",
      img: "https://cdn.pixabay.com/photo/2020/03/15/02/54/jungle-4932299_960_720.png",
    },
    {
      id: 5,
      name: "Vaso branco",
      price: 300.99,
      category: "Folhagem",
      img: "https://cdn.pixabay.com/photo/2019/12/01/23/39/flowers-4666664_960_720.png",
    },
    {
      id: 6,
      name: "Flor vermelha",
      price: 70.09,
      category: "Folhagem e flor",
      img: "https://cdn.pixabay.com/photo/2020/01/11/11/22/garden-4757264_960_720.png",
    },
    {
      id: 7,
      name: "Arvorezinha",
      price: 169.09,
      category: "Folhagem",
      img: "https://cdn.pixabay.com/photo/2019/11/11/07/40/potted-tree-4617467_960_720.png",
    },
    {
      id: 8,
      name: "Flor branca",
      price: 90.09,
      category: "Florzinha",
      img: "https://cdn.pixabay.com/photo/2019/12/28/11/51/flowers-4724429_960_720.png",
    },
    {
      id: 9,
      name: "Para pendurar",
      price: 126.86,
      category: "Folhagem e pêndulo",
      img: "https://cdn.pixabay.com/photo/2019/03/11/18/22/hanging-plant-4049176_960_720.png",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
