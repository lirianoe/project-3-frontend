import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import './pages.css'
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const BuildEdit = () => {

    const { favoriteId } = useParams()
    const navigate = useNavigate()

    // const [colorOptions, setColorOptions] = useState(['black', 'gray', 'red', 'white'])

    const [ colorState, setColorState] = useState("black")
    const [stripeState, setStripeState] = useState('none')
    const [rimState, setRimState] = useState('black-rims')
    

    const [carArray, setCarArray] = useState([])
    const [carObject, setCarObject] = useState(null)

    const colorOptions = ['black', 'gray', 'red', 'white']
    const stripeOptions = ['gray-stripes', 'black-stripes', 'white-stripes', 'blue-stripes', 'red-stripes', 'none']
    const rimOptions = ['silver-rims', 'black-rims']




    // let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
    // const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)

    const updateColorState = color => e => {
        e.preventDefault()
        setColorState(color)
        let searchQuery = `durango_${color}_${stripeState}_${rimState}`
            const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
            setCarObject(foundCar)
    }

    const updateStripeState = stripe=> e => {
        e.preventDefault()
        setStripeState(stripe)
        let searchQuery = `durango_${colorState}_${stripe}_${rimState}`
            const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
            setCarObject(foundCar)
    }

    const updateRimState = rim => e => {
        e.preventDefault()
        setRimState(rim)
        let searchQuery = `durango_${colorState}_${stripeState}_${rim}`
        const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
        setCarObject(foundCar)
    }


//    let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
//    const object = carArray.filter((thisCar) => thisCar.optionString === searchQuery)
    // setCarObject(preset[0])


    useEffect(()=> {
        const storedToken = localStorage.getItem('authToken');

        Promise.all([
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/car/durango`),
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/favorite/myFavorites/${favoriteId}`, {
                headers: {
                    Authorization: `Bearer ${storedToken}`
                }
            })
        ])
        .then((axiosResArray) => {
            const fav = axiosResArray[1];
            const durango = axiosResArray[0];

            setCarArray(durango.data)

            let searchQuery = fav.data.myCar.optionString
            const preset = durango.data.find((thisCar) => thisCar.optionString === searchQuery)
            setCarObject(preset)

            // let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
            // const preset = durango.data.find((thisCar) => thisCar.optionString === searchQuery)
            // setCarObject(preset)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    
    
    // let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
    // const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
        
    

    const updateFavorite = e => {
        e.preventDefault()
        //console.log(foundCar)
        const storedToken = localStorage.getItem('authToken');
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/favorite/myFavorites`, { 
            myCar: carObject._id,
            _id: favoriteId
        }, {
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        })
        .then( axiosResponse => {
            console.log(axiosResponse.data)
            navigate('/favorites')
        })
        .catch(err => console.log(err))
        
    }

   
    return (
        <div>
           
        {carObject ? (  <div>
            <div className='build'>
                <div className='titleImg'>
                <h1>2022 Durango SRT</h1>
                <img src={carObject.imageURL} alt="Durango Image" /> 
                </div>
                
                <div className='build-content'>
                    <h2>BUILD YOUR 2022 DURANGO SRT 392 AWD</h2>
                   <div className='color-form'>
                    <h1>EXTERIOR COLORS</h1>
                    <form>
                    
                    {colorOptions.map(c => {
                        return <button className={`color-button ${c}`} onClick={updateColorState(c)}></button>
                    })}
                    </form>
                   </div>

                   <div className='stripes-form'>
                    <h1>STRIPES</h1>
                    <form>
                    
                    {stripeOptions.map(s => {
                        return <button className={`stripes-button ${s}`} onClick={updateStripeState(s)}></button>
                    })}
{/* 
                    <button className='stripes-button gray-stripes'></button>
                    <button className='stripes-button black-stripes'></button>
                    <button className='stripes-button white-stripes'></button>
                    <button className='stripes-button blue-stripes'></button>
                    <button className='stripes-button red-stripes'></button> */}
                    </form>
                   </div>


                    <div className='rims-form'>
                   <h1>RIMS</h1>
                    <form>

                    {rimOptions.map(s => {
                        return (
                            <div className='rims-info'>
                            <button className={`rims-button ${s}`} onClick={updateRimState(s)}></button>
                            <h3></h3>
                            </div>
                        )
                    })}

                    
                    </form>

                    <button onClick={updateFavorite} className='add-favorites'>Update Favorites</button>

                    </div>
                 
                </div>
               

            </div>
        </div>) : ( <p>loading...</p>)}
        </div>
    );
}

export default BuildEdit;
