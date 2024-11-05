// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';
import Home from './pages/Home'; 
import History from './pages/History';
import Culture from './pages/Culture';
import Literature from './pages/Literature';
import Arts from './pages/CommonArts';
import UserReflections from './pages/UserReflections';
import './App.css';
import CommonArts from './pages/CommonArts';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    i18n.changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Router>
      <header>
        {/* Language Toggle */}
        <nav>
          <button onClick={toggleLanguage}>
            <FaLanguage /> {language === 'en' ? 'العربية' : 'English'}
          </button>
        

        {/* Navigation Links */}
        
          <Link to="/">{t('home')}</Link>  {/* Home Link */}
          <Link to="/history">{t('history1')}</Link>
          <Link to="/culture">{t('culture1')}</Link>
          <Link to="/arts">{t('arts')}</Link>
          <Link to="/literature">{t('literature')}</Link>
          <Link to="/user-reflections">{t('userReflections')}</Link>
        </nav>
      </header>

      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/arts" element={<CommonArts />} />
          <Route path="/user-reflections" element={<UserReflections />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
