import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import historyData from '../data/historyData';
import './History.css';

function History() {
  const { t } = useTranslation();
  const [activePeriod, setActivePeriod] = useState(null);

  const handlePointClick = (id) => {
    const period = historyData.find((item) => item.id === id);
    setActivePeriod(period);
  };

  const closeModal = () => {
    setActivePeriod(null);
  };

  return (
    <div className="history-map-container">
      <h1>{t('history1')}</h1>
      <div className="timeline">
        {historyData.map((period) => (
          <div key={period.id} className="timeline-item">
            <div
              className="timeline-point"
              role="button"
              tabIndex={0}
              onClick={() => handlePointClick(period.id)}
              onKeyDown={(e) => e.key === 'Enter' && handlePointClick(period.id)}
            >
              <span className="timeline-title">{t(period.titleKey)}</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={!!activePeriod}
        onClose={closeModal}
        title={activePeriod ? t(activePeriod.titleKey) : ''}
      >
        {activePeriod && (
          <>
            <p>{t(activePeriod.detailsKey)}</p>
            {t(activePeriod.linkKey) && (
              <a
                href={t(activePeriod.linkKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                {t('learnMore')} 
              </a>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}

export default History;
