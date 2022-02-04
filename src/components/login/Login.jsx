import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import getToken from "../api";

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email === '' || password === '') {
            swal('¡Cuidado!', 'No dejes campos en blanco', 'warning');
            return;
        }

        const { token } = await getToken(email, password);
        if (token !== undefined) {
            localStorage.setItem("recetas-token", token);
            navigate('/');
            emailRef.current.value = null;
            passwordRef.current.value = null;
        }
    }

    return (
        <Container fluid className="vh-100 d-flex flex-column justify-content-center bg-light">
            <Row className="justify-content-center">
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Form className="p-3" onSubmit={handleSubmit}>
                        <h2 className="text-center">Iniciar session</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Introduce tu email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Introduce tu contraseña" />
                        </Form.Group>

                        <Button type="submit" variant="success">Enviar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}