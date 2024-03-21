import styled from "styled-components";
import Button from "./Button";
import logo from "../assets/images/logo.png";
import { FaRegUserCircle } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate();

    return (
      <ContainerMenu>
        <ContainerLogoAndBack>
          <img src={logo} onClick={() => navigate("/")}/>
        </ContainerLogoAndBack>
        <Line />
        <ContainerUser>
          <FaRegUserCircle />
          <GoSignIn />
          <FaCartShopping onClick={() => navigate("/cart")}/>
        </ContainerUser>
        <Line />
        <Nav>
          <Button text="Bolos de Festa" path="/cakes" />
          <Button text="Bolos Vulcões" path="/vulcanos" />
          <Button text="Kit Festa" path="/" />
          <Line />
          <Button text="Informações dos pedidos" path="/" />
          <Button text="Sobre Nós" path="/" />
          <Button text="Localização" path="/" />
        </Nav>
      </ContainerMenu>
    );
}

const ContainerMenu = styled.div`
  width: 270px;
  min-height: 100vh;
  background-color: #eb8c94;
  box-sizing: border-box;
  padding: 10px 0px 0px 0px;
  position: fixed;
  left: 0;
  top: 0;
`
const ContainerLogoAndBack = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eb8c94;
  margin-bottom: 15px;
  img{
    width: 140px;
    cursor: pointer;
  }
`;
const ContainerUser = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eb8c94;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  svg{
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    &:hover{
      color: #881e1e;
    }
  }
`;
const Nav = styled.nav`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #ac3e3e;
`;