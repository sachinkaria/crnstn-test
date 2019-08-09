import React from 'react'
import { Col, Row, Spinner } from "react-bootstrap"
import './Loader.css'

const Loader = (props) => {
    return (
        <div>
            <Row>
                <Col className="loader-container" xs="12">
                    <Spinner animation="border" role="status"/>
                    <br/>
                    <span className="loader-tag">{props.message}</span>
                </Col>
            </Row>
        </div>
    );
};

export default Loader;