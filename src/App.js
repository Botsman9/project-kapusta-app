import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';
import operations from './redux/auth/auth-operartions';

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(userOperations.getAllUserInfo());
    dispatch(operations.refresh({ sid: '61e5acbe38e99a6e6d8ac33a' }));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(operations.refresh({ sid: '61e5acbe38e99a6e6d8ac33a' }));
  // }, []);

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}

export default App;
