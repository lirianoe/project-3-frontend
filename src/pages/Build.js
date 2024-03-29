import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import './pages.css'
import { useNavigate } from 'react-router-dom';

import black from '../media/black-stripes.jpeg'

const Build = () => {

    const navigate = useNavigate()
   

    const [ colorState, setColorState] = useState("black")
    const [stripeState, setStripeState] = useState('none')
    const [rimState, setRimState] = useState('black-rims')
    

    const [carArray, setCarArray] = useState([])
   

    const colorOptions = ['black', 'gray', 'red', 'white']
    const stripeOptions = ['gray-stripes', 'black-stripes', 'white-stripes', 'blue-stripes', 'red-stripes', 'none']
    const rimOptions = ['silver-rims', 'black-rims']

    const updateColorState = color => e => {
        e.preventDefault()
        setColorState(color)
    }

    const updateStripeState = stripe=> e => {
        e.preventDefault()
        setStripeState(stripe)
        
    }

    const updateRimState = rim => e => {
        e.preventDefault()
        setRimState(rim)
       
    }



    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/car/durango`)
        .then((durango) => {
            setCarArray(durango.data)
            console.log(durango.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    
    
    let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
    const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
        
    

    const addToFavorite = e => {
        e.preventDefault()
        console.log(foundCar)
        const storedToken = localStorage.getItem('authToken');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/favorite/myFavorites`, { myCar: foundCar._id
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
           
        {foundCar ? (  <div>
            <div className='build'>
                
                <div className='titleImg'>
                <h1>2022 Durango SRT</h1>
                <img src={foundCar.imageURL} alt="Durango Image" /> 
                
                </div>
                
                <div className='build-content'>
                    <h2>BUILD YOUR 2022 DURANGO SRT 392 AWD</h2>
                    <div className='net-price'>
                    <h2>Your Build Summary</h2>
                <h3>{foundCar.msrp} MSRP</h3>
                </div>

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

                    <button onClick={addToFavorite} className='add-favorites'>Add to Favorites</button>

                    </div>
                 
                </div>
               

            </div>
        </div>) : ( <p>loading...</p>)}
        </div>
    );
}

export default Build;
