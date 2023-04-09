// import logo from './logo.svg';
import './App.css';
import Book , {bookFirst,bookSecond} from './Book.jsx';
// import bookFirst from './Books'

function App() {
  return (
    <section className='booklist'>

    <Book 
      aurthur= {bookFirst.aurthur}
      title = {bookFirst.title}
      img = {bookFirst.img}
    />
    <Book 
      aurthur= {bookSecond.aurthur}
      title = {bookSecond.title}
      img = {bookSecond.img}
    />
    
    </section>
  )
}
// import React from "react";


// const Book = (props) => {

//     return(
//       <article className='book'>
        
//         <img src={props.img} alt={props.title} />
//         <h3>{props.title}</h3>
//         <h3>{props.aurthur}</h3>
//         <h4>{props.number}</h4>
//       </article>
//     )
// };


export default App;
