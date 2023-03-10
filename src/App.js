import Skills from "./components/skills/skills"

import './App.css';

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="App">
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
