import './Navbar.css';

const Navbar = () => {
    return (
        <div className='header'>
            <div className="logo">Nice H&R</div>
            {/* <div id='navbar' className={this.state.clicked ? "#navbar active": "navbar"}>
                <li><Link to="/home">Hotel</Link></li>
                <li><Link to="/rooms-page">Rooms</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About and Contact</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <Link to="/book" className="action-btn">Book Now</Link>
            </div> */}
            {/* <div className="dropdown-menu" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div> */}
        </div>
    );
}

export default Navbar;
