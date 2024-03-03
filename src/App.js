import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Weather from "./components/weather";

const App = () => {

  return (
    <div className='App'>
      <ToastContainer />
      <Weather />
    </div>
  );
};

export default App;
