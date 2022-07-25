import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pfp from './pfp.jpg';
function Home() {
    return (
        <Container id="home" fluid className="container">
            <Row className="row">
                <Col className="columns text-col" sm={7}>
                    <div className='head'>Hi! I'm Iram!
                    </div>
                </Col>
                <Col className="columns" sm={5}><img id="pfp" src={pfp}></img>
                </Col>
            </Row>
                    
        </Container>

    )
}

export default Home