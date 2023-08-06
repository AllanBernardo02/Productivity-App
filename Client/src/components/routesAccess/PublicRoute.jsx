import { Route, Navigate } from 'react-router-dom';

const PublicRoute = (props) => {
    if (localStorage.getItem("user")) {
        return <Navigate to="/todopage" />;
      } else {
        return props.children;
      }
};

export default PublicRoute;