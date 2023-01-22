import './App.css';
import {HeroBanner, AboutMe, Cat, FixedCat, WalkAwayCat, Skills, Project, Footer} from './components';

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
      <Footer/>
    </div>
      );
  }
}

const isAbout = () => {
  if (window.location.pathname === "/about") {
    return (<div>
        <AboutMe/> 
        <FixedCat/>
        <Footer/>
      </div>);
  }
}

const isProjects = () => {
  if (window.location.pathname === "/projects") {
    return (<div>
        <Project/> 
        <WalkAwayCat/>
        <Footer/>
      </div>);
  }
}

function App() {
  return (
    <div>
      {isHome()}
      {isAbout()}
      {isSkills()}
      {isProjects()}
    </div>
  );
}

export default App;
