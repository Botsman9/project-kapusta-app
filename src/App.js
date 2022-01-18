import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';
import operations from './redux/auth/auth-operartions';

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefresh = useSelector(state => state.auth.isRefresh);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userOperations.getAllUserInfo());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (sid) {
      dispatch(operations.refresh({ sid }));
    }
  }, [dispatch, sid]);

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}

export default App;
