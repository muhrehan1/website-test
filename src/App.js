import React from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Home  from './Home';


class App extends React.Component {

  render() {
    return (
  <div>
        <Header />

        <Home />

    <Footer />
  </div>
    )
  };
}

export default App;