import './Component.css';
import runner from '../media/4runner.png'
import camry from '../media/camry.png'
import corolla from '../media/corolla.png'
import palisade from '../media/palisade.png'
import santafe from '../media/santafe.png'
import tucson from '../media/tucson.png'
import seltos from '../media/seltos.png'
import sorento from '../media/sorento.png'
import telluride from '../media/telluride.png'

const Discover = () => {

    let allCars = [
        {
        name: 'Seltos',
        image: {seltos},
        msrp: '$25,990'
    },

    {
        name: '4Runner',
        image: {runner},
        msrp: '$38,805'
    },

    {
        name: 'Tucson',
        image: {tucson},
        msrp: '$26,450'
    },
    {
        name: 'Sorento',
        image: {sorento},
        msrp: '$29,990'
    },

    {
        name: 'Corolla',
        image: {corolla},
        msrp: '$21,550'
    },
    {
        name: 'Palisade',
        image: {palisade},
        msrp: '$35,250'
    },
    {
        name: 'Telluride',
        image: {telluride},
        msrp: '$35,690'
    },
    {
        name: 'Camry',
        image: {camry},
        msrp: '$25,945'
    },
    {
        name: 'Santa Fe',
        image: {santafe},
        msrp: '$28,200'
    },
]




  

    return (
        <div className='allCars'>
             {allCars.map(car => {
            return (
                <div className='slide hi-slide'>
            <div className='hi-prev'></div>
            <div className='hi-next'></div>
            <ul>
                <li>
                    <img src={car.image} />
                </li>
            </ul>
        </div>
            )
        })}
        
        </div>
       
    );
}

export default Discover;
