
import './App.css'

import MainComponent from './components/MainComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import defaultLayout from './pages/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route index Component={MainComponent} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App