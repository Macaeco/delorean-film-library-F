import {Navigate} from 'react-router-dom';

function ProtectedPage({children}){
    const access_token = localStorage.getItem('token'); 
    
    if(access_token===null){ 
        return <Navigate to={'/login'} replace></Navigate>
    }
    return children; 
}

export default ProtectedPage;