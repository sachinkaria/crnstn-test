import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import BeerListItem from '../../components/BeerListItem/index'
import Loader from '../../components/Loader';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            loading: true,
            sortBy: 'select'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';

        this.state.beers.length < 1 &&
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({beers: data, loading: false});
            })
    }

    handleChange(e) {
        const value = e.target.value;
        const beers = _.orderBy(this.state.beers, value);

        this.setState({beers, sortBy: value})
    }


    render() {
        return (
            <div>
                <Container>
                    <h1 className="heading">PUNK BEERS</h1>
                    {
                        this.state.loading ?
                            <Loader message="Fetching dem beers!"/>
                            :
                            <Row>
                                <Col className="input-select-container">
                                    <label className="input-select-label" htmlFor="select-dropdown">Sort by</label>
                                    <select name="select-dropdown" value={this.state.sortBy}
                                            onChange={this.handleChange}>
                                        <option value="select" disabled>Select</option>
                                        <option value="name">Name</option>
                                        <option value="abv">ABV</option>
                                    </select>
                                </Col>
                            </Row>
                    }
                    <Row className="beer-list">
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