import styled from "styled-components";


export const StyledWrapper = styled.div`
  width:86%;
  margin:0 auto;
  & > div {
    display: flex;
    flex-direction: column-reverse;
  }
`
export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;

    & > a {
      text-decoration: underline;
    font-size: 0.9rem;
    font-weight: 600;
    color:${props=>props.theme.fontColor}
    }
  }
`