import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../store/greetingSlice';

const Home = () => {
  const dispatch = useDispatch();
  const greetingMsg = useSelector((state) => state.greetings.greetingState);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{ greetingMsg }</p>
    </div>
  );
};

export default Home;
