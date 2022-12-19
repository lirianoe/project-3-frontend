import './Component.css';
import { Link } from 'react-router-dom';
import bmw from '../media/meetbmw.jpg'
import durango from '../media/meetdurango.png'
import challenger from '../media/meetchallenger.jpeg'


const MeetNewCar = () => {
    return (
        <div className='meet'>
            <div className='meetCar'>
                <img src={durango} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2023 Dodge Durango SRT</h3>
                    
                        <Link className='meetBtn' to='/meet-durango'>Meet Durango</Link>
                    
                </div>
            </div>

            <div className='meetCar'>
                <img src={bmw} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2023 BMW X6</h3>
                    <div>
                        <Link className='meetBtn' to='/meet-bmw'>Meet BMW</Link>
                    </div>
                </div>
            </div>

            <div className='meetCar'>
                <img src={challenger} alt='car' className='carImg'/>
                <div className='meet-content'>
                    <h3 className='car-name'>2023 Dodge Challenger</h3>
                    <div>
                        <Link className='meetBtn' to='/meet-challenger'>Meet Challenger</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MeetNewCar;
