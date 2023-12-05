import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/*
<section id="header-section">
  <div className="container">
    <form className="search-form" id="search-form">
      <label className="visually-hidden" htmlFor="search"></label>
      <input className="input-search"
             id="search"
             type="text"
             name="searchQuery"
             autoComplete="off"
             placeholder="Search images..."
      />
      <button className="btn-search" type="submit">
        <svg width="20" height="20">
          <use href="./images/icons.svg#icon-search" />
        </svg>
      </button>
    </form>
  </div>
</section>

<section id="gallery-section">
  <div className="container">
    <div className="gallery">
    </div>
    <button className="btn-up">
      <svg width="40" height="40">
        <use href="./images/icons.svg#icon-arrow-up"/>
      </svg>
    </button>
  </div>
</section>*/
