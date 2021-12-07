import React, { useState } from "react";
import Home from "./components/Home";
import HomeAdministrador from "./components/HomeAdimistrador";
// import Logueo from "./components/Logueo";
import Camisetas from "./components/camisetas.component";

// import CamisetasAdminstrador from "./components/camisetas.administrador.component";
// import RegistrarCamisetas from "./components/registrar-camisetas.component";
import axios from 'axios';


import firebaseApp from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  const [rol, setRol] = useState("public");

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      //setUsuarioGlobal(usuarioFirebase);
      consultarUsuarioByEmail(usuarioFirebase);
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
      setRol(null);
    }
  });

  //NUEVO METODO CONSULTA USUARIO A MONGO

  function consultarUsuarioByEmail(usuarioFirebase) {
    let formData = new FormData();
    formData.append('email', usuarioFirebase.email);
    const secretKey = localStorage.getItem('key');
    let url = 'http://localhost:3001/api/usuario/getbyemail';

    axios.post(url, formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `token ${secretKey}`
      }
    }).then((respUser) => {
      setRol(respUser.data ? respUser.data.rol : null);
      setUsuarioGlobal(usuarioFirebase);
    });

  }
  

  return (
    <>
      {usuarioGlobal && rol === 'Administrador' ? (
        <HomeAdministrador correoUsuario={usuarioGlobal.email} />
        // <CamisetasAdminstrador />
        // <RegistrarCamisetas />
      ) : usuarioGlobal ?
      <Home correoUsuario={usuarioGlobal.email} />
      : rol === "public" ?
      <div>cargando por favor espere...</div>
      :(
        <Camisetas />
      )}
    </>
  );
}

export default App;
