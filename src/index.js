import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Feedback Form</h1>
        <p>Name:</p>
        <input
          type="text"
        />
        <p>Email:</p>
        <input
          type="email"
        />
        <p>Feedback:</p>
        <input
          type="textarea"
        />
        <p></p>
        <input
        type='submit'
        />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
