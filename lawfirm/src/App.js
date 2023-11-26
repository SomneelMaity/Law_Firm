import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import MainBodyTopText from './components/MainBodyTopText/MainBodyTopText';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="fullBody">
      <div className="TopTwoSection">
        <Navbar />
        <HeroSection />
      </div>
      <MainBodyTopText />
    </div>
  );
}

export default App;
