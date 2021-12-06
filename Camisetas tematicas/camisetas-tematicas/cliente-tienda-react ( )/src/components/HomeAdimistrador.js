import React, { useState, useEffect } from "react";

import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { Container, Button } from "react-bootstrap";

import CamisetasAdminstrador from "./camisetas.administrador.component";
import classCamisetas from './camisetas.module.css';
// import ListadoTareas from "./ListadoTareas";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const HomeAdministrador = ({ correoUsuario }) => {
  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [
    { id: 1, descripcion: "tarea falsa 1", url: "https://picsum.photos/420" },
    { id: 2, descripcion: "tarea falsa 2", url: "https://picsum.photos/420" },
    { id: 3, descripcion: "tarea falsa 3", url: "https://picsum.photos/420" },
  ];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    // buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      // si no existe
      await setDoc(docuRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setArrayTareas(tareasFetchadas);
    }

    fetchTareas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[arrayTareas]);

  return (
    <Container>
      <div className={classCamisetas.botonCerrarSesion}>
        <Button onClick={() => signOut(auth)} variant="danger">Cerrar sesión</Button>
        <h6>hola, sesión iniciada</h6>
      </div>
      <hr />
      <CamisetasAdminstrador />
      {/* <AgregarTarea
        arrayTareas={arrayTareas}
        setArrayTareas={setArrayTareas}
        correoUsuario={correoUsuario}
      />
      {arrayTareas ? (
        <ListadoTareas
          arrayTareas={arrayTareas}
          setArrayTareas={setArrayTareas}
          correoUsuario={correoUsuario}
        />
      ) : null} */}
    </Container>
  );
};

export default HomeAdministrador;
