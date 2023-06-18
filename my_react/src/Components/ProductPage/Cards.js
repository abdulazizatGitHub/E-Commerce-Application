import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import '../../Assets/CSS/Card.css';
import { Link } from "react-router-dom";
function Cards(){
    
    const images = [
        { image1: 'image1.png', image2: 'image1_1.png', 
        name: 'MENS'},
        { image1: 'image2.png', image2: 'image2_1.png',
        name: 'WOMENS'},
        { image1:  'image3.png', image2: 'image3_1.png',
        name: 'SMART WATCHES'},
      ];


    return(
        <div className="containe">
            <h1>COLLECTIONS</h1>

            <Container className="cont">
                <Row xs={1} md={3} >
                    {images.map((image, idx) => (
                        <Col className="img-wrapper" key={idx}>
                            {
                                image.name==='MENS' ?(
                                    <Link to = '/MenProduct'>
                                    <Card.Img className="simple-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image1}` )}/>
                                    <Card.Img className="hover-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image2}` )}/>
                                    </Link>
                                ):image.name === 'WOMENS' ? (
                                    <Link to = '/WomenProduct'>
                                        <Card>
                                        <Card.Img className="simple-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image1}` )}/>
                                        <Card.Img className="hover-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image2}` )}/>
                                        </Card>
                                    </Link>
                                ) : (
                                    <Link to = '/SmartWatches'>
                                        <Card>
                                        <Card.Img className="simple-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image1}` )}/>
                                        <Card.Img className="hover-img" variant="top" src={require(`../../Assets/Images/Cardimages/${images[idx].image2}` )}/>
                                        </Card>
                                    </Link>
                                )
                            }
                            <div className="header-wrapper"><h3>{images[idx].name}</h3></div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    )
}
export default Cards;