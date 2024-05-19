import { Link } from "react-router-dom";
import './Navbar.css';
import { Component } from "react";
import facebook from './facebook.png';

class Navbar extends Component {
    state = { clicked: false, hasAccessToken: false };

    componentDidMount() {
        const accessToken = localStorage.getItem('Saved Token');
        if (accessToken) {
            this.setState({ hasAccessToken: true });
        }
        else {
            this.setState({ hasAccessToken: false });
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <div className='header'>
                <div className="logo"><Link to="/home">Sam Studio</Link></div>
                <div id='navbar' className={this.state.clicked ? "#navbar active": "navbar"}>
                    <li><Link to="/home">Trang chủ</Link></li>
                    <li><Link to="/service">Dịch vụ</Link></li>
                    <li><Link to="/concept">Concept</Link></li>
                    <li><Link to="/wedding">Đồ cưới</Link></li>
                    <li><Link to="/aodai">Áo dài</Link></li>
                    <li><Link to="/aboutus">Về chúng tôi</Link></li>
                </div>
                <div className="contact">
                    <img src={facebook} alt="Facebook" className="dropbtn" onClick={this.handleClick} />
                    <div className={this.state.clicked ? "dropdown-content active" : "dropdown-content"}>
                        <Link to="https://www.facebook.com/samweddingstudio">Sam Wedding Studio</Link>
                        <Link to="https://www.facebook.com/profile.php?id=100085582650656">Sam Concept Studio</Link>
                        <Link to="https://www.facebook.com/profile.php?id=100066713267439">Ngọc Tuyết Store</Link>
                        <Link to="https://www.facebook.com/profile.php?id=100054429251953">Ngọc Tuyết Makeup</Link>
                        <Link to="https://www.facebook.com/tiemanhngoctuyet">Tiệm ảnh Sam</Link>
                    </div>
                </div>
                <div className="dropdown-menu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div> 
            </div>
        );
    }
}

export default Navbar;