import styled from "styled-components";
import ButtonProduct from "./ButtonProduct";

import { ProductProps } from "../interfaces/Products";

export default function Product({name, description, price, image} : ProductProps){

  function handleClick(){
    alert("clicou");
  }

    return (
      <Figure>
        <img src={image} />
        <figcaption>
          <DetailsProduct>
            <p>{name}</p>
          </DetailsProduct>
          <DetailsProduct>
            <p>Descrição: {description}</p>
          </DetailsProduct>
          <DetailsProduct>
            <p>Preço: R$ {(Number(price) / 100).toFixed(2)}</p>
          </DetailsProduct>
          <ButtonProduct text="Comprar" onclick={handleClick} />
        </figcaption>
      </Figure>
    );
}

const Figure = styled.figure`
  width: 280px;
  height: 380px;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  img {
    border-radius: 30px 30px 0 0;
    width: 100%;
    height: 60%;
    object-fit: contains;
  }
  figcaption{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  } 
  &:hover {
    box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.75);
  }
`;

const DetailsProduct = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
  color: #444444;
`