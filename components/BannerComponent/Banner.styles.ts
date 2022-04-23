import styled from 'styled-components';

export const StyledBanner = styled.main`
  width:93%;
  margin-left:auto;
  & > div {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const StyledTitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:92.6%;
&>h2 {
      margin:25px 0;
  }
`