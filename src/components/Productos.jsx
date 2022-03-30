import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { itemsDB } from '../data/itemsDB'

const Productos = () => {
  return (
    <Container className="my-5">
      <Row>
        {
          itemsDB.map( el => (
            <Col xs={12} md={4} xl={3} >

              <Card className="shadow m-2 m-md-1">
                <Card.Img variant="top" src={el.img} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                    $ {el.price}
                  </Card.Text>
                  <Button variant="secondary">Comprar</Button>
                </Card.Body>
              </Card>

            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Productos;

// estilos en linea.
// Redium
// css
// sass
// Bootstrap -- react-bootstrap
// MUI
