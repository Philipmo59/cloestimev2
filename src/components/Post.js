import React from "react";

export default function Post({clothes, setClothes}){
    function handleSubmit(event){
        event.preventDefault()
        const dataBase = {
            "category": event.target[0].value,
            "description": event.target[1].value,
            "image": event.target[2].value,
            "price": event.target[4].value,
            "storage": event.target[3].value
        }
        fetch('http://localhost:3000/clothes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBase)
    })
        .then(res=>{
            setClothes([...clothes, dataBase])
            if(res.status === 201) alert("Successful")
        })
    }
    console.log(clothes)
    console.log(typeof (clothes))
    return(
        <div className="Post">
            <p>Admin Use only</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Type of Article:
                    <select>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Pants">Pants</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Bag">Bag</option>
                    </select>
                </label>
                    Description:
                    <input type="text"/>
                    Image:
                    <input type="text"/>
                    Storage:
                    <input type="text"/>
                    Price:
                    <input type="text"/>
                <label>
                </label>
                <button>Add to Closet</button>
            </form>
        </div>  
    )
}
