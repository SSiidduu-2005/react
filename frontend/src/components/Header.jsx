import '../../CSS/Header.css'
import { LuSearchCheck } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { PiHamburger } from "react-icons/pi";
import { FcHome } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FaLightbulb } from "react-icons/fa6";
import { MdFilter7 } from "react-icons/md";

function Header() {
    return (
        <>  
           
            <div className='main'>
                <div id='st'><MdFilter7 className='fs'/>Mybnb</div>
                <div className='head'><FcHome className='home'/> <button>Home</button></div>
                <div className='head'><FcServices className='home' /><button>Services</button></div>
                <div className='head'><FaLightbulb className='home'/><button>Experiences</button></div>
                <br />
                <div className='end'>
                    <div className='head'></div><button>Become a Host</button>
                    <div className='logo'><CiGlobe /></div>
                    <div className='logo'><PiHamburger /></div>
                </div>
            </div>
            <br />
            <div className='searchbar'>
                <div className='index'>
                    <div className='element one'  > <p>Where</p><input type="text" placeholder='search destination'/> </div>
                    <div className='pulla'></div>
                    <div className='element two'  > <p>Check In</p><input type="text" placeholder='Add dates'/> </div>
                    <div className='pulla'></div>

                    <div className='element three'> <p>Check Out</p><input type="text" placeholder='Add dates'/> </div>
                    <div className='pulla'></div>

                    <div className='element four' > <p>Who</p><input type="text" placeholder='Add Guests'/> </div>
                </div>
            </div>

            <br /><br /><br /><br />
        </>
    );
}
export default Header;