import { NavLink } from 'react-router-dom'

const AuthNAv = () => {
    return (<div>
        <NavLink
            to='/register'
            exact
        // activeStyle={s.activeLink}
        >
            Register
            </NavLink>
        <NavLink
            to='/login'
            exact
        // activeStyle={s.activeLink}
        >
            Login
            </NavLink>
    </div>
    );
};

export default AuthNAv;
