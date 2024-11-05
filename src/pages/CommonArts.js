import React from 'react';
import './CommonArts.css';
import { useTranslation } from 'react-i18next';
import artsData from '../data/artsData';

function CommonArts() {
  const { t } = useTranslation();

  return (
    <div className="common-arts-container">
      <h1 className="common-arts-header">{t('arts')}</h1>
      <div className="common-arts-grid">
        {artsData.map((art) => (
          <div key={art.id} className="common-arts-card">
            <video controls className="common-arts-video">
              <source src={art.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="common-arts-card-title">{t(art.titleKey)}</div>
            <div className="common-arts-card-description">{t(art.descriptionKey)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommonArts;
