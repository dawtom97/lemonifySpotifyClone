import styled from "styled-components";

export const ButtonComponent = styled.button`
  width:120px;
  height:30px;
  border:none;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: .5s;

  &:hover {
          background-color:${props=>props.theme.bodyHover} ;
      }
`