import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Welcome Quote */}
      <h2 className="quote">{t('quote')}</h2>
      
      {/* Map Image */}
      <div className="map-container">
        <img src="/images/palestine.jpg" alt="Map of Palestine" className="palestine-map" />
      </div>
    </div>
  );
}

export default Home;
