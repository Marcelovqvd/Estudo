import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 46px;
    margin: 40px;
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    margin: 40px;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    margin: 40px;
  } 
  a {
    text-decoration: none;
  }
  a:hover {
    color: red;
  }
`;
