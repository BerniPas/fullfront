
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';


const MostrarProductos = () => {

    const [productos, setProductos] = useState([]);

    //const URL = process.env.REACT_APP_API_URL_SERVER_GET;

    const obtenerProductos = useCallback(async () => {

        try {
            
                const respuesta = await axios.get(`${process.env.REACT_APP_API_URL_PRODUCTOS}`);
                setProductos(respuesta.data);

                //console.log(respuesta);
                //console.log(respuesta.status);
                //console.log(productos);


        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    }, []);


    useEffect(() => {
        obtenerProductos();
    }, [obtenerProductos]);


    return (
        <>
            <h1 className='container mt-5 text-center'>
                Productos en Stock
            </h1>
            <Container>
                <Row>
                    {productos.map(producto => (
                        <Col key={producto._id}>
                            <Card style={{ width: '18rem', margin: '3px' }}>
                                <Card.Img variant="top" src={producto.imagen} />
                                <Card.Body>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Text>
                                        {producto.precio}
                                    </Card.Text>
                                    <Button variant="primary">Descripción</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default MostrarProductos;