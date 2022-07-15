import './App.css';
import books from './book-database.json'
import BookMaker from './book-maker.js'


function App() {
  return (
    <div className="App">
              {books.map(book => (
               <BookMaker  book = {book}/>
        ))}
    </div>
  );
}

export default App;
