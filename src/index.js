import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import AddNote from './pages/AddNote'
import { Provider } from 'react-redux';
import { store } from './state';
import Header from './components/Header';
import NoteDetails from './pages/NoteDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path = '/' element={<App />} />
        <Route path = 'about' element={<About />} />
        <Route path = 'add-note' element={<AddNote />} />
        <Route path = 'notes' element={<NoteDetails />} >
          <Route path=':id' element={<NoteDetails />}  />
        </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
