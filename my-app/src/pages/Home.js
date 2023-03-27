import React, {Component}  from 'react'
import Navigation from '../components/Navigation';
import { Image } from 'react-bootstrap';
import background from '../images/SamarCityBackdropNight.png';
import {Container, Row, Col} from 'react-bootstrap';
import Blog from '../components/Blog';

export class Home extends Component {
    render() {
        return(
            <div>
                <div>

                <Container className='homeHeader'>
                     <Row>
                        <Col>
                            <h1> Samar City</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3> An Arabic Language Learning Adventure Game</h3>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div>
                    <img src={background} className="cityImage" />
                </div>
               
            </div>
            
        )
    }
}

export default Home;
