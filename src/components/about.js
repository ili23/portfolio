import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ultimate from './ultimate.JPG';
function About() {
    return (
        <Container fluid className="about" id="about">
            <Row  className="row" id="row-about">
            <Col className="columns-about" sm={6}><img id="ultimate" src={ultimate}></img>
                </Col>
                <Col className="columns-about text-col" sm={5}>
                    <h1 className='about-title'>ABOUT</h1>
                    <p> Hi! I'm Iram Liu, and I am currently an undergraduate at Cornell University majoring in 
                        computer science and engineering. As a second-year undergraduate, I am still exploring the 
                        various applications of computer science before choosing a specialization. So far, I have 
                        enjoyed back-end development, dabbled in machine learning and automation, and developed 
                        some web-based apps. 
                        </p>
                        <p id='text3'>
                        Outside of school, I enjoy playing chess, collecting sneakers, and 
                        staying active by playing ultimate frisbee, hitting the gym, or running through the streets 
                        and trails. In the upcoming years, I am excited to strengthen my coding and problem-solving 
                        skills, engage in research, and contribute to open-source projects. Feel free to check out 
                        some of my past projects!</p>
                    
                </Col>
                
            </Row>
        </Container>
    )
}

export default About