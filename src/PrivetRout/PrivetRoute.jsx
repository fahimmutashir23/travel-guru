import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div className='flex justify-center mt-28'><span className="loading loading-spinner text-warning"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivetRoute.propTypes = {
   children: PropTypes.node 
};

export default PrivetRoute;