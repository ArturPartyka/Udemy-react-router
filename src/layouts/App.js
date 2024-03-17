import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';



class App extends Component {

  render() {


    return (


      <div className='app'>
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className='page'>
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>

    );
  }
}

export default App;
