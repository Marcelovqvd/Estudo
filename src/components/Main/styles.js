import styled from 'styled-components';
import img from '../../assets/Girl.jpg';

export const Container = styled.div`
  margin: 0 auto;
  background-color: beige;
  background-image: url(${img});
  background-size: 100vw 100vh;
  background-repeat: round;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 46px;
    text-align: center;
    letter-spacing: 2px;
    margin: 40px;
    color: #000;
  }
`;

export const Lista = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    list-style: none;
    margin-bottom: 20px;

  }
  p {
    list-style: none;
    margin-bottom: 20px;
    font-family: 'Times New Roman', Times, serif;  
    font-size: 26px;
    margin: 25px 0 5px 0;
  }
  `;

export const LinkStyle = styled.a`
    display: flex;
    justify-content: right;
    align-items: center;
  a {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 16px;
    margin: 20px 20px 10px 0;
    text-decoration: none;
    padding: 15px;
    color: #000;
    border: 1px solid black;
    border-radius: 5px;
  }
  a:hover {
    color: #fff;
    background-color: #000;
  }
`;
