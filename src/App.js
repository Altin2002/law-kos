import './App.scss';
import './dark.scss';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { IntlProvider } from 'react-intl';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({duration:1350})
  }, [])

  return (
    <>
      <div>
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
