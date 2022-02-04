import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const tokenSaved = localStorage.getItem('recetas-token');
    !tokenSaved && navigate("/login");
  }, [])

  return (
    <></>
  );
}

export default App;
