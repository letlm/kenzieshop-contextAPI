import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyContext = styled.div`
  margin-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border: 1px solid var(--greenThree);
  box-shadow: 29px -1px 123px -18px rgba(24, 153, 51, 0.4);

  div {
    display: flex;
    flex-direction: column;

    span {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }

  img {
    margin-left: 64px;
  }
`;

export const FullContext = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 25px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .productsBag {
    width: 450px;
    height: 621px;
    gap: 10px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar-track {
      background-color: var(--green);
    }

    ::-webkit-scrollbar {
      width: 1px;
      background: var(--green);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--greenTwo);
    }
  }
`;
