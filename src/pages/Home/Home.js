import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import BeerListItem from '../../components/BeerListItem/index'
import Loader from '../../components/Loader';
import { getBeers } from '../../actions/beers/index'

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
        const beers = this.props.beers;
        beers.length < 1 ? this.props.getBeers()
            :
        this.setState({ beers, loading: false });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const beers = nextProps.beers;
        this.state.beers !== nextProps.beers && this.setState({ beers, loading: false });
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

const mapStateToProps = (state) => {
    return {
        beers: state.beers
    }
};

const mapDispatchToProps = { getBeers };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)