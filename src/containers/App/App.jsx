// import logo from './logo.svg';
// import './App.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Get from '../Get';
// import '../../styles/main.scss';

function App() {
  return (
    <div className="_wrapper">
      <Header/>
      <main>
        <Banner/>
        <Get/>
      </main>
    </div>
  );
}

export default App;
