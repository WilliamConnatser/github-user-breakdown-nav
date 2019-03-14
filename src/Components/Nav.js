import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';


class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuClassList: 'nav-menu'
        };
    }

    toggleMenu() {
        if(this.state.menuClassList.toString().includes('nav-menu-active')) {
            this.setState({
                menuClassList: 'nav-menu'
            });
        } else {
            this.setState({
                menuClassList: 'nav-menu nav-menu-active'
            });
        }
    }

    render() {
        return (
            <nav className="nav">
                <button className="nav-button" onClick={this.toggleMenu.bind(this)}>||||</button>
                <div className={this.state.menuClassList}>
                    <Link to="/" className="nav-menu-item">Info</Link>
                    <Link to="/blog" className="nav-menu-item">Blog</Link>
                </div>
            </nav>
        )
    }
}

export default Nav;