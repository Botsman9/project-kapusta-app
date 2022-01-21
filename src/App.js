import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';
import operations from './redux/auth/auth-operartions';
import BackgroundCont from './components/BackgroundCont/BackgroundCont';
import BackgroundLogin from './components/BackgroundLogin/BackgroundLogin';
import Container from './components/Container/Container';
import { getIsLoggedIn, getRefreshToken } from './redux/auth/auth-selectors';
import { useLocation } from 'react-router';
import { setAuth } from './redux/auth/auth-slise';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const stateRefreshToken = useSelector(getRefreshToken);

  const { search } = useLocation();

  const accessToken = new URLSearchParams(search).get('accessToken');
  const refreshToken = new URLSearchParams(search).get('refreshToken');
  const sid = new URLSearchParams(search).get('sid');

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userOperations.getAllUserInfo());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && !stateRefreshToken && !accessToken) {
      dispatch(operations.refresh());
    }
  }, [accessToken, dispatch, isLoggedIn, stateRefreshToken]);

  useEffect(() => {
    if (!accessToken) return false;
    dispatch(setAuth({ accessToken, refreshToken, sid }));
    dispatch(userOperations.getAllUserInfo());
  }, [accessToken, dispatch, refreshToken, sid]);

  return (
    <>
      <Header />
      {!isLoggedIn && (
        <BackgroundCont>
          <Container>
            <AllRoutes />
          </Container>
        </BackgroundCont>
      )}
      {isLoggedIn && (
        <BackgroundLogin>
          <Container>
            <AllRoutes />
          </Container>
        </BackgroundLogin>
      )}
    </>
  );
}

export default App;
