import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa'


const Favorites = () => {

    const [favorites, setFavorites] = useState([])

    const getFavs = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/favorite/myFavorites`, {
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
    }

    useEffect(()=> {
        getFavs()
    }, [])

    
    const deleteFavorite = (id) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/favorite/myFavorites/delete`, {
            _id: id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then((axiosRes) => {
            //setFavorites(durango.data)
            console.log(axiosRes.data)
            getFavs()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (

        <div className="favorite-page">
            <Link className="arrowLeft" to={'/build'}><FaArrowLeft/></Link>
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
                    <h3>Durango SRT 2022</h3>
                    <h3 className='favorite-name'>{fav.myCar.msrp}</h3>
                    <Link to={`/build/${fav._id}`}><button className="edit-bttn">edit</button></Link>
                    <button
                        className="edit-bttn"
                        onClick={() => deleteFavorite(fav._id)}
                    >delete</button>
                    
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
