import styled from 'styled-components';

interface IProps {
    height?: number;
}

export const Flex = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div<IProps>`
    height: ${(props) => props.height}vh;
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button<IProps>`
position: auto;
  top: 25%;
  background-color: #f1f1f1;
  color: black;
  font-size: 16px;
  padding: 16px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`;

export const Form = styled.form<IProps>`
 border: 3px solid #f1f1f1;
 `;

export const FormCon = styled.div<IProps>`
padding: 25px;   
background-color: lightblue;
`;

export const ButtonF = styled.button<IProps>`
background-color: #4CAF50;   
       width: 100%;  
        color: orange;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;
`;

export const ButtonC = styled.button<IProps>`
background-color: red;   
width: 100%;  
color: orange;   
padding: 15px;   
margin: 10px 0px;   
border: none;   
cursor: pointer;
width: auto;   
padding: 10px 18px;  
margin: 10px 5px; 
`;

export const Input = styled.input<IProps>`
width: 100%;   
margin: 8px 0;  
padding: 12px 20px;   
display: inline-block;   
border: 2px solid green;   
box-sizing: border-box;
`;