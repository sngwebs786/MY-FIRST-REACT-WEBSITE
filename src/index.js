import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Section1 from './components/Section1'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Section1/>
    <Footer/>
    <Copyright/>

    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
