import logo from './logo.svg';
import './App.css';
import useFullPageLoader from './CustomHook/useFullPageLoader';
import { useEffect } from 'react';

function App() {
  const [loader , showLoader , hiddenLoader] = useFullPageLoader(); 
  
  const fetchSpinner = async () =>{
      showLoader();
     
  }

  useEffect(()=>{
    fetchSpinner();
  }, [])
  return (
    <div>
      {loader}
    <div>
       
        Nguyễn Đình Khiêm

    </div>
    </div>
  );
}

export default App;
