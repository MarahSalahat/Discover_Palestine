import React, { useState, useEffect } from 'react';
import './Literature.css';
import { useTranslation } from 'react-i18next';
import literatureData from '../data/literatureData';

function Literature() {
  const { t } = useTranslation();
  const [selectedWriter, setSelectedWriter] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % literatureData.quotes.length);
    }, 8000);
    return () => clearInterval(quoteInterval);
  }, []);

  const handleWriterClick = (writer) => {
    setSelectedWriter(writer);
  };

  return (
    <div className="literature-page-container">
      <section className="quotes-section">
        <div className="quote-display">
          <blockquote className="quote-text">
            {t(`literatureData.quotes.${quoteIndex}.text`)}
          </blockquote>
          <p className="quote-author">
            {t(`literatureData.quotes.${quoteIndex}.author`)}
          </p>
        </div>
      </section>

      <section className="writers-section">
        <h2>{t('literatureData.popularWritersTitle')}</h2>
        <div className="writers-horizontal-scroll">
          {literatureData.writers.map((writer) => (
            <div
              key={writer.id}
              className="writer-card"
              onClick={() => handleWriterClick(writer)}
            >
              <img src={writer.imageUrl} alt={t(writer.nameKey)} className="writer-image" />
              <h3>{t(writer.nameKey)}</h3>
            </div>
          ))}
        </div>
      </section>

      {selectedWriter && (
        <section className="writer-details">
          <button className="close-btn" onClick={() => setSelectedWriter(null)}>
            x
          </button>
          <div className="writer-details-content">
            <h2>{t(selectedWriter.nameKey)}</h2>
            <img src={selectedWriter.imageUrl} alt={t(selectedWriter.nameKey)} className="writer-details-image" />
            <p>{t(selectedWriter.fullBioKey)}</p>

            <h3>{t('literatureData.books')}</h3>
            <div className="books-shelf">
              {selectedWriter.books.map((book, index) => (
                <div key={index} className="book-detail">
                  <h4>{t(book.titleKey)}</h4>
                  <p>{t(book.detailedDescriptionKey)}</p>
                  <div className="book-quotes">
                    {book.quotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="book-quote">
                        {t(quote)}
                      </blockquote>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Literature;
