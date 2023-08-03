import React from "react";
import ClothingCard from "./ClothingCard";


export default function ClosetContainer({clothes}){
    if(clothes.length === 0) return <h1>Loading...</h1>

    const clothesImages = clothes.map((cloth)=>{
        return(
        <ClothingCard 
            key={cloth.id} 
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