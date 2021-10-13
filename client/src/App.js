import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDetails from "./pages/bookDetails/BookDetails";
import AdminPanel from './pages/admin/AdminPanel'
import AllBook from "./pages/admin/AllBook/AllBook";
import AllUser from "./pages/admin/AllUser/AllUser";
import AddBook from "./pages/admin/AddBook/AddBook";
import AllOrder from "./pages/admin/AllOrders/AllOrder";

function App() {
  return (
    <div className="App">
      <Route path="/" exact><Home/></Route>
      <Route path="/bookDetails/"><BookDetails/></Route>
      <Route path="/admin" exact><AdminPanel/></Route>
      <Route path="/admin/books" exact><AllBook/></Route>
      <Route path="/admin/users" exact><AllUser/></Route>
      <Route path="/admin/add/book" exact><AddBook/></Route>
      <Route path="/admin/orders" exact><AllOrder/></Route>
    </div>
  );
}

export default App;
