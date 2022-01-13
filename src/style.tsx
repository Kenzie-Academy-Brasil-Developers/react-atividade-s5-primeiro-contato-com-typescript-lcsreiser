import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to right, #decba4, #3e5151);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 90vh;
  width: 40vw;
  ul {
    list-style: none;
  }
`;
