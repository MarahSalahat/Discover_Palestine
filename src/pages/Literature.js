import React, { useState, useEffect } from 'react';
import './Literature.css';
import { useTranslation } from 'react-i18next';
import literatureData from '../data/literatureData';

function Literature() {
  const { t } = useTranslation();
  const [selectedWriter, setSelectedWriter] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % literatureData.quotes.length);
    }, 8000);
    return () => clearInterval(quoteInterval);
  }, []);

  const handleWriterClick = (writer) => {
    setSelectedWriter(writer);
    setSelectedBook(null);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
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
                <div key={index} className="book-detail" onClick={() => handleBookClick(book)}>
                  <h4>{t(book.titleKey)}</h4>
                  <p>{t(book.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedBook && (
        <section className="book-details">
          <button className="close-btn" onClick={() => setSelectedBook(null)}>
           x
          </button>
          <div className="book-details-content">
            <h2>{t(selectedBook.titleKey)}</h2>
            <p>{t(selectedBook.detailedDescriptionKey)}</p>
            <h3>{t('literatureData.quotesFromBook')}</h3>
            {selectedBook.quotes.map((quote, index) => (
              <blockquote key={index} className="quote-detail">{t(quote)}</blockquote>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Literature;
