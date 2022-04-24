import styled from "styled-components";

export const StyledWrapper = styled.article`
height: 400px;
border-radius: 12px;
cursor: pointer;
@media (max-width:640px) {
    height: 300px;
}
& svg {
    color: ${props=>props.theme.primary};
    font-size: 1rem;
    position: relative;
    top: 3px;
}
& > div {
    margin-top: 5px;
    position: relative;
    left: 2.5px;

    &  span {
        color: ${props=>props.theme.primary}
    }
}
`

export const StyledImg = styled.div`
     width:100%;
    height: 80%;
    overflow: hidden;
    border-radius: 12px;
    &>img {
        object-fit: cover;
        border-radius: 12px;
        width:100%;
        height:100%;
        transition: transform 2s;
    &:hover {
        transform: scale(1.2);
    }
}
`