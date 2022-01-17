import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes.jsx';
import * as userOperations from './redux/user/userOperations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.getAllUserInfo());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}

export default App;
