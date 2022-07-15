import './App.css';
import books from './book-database.json'
import showMore from './hideme';
import BookMaker from './book-maker.js'
import React, { useState } from 'react'

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
