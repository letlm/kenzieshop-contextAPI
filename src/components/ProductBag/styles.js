import styled from "styled-components";

export const Container = styled.div`
  width: 190px;
  height: 300px;
  padding: 0.8em;
  background: var(--greenTwo);
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    width: 170px;
    height: 170px;
  }

  .card-img {
    background-color: var(--white);
    height: 64%;
    width: 100%;
    border-radius: 0.5rem;
    transition: 0.3s ease;
  }

  .card-info {
    color: var(--white);
    padding-top: 10%;
    display: flex;
    margin-top: -5px;
    flex-direction: column;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }

  .text-title {
    font-weight: 700;
    font-size: 1.1em;
    line-height: 1.5;
    font-family: "Inter", sans-serif;
  }

  .text-body {
    font-size: 0.9em;
    padding-bottom: 10px;
  }

  .card-button {
    border: 1px solid #252525;
    display: flex;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
  }

  .card-img:hover {
    transform: translateY(-5%);
    box-shadow: rgba(26, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(8, 71, 71, 0.3) 0px 8px 16px -8px;
  }

  .card-button:hover {
    border: 1px solid var(--vanilla);
    background-color: var(--vanilla);
  }
`;
