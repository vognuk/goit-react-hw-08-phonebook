import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'

const AuthNAv = () => {
    return (<div>
        <NavLink
            to='/register'
            exact
            styles={s.item}
            activeStyle={s.activeLink}
        >
            Register
            </NavLink>
        <NavLink
            to='/login'
            exact
            styles={s.item}
            activeStyle={s.activeLink}
        >
            Login
            </NavLink>
    </div>
    );
};

export default AuthNAv;
