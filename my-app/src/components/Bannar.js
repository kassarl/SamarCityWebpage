import {Container , Row} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../images/SamarCity_Background.svg";
export const Bannar = () => {
    return (
        <section className="bannar" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm laila`}<span className="wrap">lailabooya</span> </h1>
                        <p> the quick Brown Fox Jumps Over the Lazy dog</p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImg"/>
                    </Col>
                </Row>

            </Container>
            
        </section>
    )
}