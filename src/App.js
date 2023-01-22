import './App.css';
import {HeroBanner, AboutMe, Cat, FixedCat, Skills, Project} from './components';

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

const isProjects = () => {
  if (window.location.pathname === "/projects") {
    return (<div>
        <Project/> 
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
      {isProjects()}
    </div>
  );
}

export default App;
