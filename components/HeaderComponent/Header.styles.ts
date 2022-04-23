import styled from "styled-components";


export const StyledHeader = styled.header`
  transition: 0.5s;
  background-color: ${props => props.theme.body};
  border-bottom: 1px solid ${props => props.theme.lightGray};
`

export const StyledInnerWrapper = styled.div`
   width:85%;
   margin:0 auto;
   display: flex;
   height: 70px;
   justify-content: space-between;
   align-items: center;
   & > div {
     display: flex;
     align-items: center;
     gap:15px;

     &>svg {
      color:${props => props.theme.primary};
      font-size: 1.3rem;
     }
   }
`

export const StyledUserButton = styled.div`
  border: 1px solid ${props => props.theme.lightGray};
  padding:5px 9px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: .5s;

  :hover {
    box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
  }
  svg {
    color:${props => props.theme.fontColor};
  }

  img {
    width:25px;
    height: 25px;
    border-radius: 50%;

  }
`