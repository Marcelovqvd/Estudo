import styled from 'styled-components';
import img from '../../assets/Girl.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: 100% 100vh;
   h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 66px;
    margin: 40px;
    color: #000;
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
