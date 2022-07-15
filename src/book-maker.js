import HideMe from './hideme';
import React, { useState } from 'react'

export default function BookMaker({book}) {
const [hidden] = useState('')
    return (
          <div className="Book" key= {book}>
          <div className="Book-title">{book.title}</div>
          <div className="Book-author">{book.author}</div>
          <div className="Book-description">{book.shortDescription}</div>
          <button type="button" className="showMore" aria-expanded="false" aria-controls="Full-Description">More Information</button>
          <div className={`react-root ${hidden}`}>
          <div className="Book-url">URL: {book.url}</div>
          <div className="Book-publisher">Publisher: {book.publisher}</div>
          <div className="Book-pubdate">Publication Date: {book.publicationDate}</div>
          <div className="Book-pubdate">Full Description: {book.detailedDescription}</div>
          </div>
          </div>
        )}
    