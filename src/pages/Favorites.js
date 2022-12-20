import { useEffect, useState } from "react"
import axios from 'axios'

const Favorites = () => {

    const [favorites, setFavorites] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/favorite/myFavorites', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then((durango) => {
            setFavorites(durango.data)
            // let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
            // const preset = durango.data.find((thisCar) => thisCar.optionString === searchQuery)
            // setCarObject(preset)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {favorites.map(fav => {
                return (
                    <div>
                        <p>{fav.myCar.imageURL}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Favorites;
