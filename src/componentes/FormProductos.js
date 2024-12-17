
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormProductos() {

    const [nombre, setNombre] = useState(''); // const nombre = ''
    const [precio, setPrecio] = useState(''); // const email = ''
    const [imagen, setImagen] = useState(null); // const password = ''

    const handleSubmit = async(e) => {
        e.preventDefault();

/*         const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('precio', precio);
        formData.append('imagen', imagen); */

        /* const producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen
        } */

        
        try {

            // CAMBIAR URL PARA QUE FUNCIONE Y CREAR UNA NUEVA RUTA EN EL BACKEND
            await axios.post( `${process.env.REACT_APP_API_URL_SERVER_POST}`, {
                nombre,
                precio, 
                imagen
            });

            console.log(nombre, precio, imagen);
            

            handleReset();

            Swal.fire({
                title: 'Enviado!',
                text: 'Click para seguir',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            handleReset();
            
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            
        }
    }

    const handleReset = () => {
        setNombre('');
        setPrecio('');
        setImagen('');
    }


    return (
        <>
        <h1 className='container mt-5 text-center'>
            Formulario de Productos
        </h1>
        <div className='d-flex container mt-5 text-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Nombre del Producto" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Precio del Producto</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="1000" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Imagen del Producto</Form.Label>
                    <Form.Control
                        type="text" 
                        value={imagen}
                        onChange={(e) =>setImagen(e.target.value)}
                        placeholder="URL de la imagen"
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit">Enviar Datos</Button>
                    <Button variant="warning" onClick={handleReset}>Limpiar Campos</Button>
                </div>
            </Form>

            <Imagen />
        </div>
        </>
    );
}

export default FormProductos;
