import styled from 'styled-components';
import img from '../../assets/Girl.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const InsideCointainer = styled.div`
  background-image: url(${img});  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vmin;  
  h1 {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 46px;
    letter-spacing: 2px;
    margin: 40px;
    color: #000;
  }
  p {
    text-align: left;
    width: 500px;
    line-height: 1.5;
    font-family: 'Times New Roman', Times, serif;  
    font-size: 26px;
    margin: 0 auto;
  }
  a {
    font-family: 'Times New Roman', Times, serif;  
    font-size: 16px;
    text-decoration: none;
    margin: 40px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
  width: 500px;
  margin: 20px;
}
textarea {
  width: 500px;
  height: 100px;
  margin: 20px;
}
  button {
  width: 100px;
  height: 40px;
  margin: 20px;
}
`;