import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  if (!localStorage.getItem('user')) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/signin" />;
  } else {
    // Render the protected component if the user is authenticated
    return props.children;
  }
};

export default PrivateRoute;