import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../Assets/CSS/MenProduct.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Common/Context';

function CarD(props) {
  const {handleDelete} = useContext(MyContext);
  const deleteHandler = () => {
    handleDelete(props.id);
  };

  return (
    <div>
      <Row xs={1} md={1.5}>
        <Col className='men-card'>
          <Link style={{textDecoration:'none'}} to={`/CheckOut/${props.id}`}>
          
              <Card.Img style={{ height: '43vh', width: '40vh' }} variant='top' src={props.img} />
          </Link>
          <Card style={{ backgroundImage: 'linear-gradient(to right, #0F1B31, #385C88)', color: 'white' }}>
            <Card.Body>
              <Card.Title className='card-title'>{props.name}</Card.Title>
              <Card.Text className='card-text'>
                {props.discription}
                <br />
                {props.dial}
              </Card.Text>
              <Card.Text className='card-price'>PKR | {props.price}</Card.Text>
            </Card.Body>
          </Card>
          <button onClick={deleteHandler}><span className='box'>Delete</span></button>
        </Col>
      </Row>
    </div>
  );
}

export default CarD;
