import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Form from './Form/Form';

class App extends Component {
  state = {
    formActivated: true,
  };

  render() {
    const { formActivated } = this.state;
    return (
      <>
        <Header />
        {formActivated ? <Form /> : <LandingPage />}
        <Footer />
      </>
    );
  }
}
export default App;