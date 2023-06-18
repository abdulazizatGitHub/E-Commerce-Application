import Carousel from 'react-bootstrap/Carousel';
import '../../Assets/CSS/Carousel.css'
function Carousal() {
  const data = [
    {id: 1, img: "image.png", name: 'DIVERS', dial: '44MM', disc: 'GO BOLDER AND DEEPER WITH DIVER'},
    {id: 2, img: "image1.png", name: 'P-51 ROSE GOLD', dial: 'TITANIUM', disc: 'LIMITED EDITION'},
    {id: 3, img: "image2.png", name: 'DIVERS FULL LUME', dial: '44MM', disc: 'A Shining Example of bold, Swiss innovation'},
  ]
  return (
    <Carousel style={{ height: '80vh' }}>
      {
        data.map((item,idx) => (
          <Carousel.Item className='carousel' interval={1000} key={idx}>
        <img style={{ height: '80vh' }}
          className="d-block w-100"
          src={require(`../../Assets/Images/${item.img}`)}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-details'>
          <h1 className='carousel-title'>{item.name}</h1>
          <p className='carousel-dial'>{item.dial}</p>
          <p className='carousel-disc'>{item.disc}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Carousal;