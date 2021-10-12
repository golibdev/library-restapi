import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDetails from "./pages/bookDetails/BookDetails";
import AdminPanel from './pages/admin/AdminPanel'

function App() {
  return (
    <div className="App">
      <Route path="/" exact><Home/></Route>
      <Route path="/bookDetails/:id"><BookDetails/></Route>
      <Route path="/admin"><AdminPanel/></Route>
    </div>
  );
}

export default App;
