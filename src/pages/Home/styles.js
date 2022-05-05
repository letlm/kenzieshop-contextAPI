import styled from "styled-components";

export const Body = styled.body`
  background: var(--green);
  height: 100vh;
`;

export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80);
  background-size: contain;
  border-radius: 5px;
  width: 500px;
  height: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 29px -1px 123px -18px rgba(24, 153, 51, 0.4);

  h2 {
    margin-top: -15px;
  }

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
`;
