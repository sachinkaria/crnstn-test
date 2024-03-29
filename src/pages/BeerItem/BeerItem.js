import React from 'react'
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from '../../components/Loader';
import './BeerItem.css'
import {getBeer} from "../../actions/beers";


class BeerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: null,
            loading: true
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getBeer(id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const beer = nextProps.beer;
        this.state.beer !== nextProps.beer && this.setState({ beer, loading: false });
    }

    render() {
        const { beer, loading } = this.state;
        return (
            <Container>
                <Row className="back-link-container">
                    <Col>
                        <Link className="back-link" to={'/'}>
                        <span>Back</span>
                        </Link>
                    </Col>
                </Row>
                {
                    !loading ?
                    <div>
                        <Row>
                            <Col>
                                <h1 className="beer-title">
                                    {beer.name}
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="3">
                                <img className="beer-image" src={beer.image_url} alt={beer.name}/>
                            </Col>
                            <Col xs="12" md={{span: 8, offset: 1}}>
                                <h2 className="beer-abv">ABV: {beer.abv}</h2>
                                <h3 className="beer-tagline">{beer.tagline}</h3>
                                <p className="beer-description">{beer.description}</p>
                            </Col>
                        </Row>
                    </div>
                        :
                        <Loader message="Fetching your brewski!" />

                }
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        beer: state.beer
    }
};

const mapDispatchToProps = { getBeer };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerItem)
