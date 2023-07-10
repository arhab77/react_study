import { Link, Outlet } from "react-router-dom";
import TugasHooks from "./Tugas/Hooks";

function App() {
  return (
    <div className="App">
      <h1>Belajar Reach Routing</h1>

      <nav>
        <Link to="home" style={{marginRight: '10px'}}>Home</Link>
        <Link to="about" style={{marginRight: '10px'}}>About</Link>
        <Link to="category/makanan" style={{marginRight: '10px'}}>Makanan</Link>
        <Link to="category/minuman" style={{marginRight: '10px'}}>Minuman</Link>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
