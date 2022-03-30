import { itemsDB } from "../data/itemsDB";

const Productos = () => {
  return (
    <div>
      <h3>Productos mapeados</h3>
      <ul>
        {itemsDB.map((el) => (
          <li key={el.id}>
            {el.name} - {el.price}
          </li>
        ))}
      </ul>

      <h3>Productos hardcodeados</h3>
      <ul>
        <li>Remera - $10000</li>
        <li>Campera - $10000</li>
        <li>Pantalon - $10000</li>
      </ul>
    </div>
  );
};

export default Productos;
