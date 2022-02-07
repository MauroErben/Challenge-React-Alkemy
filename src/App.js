import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { searchComidas } from './components/api/index';
import swal from "sweetalert";
import NavBar from "./components/navbar/NavBar";
import SearchList from "./components/search/search";
import MenuList from "./components/menu/menu";
import { Container } from "react-bootstrap";

function App() {

  const [searchList, setSearchList] = useState([]);
  const [menu, setMenu] = useState([]);

  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenSaved = localStorage.getItem('recetas-token');
    !tokenSaved && navigate("/login");
  }, []);

  //function para buscar platos
  const handleSearch = async (e) => {
    e.preventDefault();
    const keywords = searchRef.current.value;
    if (keywords.length > 2) {
      const lista = await searchComidas(keywords);
      setSearchList(lista);
    } else {
      swal('¡Cuidado!', 'Debes ingresar mas de 2 caracteres de busqueda.', 'warning')
    }
  }

  //funcion para verificar si el plato ya existe en el menu
  const menuExist = (id) => {
    return menu.some(values => values.id === id);
  }

  //funcion para verificar si existen 2 platos veganos o 2 comunes.
  const isLimitPlatos = (plato) => {
    if (plato.vegan) {
      return menu.filter(plato => plato.vegan).length >= 2;
    } else {
      return menu.filter(plato => !plato.vegan).length >= 2;
    }
  }

  //funcion para agregar platos al menu
  const handleAdd = (id) => {
    const plato = searchList.find(plato => plato.id === id);
    if (menu.length >= 4) return;
    if (isLimitPlatos(plato)) {
      swal('¡Cuidado!', 'Debes agregar 2 platos comunes y 2 veganos', 'warning');
      return;
    }
    !menuExist(plato.id) && setMenu([...menu, plato])
  }

  return (
    <>
      <NavBar
        searchReference={searchRef}
        handleSearch={handleSearch}
      />
      
      <Container className="mt-3">
        Se han encontrado: {searchList.filter(platos => platos).length} resultados
      </Container>

      <SearchList
        listaPlatos={searchList}
        handleAdd={handleAdd}
      />
      <hr />
      <MenuList
        menuList={menu}
      />
    </>
  );
}

export default App;
