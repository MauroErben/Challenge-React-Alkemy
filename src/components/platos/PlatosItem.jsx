import React from "react";
import { Button, Col } from "react-bootstrap";

export default function PlatosItem({ plato, isMenu, handleAdd }) {
    const {id, image, title, vegan } = plato;

    const addPlato = () => {
        handleAdd(id);
    }

    return (
        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} className="mt-2">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="plato" />
                <div className="card-body">
                    {/* TITLE */}
                    <h5 className="card-title">{title}</h5>
                    
                    {/* TAGS */}
                    {vegan ? <span className="badge bg-success">Vegano</span>
                    : <span className="badge bg-primary">Común</span>}

                    {/* DESCRIPTION */}
                    <p className="card-text">...</p>

                    {/* BUTTONS */}
                    {isMenu ?
                        <>
                            <Button variant='danger'>Eliminar</Button>
                            <Button className="ms-2" variant='warning'>Detalles</Button>
                        </>
                    : <Button onClick={addPlato} variant="success">Agregar</Button>}
                </div>
            </div>
        </Col>
    )
}