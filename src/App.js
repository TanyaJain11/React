// import logo from './logo.svg';
import Header from "./component/Header"
import './App.css';
import Button from "./component/Button"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <Header title = 'React Tutorial'/>
  
      {/* <Header title1='React Tutoria1111111l'/> */}
    </div>
  );
}

export default App;