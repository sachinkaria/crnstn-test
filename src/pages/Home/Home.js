import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="heading">PUNK BEERS</h1>
                    <Row>
                        <Col>
                            Beer 1
                        </Col>
                        <Col>
                            Beer 2
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;