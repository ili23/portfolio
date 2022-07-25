import './contact.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

function ContactForm() {
    return (

        <Container id="contactcontainer">
            <h1 id="contact">CONTACT ME</h1>
            <div className='form'>
            <form action="https://submit-form.com/oKIdm8nu">
                <Col className="inputfield"><label for="name" className='label'>Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" /></Col>
                <Col className="inputfield"><label for="email" className='label'>Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" /></Col>
                <Col className="inputfield"><label for="message" className='label'>Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                ></textarea></Col>
                <div className="form-submit"><Button id="submit-btn" variant="dark" type="submit">Send</Button></div>
            </form>
                 
            </div>
        </Container>
    )
}



export default ContactForm