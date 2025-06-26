import '../../CSS/Header.css'
function Header(){
    return(
        <>
        <div className='main'>
            <div className='head'>Home</div>
            <div className='head'>Experiences</div>
            <div className='head'>Services</div>
            <br />
            <div className='end'>
            <div className='head'>Become a Host</div>
            <div className='logo'></div>
            <div className='logo'></div>
            </div>
        </div>
        <br />
        <div className='searchbar'>
            <div className='index'>
            <div className='path'>Where <p>Search destinations</p></div>
            <div className='path'>Check in <p>Add dates</p></div>
            <div className='path'>Where <p>Add dates</p></div>
            <div className='path'>Check in <p>Add guests</p></div>
            <div className='log'></div>
        </div>
        </div>
        <br />
        <br />
        <div className='main2'>
            <div className='pi'>Popular Cricketers in India </div> <br />

            <div className='img'>
                <div ><img src="msd.jpg" alt="Not load" /></div>
                <div ><img src="virat.webp" alt="Not load" /></div>
                <div><img src="rohit.jpg" alt="Not load" /></div>
            </div>

        </div>
        
        </>
    );
}
export default Header;