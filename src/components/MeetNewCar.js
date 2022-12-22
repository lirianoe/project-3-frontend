import './Component.css';
import { Link } from 'react-router-dom';
import bmw from '../media/meetbmw.jpg'
import durango from '../media/meetdurango.png'
import challenger from '../media/meetchallenger.jpeg'


const MeetNewCar = () => {
    return (
        <div className='meet'>
            <div className='meetCar fade'>
                <img src={durango} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2022 Dodge Durango SRT</h3>
                    
                        <a className='meetBtn' href='https://www.dodge.com/durango.html'>Meet Durango</a>
                    
                </div>
            </div>

            <div className='meetCar fade'>
                <img src={bmw} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2022 BMW X6</h3>
                    <div>
                        <a className='meetBtn' href='https://www.bmwusa.com/vehicles/x-models/x6/sports-activity-coupe/overview.html'>Meet BMW</a>
                    </div>
                </div>
            </div>

            <div className='meetCar fade'>
                <img src={challenger} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2022 Dodge Challenger</h3>
                    <div>
                        <a className='meetBtn' href='https://www.dodge.com/challenger.html'>Meet Challenger</a>
                    </div>
                </div>
            </div>
            <a class="prev" onclick="plusSlides(-1)"></a>
            <a class="next" onclick="plusSlides(1)"></a>

        </div>
    );
}

export default MeetNewCar;
