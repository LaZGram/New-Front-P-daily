import React from 'react';
import { Link } from 'react-router-dom';
import cow from './cow.png';
import { BsFillPersonFill } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";

const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <h2><img src={cow} alt='Cow' className='cow'/> P'Daily</h2>
            <ul>
                <li>
                    <Link to="/User"><BiHomeAlt/> โปรไฟล์</Link>
                </li>
                <li>
                    <Link to="/Milk"><LuClipboardList/> กราฟ</Link>
                </li>
                <li>
                    <Link to="/Food"><LuClipboardList/> อาหาร</Link>
                </li>
                <li>
                    <Link to='/Tabledata'><LuClipboardList/> ทำนายวันผสมพันธุ์</Link>
                </li>
                <li>
                    <Link to='/Homefarmer'><BsFillPersonFill/> ผลประกอบการ</Link>
                </li>
                <li>
                    <Link to='/Homepage'><BsFillPersonFill/> หน้าหลัก</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
