import styled from 'styled-components'
//Componentes mocados menu
const ContainerGeral = styled.div`
    background-color: transparent;
    padding: 10px 5px;
    position: fixed;
    width: 100%;
    z-index: 1;
`;
const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    min-width: 80%;
    max-width: 90%;
`;
const ContainerLogo = styled.div`
    padding: 12px;
    width: 20%;
`;
const Logo = styled.h1`
    color: #fff;
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
`;
const ContainerLinks = styled.ul`
    display: flex;
    align-items: center;
    min-height: 7vh;
    width: 30%;
`;
const Link = styled.li`
   color: #fff;
   display: inline-block;  
   font-family: Arial, Helvetica, sans-serif;
   padding: 10px 25px; 
`;
export { ContainerGeral, ContainerMenu, ContainerLogo, Logo, ContainerLinks, Link }
