import React from "react";
import { Container } from "react-bootstrap";
import ListaPlatos from "../platos/ListaPlatos";

export default function MenuList({ menuList }) {
    return(
      <>
        <Container><h3>Tu menu</h3></Container>
        <ListaPlatos platos={menuList} isMenu />  
      </>
    )
}