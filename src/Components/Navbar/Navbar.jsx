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
                    <li><Link to="/rooms-page">Dịch vụ</Link></li>
                    <li><Link to="/menu">Concept</Link></li>
                    <li><Link to="/about">Đồ cưới</Link></li>
                    <li><Link to="/feedback">Áo dài</Link></li>
                    <li><Link to="/feedback">Về chúng tôi</Link></li>
                </div>
                <div className="contact">
                    <img src={facebook} alt="Logo"/>
                </div>
                <div className="dropdown-menu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div> 
            </div>
        );
    }
}

export default Navbar;