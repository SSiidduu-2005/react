import '../../CSS/Header.css'
function Header(){
    return(
        <>
        <div className='main'>
            <div className='head'>Home</div>
            <div className='head'>Experiences</div>
            <div className='head'>Services</div>
            <div className='head'>Become a Host</div>
            <div className='logo'></div>
            <div className='logo'></div>
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
        
        </>
    );
}
export default Header;