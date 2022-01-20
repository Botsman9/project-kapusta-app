import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';
import operations from './redux/auth/auth-operartions';
import BackgroundCont from './components/BackgroundCont/BackgroundCont';
import BackgroundLogin from './components/BackgroundLogin/BackgroundLogin';
import Container from './components/Container/Container';
import { getIsLoggedIn } from './redux/auth/auth-selectors';
import { useLocation } from 'react-router';
import { setAuth } from './redux/auth/auth-slise';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  const accessToken = new URLSearchParams(location.search).get('accessToken');
  const refreshToken = new URLSearchParams(location.search).get('refreshToken');
  const sid = new URLSearchParams(location.search).get('sid');

  useEffect(() => {
    dispatch(userOperations.getAllUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && !accessToken) {
      dispatch(operations.refresh());
    }
  }, [accessToken, dispatch, isLoggedIn]);

  useEffect(() => {
    if (!accessToken) return false;
    dispatch(setAuth({ accessToken, refreshToken, sid }));
    dispatch(userOperations.getAllUserInfo());
  });

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
