import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './Home.css'
import BeerListItem from '../../components/BeerListItem/index'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            loading: true
        }
    }

    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({beers: data, loading: false});
            })
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="heading">PUNK BEERS</h1>
                    <Row>
                        {
                            this.state.loading &&
                                <Col className="spinner-container" xs="12">
                                    <Spinner animation="border" role="status" />
                                    <br />
                                    <span className="spinner-tag">Fetching dem beers!</span>
                                </Col>
                        }
                        {
                            this.state.beers.map(beer => (
                                <React.Fragment key={beer.id}>
                                    <BeerListItem {...beer} />
                                </React.Fragment>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;