import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const{id}=useParams()
    return (
        <div>
            this is done with {id}
        </div>
    );
};

export default Details;