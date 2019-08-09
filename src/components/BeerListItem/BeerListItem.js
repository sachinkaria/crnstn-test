import React from 'react'
import { Col } from 'react-bootstrap'
import './BeerListItem.css'

function BeerListItem(props) {
    return (
        <Col className="beer-list-item" xs="12" sm="6" md="4" lg="3">
            <div className="beer-list-item-details" style={{marginBottom: '20px'}}>
                <h4 style={{fontWeight: 'bold'}}>{props.name}</h4>
                <span>{props.abv}%</span>
            </div>
            <img className="beer-list-item-image" src={props.image_url} alt={props.name}/>
            <span style={{
                position: 'absolute',
                bottom: 0,
                left: '20px',
                fontSize: '18px'
            }}>More details</span>
        </Col>
    )
}

export default BeerListItem;