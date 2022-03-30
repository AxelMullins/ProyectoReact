import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductosAxiosApi = () => {
//   const [baseUrl, setBaseUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [baseUrl]);

  return (
    <div>
      <h3>Productos con Axios Api</h3>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosAxiosApi;
