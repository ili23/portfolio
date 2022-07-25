import './projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import collegedebt from './collegedebt.png';
import yahoo from './yahoo.avif';
import Button from 'react-bootstrap/Button';
function Projects() {
    return (
        <Container id="projects" className='projects'>
            <h1 id="projects-title">SELECTED WORKS</h1>
            <Row className="card-row">
                <Card title="Bone Apple Teeth"
                    img="https://camo.githubusercontent.com/6da30c5414ae1d9d6b8d2ba1028ebdb7939d759a0c1afc03c821d5f79e8c5b56/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64626f70786c7075792f696d6167652f75706c6f61642f635f7363616c652c665f6175746f2c775f3830302f76313632323736343832372f526963686172642f53637265656e73686f745f323032312d30352d33315f426f6e655f4170706c655f54656574685f315f74377a676d732e706e67"
                    des="Recipe Sharing Platform Built In NuxtJS, Vuesax, and Firebase" 
                    github="https://github.com/ili23/Full-Stack-Bone-Apple-Teeth"/>

                <Card title="College Debt Analysis" 
                img={collegedebt}
                des="Final Project for Intro to Machine Learning Class Analyzing Factors Causing College Debt" 
                github="https://github.com/ili23/debt-prediction"/>
                <Card title="Yahoo Catchall Creator" 
                img={yahoo}
                des="Automated Script to Create Yahoo Disposable Emails" 
                github="https://github.com/ili23/Yahoo-Random-Catchall-Generator"/></Row>   
                <div className='button-contain'>
                <Button className="seemore-button" variant="dark" size="lg" href="https://github.com/ili23">See More Projects</Button></div>
        </Container>
    )
}

function Card(props) {
    return (
        <div className='card'>
            <h2 className='card-title'>{props.title}</h2>
            <img src={props.img} className='card-img'></img>
            <p className='card-des'>{props.des}</p>
            <Button variant="dark" href={props.github}>Github</Button>
        </div>
    )
}

export default Projects
