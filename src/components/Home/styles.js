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
    font-family: 'Times New Roman', Times, serif;  
    font-size: 66px;
    letter-spacing: 10px;
    margin: 40px;
    color: #000;
  }
  h2 {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 23px;
    margin: 20px;
  }
  p {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 23px;
    margin: 20px;
  } 
  a {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 23px;
    margin: 20px;
    text-decoration: none;
    padding: 15px;
    color: #000;
    border: 1px solid black;
    border-radius: 5px;
  }
  a:hover {
     border: 1px solid black;
     border-radius: 5px;
     color: #fff;
     background-color: #000;
  }
`;
