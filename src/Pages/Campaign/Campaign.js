import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Camp from '../Camp/Camp';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Campaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data=>setCampaigns(data))
    }, [])

    
    return (
        <div>
            <Header></Header>
            <div>
                <h1 className="text-start ps-5 pt-5 text-primary"><u>Upcoming Campaign</u></h1>
                <Container className="my-5 px-2 py-5 bg-info text-info rounded">
                    <Row>
                        
                            {
                                campaigns.map(campaign => <Camp
                                    key={campaign.id}
                                    campaign={campaign}
                                ></Camp>)

                        }
                        
                        
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaign;