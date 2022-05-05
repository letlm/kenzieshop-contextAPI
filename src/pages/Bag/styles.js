import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  background-color: var(--green);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: var(--greenTwo);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
      color: var(--white);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .buttons {
    width: 280px;
    display: flex;
    justify-content: space-around;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      position: relative;
      font-size: 14px;
      letter-spacing: 3px;
      height: 3em;
      padding: 0 3em;
      border: none;
      background-color: var(--greenTwo);
      color: #fff;
      text-transform: uppercase;
      /* overflow: hidden; */
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
  }
`;
