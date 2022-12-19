import './Component.css';
import videoHead from '../media/srt-header.mp4'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='head'>
            <video src={videoHead} autoPlay loop muted/>
            <div className='headerText'>
                Dream It? Build it. <br/>
                Buy it!
                <div>
                    <Link className='viewVehicle' to='/vehicles'>View All Vehicles</Link>
                </div>

            </div>
        </div>
    );
}

export default Header;
