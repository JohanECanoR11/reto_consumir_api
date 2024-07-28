import { useEffect, useState } from 'react';
import axios from 'axios';

export const Coffee = () => {

  const [coffees, setcoffees] = useState([]);

  useEffect(() => {
    // Definir una función asíncrona para la petición a la API
    const fetchData = async () => {
      try {
        // Realizar la petición a la API
        const response = await axios.get('https://api.sampleapis.com/coffee/hot');

        // Formatear los datos a mostrar
        const coffeeData = response.data.map(data => ({
          id: data.id,
          title: data.title,
          image: data.image
        }));

        // Actualizar la variable de estado con los datos recibidos de la API pero formateados
        setcoffees(coffeeData);
        console.log(coffeeData);
      } catch (error) {
        console.error("Error al consultar los datos de la API: ", error);
      }
    }

    fetchData();

  }, []); // Array de dependencias vacío para que useEffect se ejecute una vez

  return (
    <div className='container text-center'>
      <h1>Tipos de Café</h1>
      <div className="row align-items-center card-deck">
        {coffees.slice(0, 8).map(coffee => (
          <div key={coffee.id} className="col-lg-3 card">
            <div className="card-header">
              <img src={coffee.image} alt={coffee.title} className="card-img-top image-size"/>
            </div>
            <div className="card-body">
              <h4 className='card-title'>{coffee.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

