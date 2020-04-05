import React  from 'react';
import '../../../utils/style.css'
import '../../../utils/check.css'

const Beer=({beer, setWishlist})=>{
    // const [checked,setChecked]=useState(false);
    // const [more,setMore]=useState(false)
    
    const Wish=()=>{
        setWishlist(wishlist => [...wishlist, beer])
    }  
        

    return(
        <>
        <div className="item">
            <h1 className="h2">{beer.name}</h1>
            <p><b>{beer.tagline}</b></p>
            <p>ABV: {beer.abv}%</p>
            <p>IBU: {beer.ibu}</p>
            <p><b>Food pairing:</b><br/>
            {beer.food_pairing[0]}<br/>
            {beer.food_pairing[1]}<br/>
            {beer.food_pairing[2]}</p>
            <button className="button">...more</button>
            <label className="container">Tasted
            <input type="checkbox" />
            <span className="checkmark"></span>
            </label>
            <div>
            <button className="button" onClick={Wish}>Add to wishlist</button>
            </div>
        </div>  
        </>
    )
}
export default Beer;

