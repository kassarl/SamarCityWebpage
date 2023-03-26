import React, {Component}  from 'react'
import Navigation from '../components/Navigation';
import { Image } from 'react-bootstrap';
import background from '../images/SamarCityBackdropNight.png';
import {Container, Row, Col} from 'react-bootstrap';


export class Home extends Component {
    render() {
        return(
            <div>
                
                <Container className='align-items-center'>
                     <Row>
                        <Col>
                            <h1 className="homeText"> Samar City</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3> An Arabic Language Learning Adventure Game</h3>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Image src={background} fluid="true" />
                </div>

                           
            </div>
        )
    }
}

export default Home;
