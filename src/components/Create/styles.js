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
  a {
    color: #000;
    text-decoration: none;
    margin: 20px;
    padding: 10px;
  }
   a:hover {
    color: red;
  }`;

export const Form = styled.form`
display: flex;
flex-direction: column;
input {
  width: 400px;
  margin: 20px;
  padding: 20px;
  border: 2px solid black;
}
button {
  width: 100px;
  height: 40px;
  margin: 0 auto;  
  background-color: #000;
  color: #fff;
}
`;
