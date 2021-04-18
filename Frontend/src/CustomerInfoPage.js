import React, {useEffect} from 'react';
import './CustomerInfoStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';

const CustomerInfoPage = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'sans-serif']
          }
        });
    }, []);
    return(
        <div className="background">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="5" className="left-column">
                        <Image id="customer-picture" src="github.png" height="200px" width="200px" roundedCircle/>
                        <h2>username</h2>
                    </Col>
                    <Col xs lg="7" className="right-column">
                        <h2>Info</h2>
                        <br/>
                        <p>First name : Kittiwat &nbsp; Last name : Eamkijkarn</p>
                        <p>
                            Address : <br/>
                            Phone Number : <br/>
                            Email :<br/>
                            Date of Birth :
                        </p>
                        <br/>
                        <Button id="order-button" variant="default" style={{color: "#EEEEEE", background: "#3C4F76"}}>YOUR ORDERS</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomerInfoPage;