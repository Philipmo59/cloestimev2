import React from "react";
import ClothingCard from "./ClothingCard";
import { v4 as uuid } from "uuid"

export default function ClosetContainer({clothes}){
    if(clothes.length === 0) return <h1>Loading...</h1>

    const clothesImages = clothes.map((cloth)=>{
        return(
        <ClothingCard 
            key={uuid()} 
            description={cloth.description} 
            image={cloth.image} 
            price={cloth.price} 
            storage={cloth.storage}/>
    )})
    return(
        <div>
            <h1>Closet</h1>
            {clothesImages}      
        </div>
        
    )
}