import React from "react";
import {
Container,
Navbar,
Form,
FormControl,
Button
} from "react-bootstrap";

export default function NavBar({ searchReference, handleSearch }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Recetas</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Form>
                        <FormControl
                            ref={searchReference}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </Form>
                    <Button onClick={handleSearch} variant="success" className="ms-2">Buscar</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}