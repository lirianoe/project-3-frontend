import runner from '../media/4runner.png'
import camry from '../media/camry.png'
import corolla from '../media/corolla.png'
import palisade from '../media/palisade.png'
import santafe from '../media/santafe.png'
import tucson from '../media/tucson.png'
import seltos from '../media/seltos.png'
import sorento from '../media/sorento.png'
import telluride from '../media/telluride.png'
import durango from '../media/durango.jpeg'
import charger from '../media/charger.jpeg'
import challenger from '../media/challenger.jpeg'

import { FaArrowLeft } from 'react-icons/fa'




import { Link } from 'react-router-dom'


const AllVehicles = () => {

    let dodgeCars = [
        {
            name: 'Durango SRT 392',
            image: durango,
            msrp: '$70,295'
        },
        {
            name: 'Charger SRT Jailbreak',
            image: charger,
            msrp: '$89,135'
        },
        {
            name: 'Challenger SRT Hellcat',
            image: challenger,
            msrp: '$70,835'
        }
    ]

    let kiaCars = [
        {
        name: 'Seltos',
        image: seltos,
        msrp: '$25,990'
    },
    {
        name: 'Sorento',
        image: sorento,
        msrp: '$29,990'
    },
    {
        name: 'Telluride',
        image: telluride,
        msrp: '$35,690'
    },

]

let toyotaCars = [
    {
    name: '4Runner',
    image: runner,
    msrp: '$38,805'
},
{
    name: 'Corolla',
    image: corolla,
    msrp: '$21,550'
},
{
    name: 'Camry',
    image: camry,
    msrp: '$25,945'
},

]

let hyundaiCars = [
    {
    name: 'Tucson',
    image: tucson,
    msrp: '$26,450'
},
{
    name: 'Palisade',
    image: palisade,
    msrp: '$35,250'
},
{
    name: 'Santa Fe',
    image: santafe,
    msrp: '$28,200'
},

]

    return (
        <div className='all-vehicle'>
             <Link className="arrowLeft" to={'/'}><FaArrowLeft/></Link>
            <h1>BUILD YOUR VEHICLE</h1>
            <div className='cars'>
                <h2>DODGE</h2>
                <div className='car'>
                    {dodgeCars.map(dodge => {
                        return (
                            <div className='singleCar'>
                               <img src={dodge.image} alt='car'/>
                               <div>
                                 <h3>{dodge.name}</h3> 
                                 <h3 className='msrp'>{dodge.msrp} <span>initial MSRP</span></h3> 
                                 <Link to='/build' className='build-bttn'>BUILD</Link>
                                 </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='cars'>
                <h2>KIA</h2>
                <div className='car'>
                    {kiaCars.map(kia => {
                        return (
                            <div className='singleCar'>
                               <img src={kia.image} alt='car'/>
                               <div>
                                 <h3>{kia.name}</h3> 
                                 <h3 className='msrp'>{kia.msrp} <span>initial MSRP</span></h3> 
                                 <Link to='/build' className='build-bttn'>BUILD</Link>
                                 </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='cars'>
                <h2>HYUNDAI</h2>
                <div className='car'>
                    {hyundaiCars.map(h => {
                        return (
                            <div className='singleCar'>
                               <img src={h.image} alt='car'/>

                               <div>
                                 <h3>{h.name}</h3>
                                 <h3 className='msrp'>{h.msrp} <span>initial MSRP</span></h3> 
                                 <Link to='/build' className='build-bttn'>BUILD</Link>  
                                 </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='cars'>
                <h2>TOYOTA</h2>
                <div className='car'>
                    {toyotaCars.map(t => {
                        return (
                            <div className='singleCar'>
                               <img src={t.image} alt='car'/>

                               <div>
                                 <h3>{t.name}</h3>  
                                 <h3 className='msrp'>{t.msrp} <span>initial MSRP</span></h3> 
                                 <Link to='/build' className='build-bttn'>BUILD</Link>
                                 </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllVehicles;
