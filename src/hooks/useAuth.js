import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectSignUpError,
  selectLogInError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const signUpError = useSelector(selectSignUpError);
  const logInError = useSelector(selectLogInError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    signUpError,
    logInError,
  };
};
