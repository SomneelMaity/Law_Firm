import './App.css';
import Choose from './components/Choose/Choose';
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
      <Choose />
    </div>
  );
}

export default App;
