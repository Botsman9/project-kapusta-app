import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';
import BackgroundCont from './components/BackgroundCont/BackgroundCont';
import BackgroundLogin from './components/BackgroundLogin/BackgroundLogin';
import Container from './components/Container/Container';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(userOperations.getAllUserInfo());
  }, [dispatch]);

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
