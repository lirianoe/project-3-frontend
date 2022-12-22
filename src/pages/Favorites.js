import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"


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
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const editFavorite = () => {
        axios.post('http://localhost:3001/favorite/updateFavorite')
    }

    const deleteFavorite = () => {

    }

    return (

        <div className="favorite-page">
            <div className="favorite-title">
              <h1>FAVORITES</h1>  
            </div>
            
        <div className="car-card">

            {favorites.map(fav => {
                return (
                    <div>

                <div className='favorite-car'>
                <img src={fav.myCar.imageURL} alt='car' className='favoriteImg'/>
                <div className='favorite-content'>
                    <h3 className='favorite-name'>{fav.myCar.optionString}</h3>
                    <Link to={`/build/${fav._id}`}><button className="edit-bttn">edit</button></Link>
                    <button className="edit-bttn">delete</button>
                    
                </div>
            </div>
                        
                    </div>
                )
            })}
        </div>

        </div>
       
    );
}

export default Favorites;
