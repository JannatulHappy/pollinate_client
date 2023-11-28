

import { Navigate, useLocation } from 'react-router-dom';
import Loader from "../components/Shared/Loader";
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <Loader></Loader>
    if (user) return children;

    // return <Navigate to="/login" state={{from: location}} replace="true" />
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
}

export default PrivateRoute;