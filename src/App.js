import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const PAGE_NUMBER = 1;

export default function App() {
  const [state, setState] = useState([]);
  const [page, setPage] = React.useState(PAGE_NUMBER);

  // let url = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';

  useEffect(async () => {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/comments/${page}`
    );
    console.log(response.data);
    setState([...state, response.data]);
  }, []);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = () => {
    // if the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  console.log(typeof state);
  return (
    <>
      <div className="App">
        {state.length > 0 &&
          state.map((elem, index) => (
            <div key={index} className="container">
              <h4>Id: {elem.id}</h4>
              <h4>post id: {elem.postId}</h4>
              <h4>Name: {elem.name}</h4>
              <h4>Content: {elem.body}</h4>
              <h4>Email: {elem.email}</h4>
            </div>
          ))}
      </div>
    </>
  );
}
