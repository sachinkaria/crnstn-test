import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BeerListItem.css'

function BeerListItem(props) {
    return (
        <Col className="beer-list-item" xs="12" sm="6" md="4" lg="3">
            <div className="beer-list-item-details" style={{marginBottom: '20px'}}>
                <h4 style={{fontWeight: 'bold'}}>{props.name}</h4>
                <span>ABV: {props.abv}%</span>
            </div>
            <img className="beer-list-item-image" src={props.image_url} alt={props.name}/>
            <Link to={`/beer/${props.id}`} className="beer-list-item-link">
            <span>More details</span>
            </Link>
        </Col>
    )
}

export default BeerListItem;