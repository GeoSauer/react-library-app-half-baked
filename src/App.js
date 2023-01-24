import { Link, Route, Switch } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';

function App() {
  return (
    <main className="container">
      <Switch>
        {/* <Route exact path="/">
          <Link to={`/books`}>
            <h1>Library Catalog</h1>
          </Link>
        </Route> */}
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
