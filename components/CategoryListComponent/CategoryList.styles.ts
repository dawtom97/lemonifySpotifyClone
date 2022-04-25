import styled from "styled-components";


export const StyledWrapper = styled.div`
 width:86%;
 margin:17px auto 14px;

 & > div {
  padding: 8px 0;
 }

`

export const StyledCategory = styled.div`

    background-color: ${props=>props.theme.bodyAlt};
  color: ${props=>props.theme.fontColor};
  height: 32px;
  line-height: 32px;
  text-align: center;
  min-width: 70px;
  border-radius: 15px;
  font-size: 1rem;
  padding: 0px 7px;
//  width: min-content;
  font-weight: 400;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
  }
  

`