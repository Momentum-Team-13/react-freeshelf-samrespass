import React, { useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'


export default function BookMaker({book}) {
const [isExpanded, setIsExpanded]  = useState(false) 
    return (
          <div className="Book" key= {book}>
        <div className="Book-image"><img src={book.coverImageUrl } alt={book.title} className="images"></img></div>
        <div className="Book-details">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.shortDescription}</p>
        <div className="Full-description" onClick={() => setIsExpanded(!isExpanded)}>
        { isExpanded ? (<> 
        <TriangleDownIcon size={24} aria-label="Show more" /><span>SHOW LESS</span>
        <div className="Book-url"><strong>URL:</strong> {book.url}</div>
        <div className="Book-publisher"><strong>Publisher:</strong> {book.publisher}</div>
        <div className="Book-pubdate"><strong>Publication Date:</strong> {book.publicationDate}</div>
        <div className="Book-pubdate"><strong>Full Description:</strong> {book.detailedDescription}</div></>):<div className="Full-description-control" aria-expanded={isExpanded}>
        <TriangleRightIcon size={24} aria-label="Show more" /><span>SHOW MORE</span>
        </div>}
          </div> 
        </div>

          </div> 
        )}
    
        // add in onclick to button