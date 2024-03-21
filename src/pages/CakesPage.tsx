import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import styled from 'styled-components';

interface Product {
    id: string;
    nome: string;
    descrição: string,
    valor: number,
    image: string;
}

export default function CakesPage() {
  const [productsArray, setProductsArray] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>('http://localhost:3000/products')
      .then((response) => {
        console.log(response.data)
        setProductsArray(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <ContainerCakes>
      {productsArray?.length !== 0
        ? productsArray.map((product) => (
            <Product
              key={product.id}
              name={product.nome}
              description={product.descrição}
              price={product.valor}
              image={product.image}
            />
          ))
        : 'Loading...'}
    </ContainerCakes>
  );
}

const ContainerCakes = styled.div`
  width: 80%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 10px 10px 10px;
  gap: 10px;
  margin-left: 270px;
`;
