import {useState} from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Get from '../Get';
import Post from '../Post';

function App() {
  // successful registration status
  const [reset, setReset] = useState(false);
  
  return (
    <div className="_wrapper">
      <Header/>
      <main>
        <Banner/>
        <Get reset={reset} setReset={setReset}/>
        <Post setReset={setReset}/>
      </main>
    </div>
  );
}

export default App;
