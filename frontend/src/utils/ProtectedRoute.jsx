import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the private routes
function ProtectedRoute({ redirectPath = '/login' }) {
    const token = getToken();

    if( !token ) return <Navigate to={redirectPath} />
    else return <Outlet />;
}
 
export default ProtectedRoute;