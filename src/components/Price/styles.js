import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  .items {
    border: 1px solid var(--greenThree);
    box-shadow: 29px -1px 123px -18px rgba(24, 153, 51, 0.4);
    height: 300px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 400px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      position: relative;
      font-size: 14px;
      letter-spacing: 3px;
      height: 3em;
      padding: 0 3em;
      border: none;
      background-color: var(--greenTwo);
      color: #fff;
      text-transform: uppercase;
      border-radius: 5px;
    }

    button::before {
      content: "";
      border-radius: 5px;
      display: block;
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
      height: 0px;
      width: 100%;
      background: var(--greenTwo);
      background: linear-gradient(90deg, rgb(28 99 62) 20%, rgb(7 255 45) 100%);
      transition: 0.2s;
    }

    button .label {
      position: relative;
    }

    button .vitrine {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3em;
      width: 3em;
      position: absolute;
      top: 3em;
      right: 94px;
      opacity: 0;
      transition: 0.4s;
      transform: rotate(180deg);
    }

    button .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3em;
      width: 3em;
      position: absolute;
      top: 3em;
      right: 0;
      opacity: 0;
      transition: 0.4s;
    }

    button img {
      width: 25px;
    }

    button .number {
      color: var(--black);
      font-weight: bold;
      display: flex;
      flex-direction: column;
    }

    button:hover::before {
      height: 100%;
    }

    button:hover .icon {
      top: 0;
      opacity: 1;
    }

    button:hover .vitrine {
      top: 0;
      opacity: 1;
    }

    .total,
    .price {
      font-size: 25px;
    }
  }
`;
