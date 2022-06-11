// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Get from '../Get';
import Post from '../Post';
// import '../../styles/main.scss';

function App() {
  const [reset, setReset] = useState(false);
  console.log('reset App', reset);
  
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
