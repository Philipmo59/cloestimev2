import React,{useState} from "react";

export default function Post({clothes, setClothes}){
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [price,setPrice] = useState("")
    const [storage,setStorage] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        const dataBase = {
            "key": description,
            "category": category,
            "description": description,
            "image": image,
            "price": price,
            "storage": storage
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
            console.log(clothes)
            if(res.status === 201) alert("Successful")
        })
    }
    return(
        <div className="Post">
            <p>Admin Use only</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Type of Article:
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Pants">Pants</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Bag">Bag</option>
                    </select>
                </label>
                    Description:
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>
                    Image:
                    <input type="text"value={image} onChange={(event) => setImage(event.target.value)}/>
                    Storage:
                    <input type="text" value={storage} onChange={(event) => setStorage(event.target.value)}/>
                    Price:
                    <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}/>
                <label>
                </label>
                <button>Add to Closet</button>
            </form>
        </div>  
    )
}
