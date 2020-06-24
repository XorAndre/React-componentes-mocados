import styled from 'styled-components'

//Componentes do Banner
const Banner = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 88vh;
    width: 100%;
`;
const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.12);
    height: auto;
    text-align: center;
    width: 100%;
`;
const DescriptionBanner = styled.h2`
    color: #fff;
    font-size: 4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export { Banner, DescriptionBanner, Overlay }