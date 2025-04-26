import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhonesDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
   const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
   
   } = singlePhone || {}
   return <div className='py-12 text-4xl'>PhoneDetails {name}</div>
    return (
        <div>
             PhonesDetails
        </div>
    );
};

export default PhonesDetails;