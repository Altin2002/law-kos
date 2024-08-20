import './App.scss';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { IntlProvider } from 'react-intl';

function App() {
  return (
    <>
      <div className='app-container'>
        <IntlProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </IntlProvider>
      </div>
    </>
  );

}

export default App;
