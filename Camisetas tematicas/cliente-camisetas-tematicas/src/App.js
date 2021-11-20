import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import CreateShirt from "./components/create-shirt.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import RegistroCamisetas from "./components/registro-camisetas.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App">

                <Container>
                    <p>
                        CAMISETAS TEMATICAS
                    </p>
                </Container>


        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-Shirt"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-shirt"} className="nav-link">
                  Registrar Camiseta
                </Link>
              </Nav>

              <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                Camisetas
                </Link>
              </Nav>
              
              <Nav>
                <Link to={"/registro-camisetas"} className="nav-link">
                  Registro de camisetas
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Carrito de compras
                </Link>
              </Nav>
            </Nav>
            
          </Container>
        </Navbar>
      </header>
      
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateShirt} />
                <Route path="/create-shirt" component={CreateShirt} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/registro-camisetas" component={RegistroCamisetas} />
                <Route path="/student-list" component={StudentList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;





// import logo from './logo.svg';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

