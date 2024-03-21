import styled from "styled-components";
import Header from "../components/Header";
import CakesPage from "./CakesPage";
import { Outlet, useLocation } from "react-router-dom";

export default function HomePage(){
  const {pathname} = useLocation();

    return (
      <ContainerHomePage>
        <Header />
         { pathname === "/"?  <CakesPage /> : <Outlet/>}
      </ContainerHomePage>
    );
}

const ContainerHomePage = styled.div`
  /* width: 100vw; */
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`