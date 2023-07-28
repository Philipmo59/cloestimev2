import React from "react";

export default function ClothingCard({id,description,image,price,storage}){
    return(
        <div key={id}>
            <h2>{description}</h2>
            <img src={image} alt="clothes"/>
            <h3>Price: ${price}</h3>
            <h3>Quantity: {storage}</h3>
        </div>
    )
}