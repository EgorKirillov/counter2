import React from 'react';
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';
import { PATH } from '../Pages/Pages';

const Header = () => {
    return (

            <div className={s.conteiner}>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}
                         to={PATH.v1}
                >Counter V1.0</NavLink>

                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}
                         to={PATH.v2}
                >Counter V2.0</NavLink>
                <div className={s.block}> </div>
            </div>

    );
};

export default Header;