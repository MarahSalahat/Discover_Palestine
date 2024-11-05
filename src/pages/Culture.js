import React from 'react';
import { useTranslation } from 'react-i18next';
import cultureData from '../data/cultureData';
import './Culture.css';

function Culture() {
  const { t } = useTranslation();

  return (
    <div className="culture-section">
      <h1>{t('culture.title')}</h1>
      <div className="culture-items">
        {cultureData.map((culture) => (
          <div
            key={culture.id}
            className="culture-item"
            style={{ backgroundImage: `url(${culture.imageUrl})` }}
          >
            <div className="culture-content">
              <h2>{t(culture.titleKey)}</h2>
              <p>{t(culture.descriptionKey)}</p>
              {t(culture.linkKey) && (
                <a
                  href={t(culture.linkKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  {t('culture.learnMore')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Culture;
