import styled from 'styled-components'
//Containers do controle da grid
const Container = styled.div`
    margin: 0 auto;
    padding: 17rem 0;
    width: 90%;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    &:after, &:before{
        content: "";
        display: table;
    }
`;
const Col = styled.div`
    padding: 15px;
    width: 100%;
`;
 export { Container, Row, Col}