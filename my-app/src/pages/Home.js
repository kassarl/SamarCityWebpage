import React, {Component}  from 'react'
import Navigation from '../components/Navigation';
import { Image } from 'react-bootstrap';
import background from '../images/SamarCity_Background.png';

const divStyle = {
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  };


export class Home extends Component {
    render() {
        return(
            <div>
                <div style={divStyle}>
                    </div>                            
            </div>
        )
    }
}

export default Home;
