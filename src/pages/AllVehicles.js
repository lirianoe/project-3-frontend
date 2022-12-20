import runner from '../media/4runner.png'
import camry from '../media/camry.png'
import corolla from '../media/corolla.png'
import palisade from '../media/palisade.png'
import santafe from '../media/santafe.png'
import tucson from '../media/tucson.png'
import seltos from '../media/seltos.png'
import sorento from '../media/sorento.png'
import telluride from '../media/telluride.png'

const AllVehicles = () => {

    let kiaCars = [
        {
        name: 'Seltos',
        image: {seltos},
        msrp: '$25,990'
    },
    {
        name: 'Sorento',
        image: {sorento},
        msrp: '$29,990'
    },
    {
        name: 'Telluride',
        image: {telluride},
        msrp: '$35,690'
    },

]

let toyotaCars = [
    {
    name: '4Runner',
    image: {runner},
    msrp: '$38,805'
},
{
    name: 'Corolla',
    image: {corolla},
    msrp: '$21,550'
},
{
    name: 'Camry',
    image: {camry},
    msrp: '$25,945'
},

]

let hyundaiCars = [
    {
    name: 'Tucson',
    image: {tucson},
    msrp: '$26,450'
},
{
    name: 'Palisade',
    image: {palisade},
    msrp: '$35,250'
},
{
    name: 'Santa Fe',
    image: {santafe},
    msrp: '$28,200'
},

]

    return (
        <div>
            <div>
                <h1>KIA</h1>
                <div>
                    {kiaCars.map(kia => {
                        return (
                            <div>
                               <img src={kia.image}/>
                             <h3>{kia.name}</h3>  
                            </div>
                           
                        )
                        
                        
                        
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllVehicles;
