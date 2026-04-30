import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Studentlist from './Studentlist'

function App() {
  const [count, setCount] = useState(0)

  const students = [
    {name:'Ankita',age: 21, course: 'AIML'},
    {name:'Pranali',age: 20, course: 'MERN'},
    {name:'Geeta',age: 22, course: 'GenAI'},
    {name:'Sanika',age: 22, course: 'CyberSecurity'},
    {name:'Sanika',age: 22, course: 'DataScience'},
    {name:'Prachi',age: 22, course: 'MachineLearning'},
    {name:'Seeta',age: 22, course: 'CloudComputing'},
    {name:'Mitali',age: 22, course: 'AI'},
    {name:'Prapti',age: 22, course: 'Python'},
    {name:'deepa',age: 22, course: 'Java'},
  ];

  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
    <h1>Student List  </h1>
    <button onClick={showMessage}>Click Me</button>
    <Studentlist students={students} />
    </>
  );
}

export default App
