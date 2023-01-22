import './App.css';
import {HeroBanner, AboutMe, Cat, FixedCat, Skills} from './components';

const isHome = () => {
  if (window.location.pathname === "/") {
    return (<div>
      <HeroBanner/>
      <Cat/>
    </div>
      );
  }
}

const isSkills = () => {
  if (window.location.pathname === "/skills") {
    return (<div>
      <Skills/>
      <FixedCat/>
    </div>
      );
  }
}

const isAbout = () => {
  if (window.location.pathname === "/about") {
    return (<div>
        <AboutMe/> 
        <FixedCat/>
      </div>);
  }
}

function App() {
  return (
    <div>
      {isHome()}
      {isAbout()}
      {isSkills()}
    </div>
  );
}

export default App;
