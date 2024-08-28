import './App.scss';
import './dark.scss';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { IntlProvider } from 'react-intl';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { translate } from './translation/translate';

function App() {

  useEffect(() => {
    Aos.init({duration:1350})
  }, [])

  const language = useSelector((state) => state.language.language);

  return (
    <>
      <div>
        <IntlProvider
          locale = {language}
          formats = {{ number: 'en'}}
          messages = {translate[language]}
        >
          
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
