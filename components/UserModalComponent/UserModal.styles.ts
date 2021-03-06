import styled, { css } from "styled-components";
import { UserModalTypes } from "./UserModal.types";

export const StyledModal = styled.div<UserModalTypes>`
 position: absolute;
 display: none !important;
 top:50%;
 right:0%;
 transform: translateX(100%) translateY(-50%);
 background-color: ${(props) => props.theme.body};
  width:280px;
  height: 140px;
  border-radius: 15px;
  display: flex;
  padding: 35px;
  align-items: center;
  z-index: 990;
  gap:20px;
  transition: 0.5s;
  box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};

  ${props => props.isUserModalVisible && css`
  transform: translateX(0%) translateY(-50%);

  `}
  img {
      width:70px;
      height: 70px;
      border-radius: 50%;
      border: 2px solid ${props=>props.theme.primary};
  }
`

export const StyledInfo = styled.div`
  p:first-child {
    color: ${props=>props.theme.primary};
    font-weight:700;
    font-size:0.8rem
  }
  p {
    color: ${props=>props.theme.fontColor};
    font-weight: 700;
  }
`
export const StyledLogout = styled.div`
   display: flex;
   align-items: center;
   gap:2px;
   cursor: pointer;
   margin:10px 0;
   color: ${props=>props.theme.fontColor};
   transition: 0.5s;
   &:hover {
    color: ${props=>props.theme.primary};
   }
`

