// import logo from './logo.svg';
// import './App.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Get from '../Get';
import Post from '../Post';
// import '../../styles/main.scss';

function App() {
  return (
    <div className="_wrapper">
      <Header/>
      <main>
        <Banner/>
        <Get/>
        <Post/>
      </main>
    </div>
  );
}

export default App;
