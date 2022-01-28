import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({done}: ContainerProps) =>(
  `
  dispaly:flex;
  background-color: #5687e9;
  padding: 10px;
  border-redius: 10px; 
  margin-bottom: 10px; 
  align-items: center;

  label{
      color:#000;
      text-decoration: ${done ? 'line-through' : 'initial'};
      font-style: italic;
      font-weight: 600;
      font-size: 16px;
  }
  input{
      width: 25px;
      height: 25px;
      margin-right: 10px;
  }
` 
))