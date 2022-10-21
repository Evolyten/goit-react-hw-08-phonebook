import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contactsSelectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...routePath }) {
  const isLoggedInd = useSelector(getIsLoggedIn);
  return isLoggedInd ? children : <Navigate to="/login" />;
}
