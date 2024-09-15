
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import img from './Calcu.png';
import imgA from './Axio.png';
import img2 from './home.png';
import Form from 'react-bootstrap/Form';

function Website() {
  return (
    <>
    
    <section id="home" className="sticky-top" >
    <Navbar expand="lg" className="bg-body" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">About Me</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
   

    <body>

    <section id="About" className="mx-5 my-5">
    <Container fluid>
      <h1 className="text-center" >About me</h1>

      <p className="text-center mx-5">I am Shayla, I'm passionate about designing and developing innovative software solutions. With a background in programming languages, data structures, and algorithms, I'm always looking to improve my skills in the field. I'm interested in building scalable, efficient, and user-friendly software systems that could make a real impact.
         Outside of academics, I'm always interested to look for new projects to work on and opportunities to learn from others in and out of the field.</p>
      
    </Container>
    </section>


    <section id="project" className="Proj">
    <Container className="p-5">
      <h1 className="text-center text-light pb-4">Projects</h1>
      <Row >
        <Col>

        <Card>
        <Card.Img variant="top" src={imgA} height={250} />
        <Card.Body className="text-center">
        <Card.Title >Axio UI</Card.Title>
        <Card.Text>
        It is only a concept and a UI proposal. This application is all about detecting fake news. The application's ability to scan and read articles raises privacy concerns.
        </Card.Text>
      </Card.Body>
      </Card>
        
        </Col>

        <Col>
        
        <Card>
        <Card.Img variant="top" src={img} height={250} />
        <Card.Body className="text-center">
        <Card.Title>Salary Calculator</Card.Title>
        <Card.Text>
        The program calculates how much you would earn based on the input provided, It will also automatically subtract deductions such as SSS, Pag-ibig, Phil-health, and Tax.
        </Card.Text>
      </Card.Body>
      </Card>

        </Col>


        <Col>

        <Card>
        <Card.Img variant="top" src={img2} height={250} />
        <Card.Body className="text-center">
        <Card.Title>365 Sample Website</Card.Title>
        <Card.Text>
        This is a website made based on a business called 365 wonders. It has both front end and backend, information sent from the booking page and contact us page are sent to an sql server.
        </Card.Text>
      </Card.Body>
      </Card>
        
        </Col>


      </Row>
      
    </Container>
    </section>


    <section id="Contact" className="d-flex justify-content-center my-5">
    <Card style={{ width: '50rem' }} >
      <Card.Body>
        
      <Form>
        <h1 className="text-center">Contact me</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email"required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Password" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
      </Row>
      

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Enter your message here" required/>
      </Form.Group>


      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
        
        
        </Card.Body>
    </Card>
    </section>

   </body>
    </>
  );
}

export default Website;