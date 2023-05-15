import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect } from "react";
import { SERVER_URL } from './../../../config/client/config'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  useEffect(() => {
    fetch(`${SERVER_URL}/products`)
  })
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
