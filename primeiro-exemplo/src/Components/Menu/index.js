import React from 'react'

//Componentes
import {
    ContainerGeral,
    ContainerMenu,
    ContainerLogo,
    Logo,
    ContainerLinks,
    Link
} from './Styles'
const Menu = () => {
  return (
    <ContainerGeral>
      <ContainerMenu>
        <ContainerLogo>
          <Logo>Logo do site</Logo>
        </ContainerLogo>
        <ContainerLinks>
          <Link>Home</Link>
          <Link>About-me</Link>
          <Link>Contato</Link>
        </ContainerLinks>
      </ContainerMenu>
    </ContainerGeral>
  );
}
export default Menu;