import React from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import './Home.css'
import BeerListItem from '../../components/BeerListItem/index'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({beers: data});
                console.log(this.state.beers)
            })
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="heading">PUNK BEERS</h1>
                    <Row>
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