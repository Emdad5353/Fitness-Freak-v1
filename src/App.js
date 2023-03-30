import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import './style.css';
import { Feature } from "./Components/Feature";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
    </div>
  );
}

export default App;
