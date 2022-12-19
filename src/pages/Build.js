import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import './pages.css'
import Navbar from '../components/Navbar';

const Build = () => {

    // const [colorOptions, setColorOptions] = useState(['black', 'gray', 'red', 'white'])

    const [ colorState, setColorState] = useState("black")
    const [stripeState, setStripeState] = useState('none')
    const [rimState, setRimState] = useState('black-rims')
    

    const [carArray, setCarArray] = useState([])
    const [carObject, setCarObject] = useState(null)

    const colorOptions = ['black', 'gray', 'red', 'white']




    // let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
    // const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)

    const updateColorState = color => e => {
        e.preventDefault()
        setColorState(color)
        let searchQuery = `durango_${color}_${stripeState}_${rimState}`
            const foundCar = carArray.find((thisCar) => thisCar.optionString === searchQuery)
        setCarObject(foundCar)
    }


//    let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
//    const object = carArray.filter((thisCar) => thisCar.optionString === searchQuery)
    // setCarObject(preset[0])


    useEffect(()=> {
        axios.get('http://localhost:3001/car/durango')
        .then((durango) => {
            setCarArray(durango.data)
            let searchQuery = `durango_${colorState}_${stripeState}_${rimState}`
            const preset = durango.data.find((thisCar) => thisCar.optionString === searchQuery)
            setCarObject(preset)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    
    
    
        
    //let carObject = carArray.filter((thisCar) => thisCar.optionString === searchQuery)



   
    return (
        <div>
            <Navbar/>
        {carObject ? (  <div>
            <div className='build'>
                <div className='titleImg'>
                <h1>2022 Durango SRT</h1>
                <img src={carObject.imageURL} alt="Durango Image" /> 
                </div>
                
                <div className='build-content'>
                    <h2>BUILD YOUR 2022 DURANGO SER 392 AWD</h2>
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
                    
                    <button className='stripes-button gray-stripes'></button>
                    <button className='stripes-button black-stripes'></button>
                    <button className='stripes-button white-stripes'></button>
                    <button className='stripes-button blue-stripes'></button>
                    <button className='stripes-button red-stripes'></button>
                    </form>
                   </div>


                    <div className='rims-form'>
                   <h1>RIMS</h1>
                    <form>
                    <div className='rims-info'>
                         <button className='rims-button silver-rims'></button>
                         <h3>SILVER RIMS</h3>
                    </div>
                    <div className='rims-info'>
                        <button className='rims-button black-rims'></button>
                        <h3>BLACK RIMS</h3>
                    </div>
                    </form>
                    </div>
                 
                </div>
               

            </div>
        </div>) : ( <p>loading...</p>)}
        </div>
    );
}

export default Build;
