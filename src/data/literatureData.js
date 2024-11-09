
const createWriterData = (nameKey) => {
  return {
    id: Math.floor(Math.random() * 1000), 
    nameKey: `literatureData.writers.${nameKey}.name`,
    shortBioKey: `literatureData.writers.${nameKey}.shortBio`,
    fullBioKey: `literatureData.writers.${nameKey}.fullBio`,
    imageUrl: `images/${nameKey}.jpeg`,
    books: [
      {
        titleKey: `literatureData.writers.${nameKey}.book1.title`,
        detailedDescriptionKey: `literatureData.writers.${nameKey}.book1.description`,
        quotes: [
          `literatureData.writers.${nameKey}.book1.quote1`,
          `literatureData.writers.${nameKey}.book1.quote2`
        ]
      },
      {
        titleKey: `literatureData.writers.${nameKey}.book2.title`,
        detailedDescriptionKey: `literatureData.writers.${nameKey}.book2.description`,
        quotes: [
          `literatureData.writers.${nameKey}.book2.quote1`,
          `literatureData.writers.${nameKey}.book2.quote2`
        ]
      },
      {
        titleKey: `literatureData.writers.${nameKey}.book3.title`,
        detailedDescriptionKey: `literatureData.writers.${nameKey}.book3.description`,
        quotes: [
          `literatureData.writers.${nameKey}.book3.quote1`,
          `literatureData.writers.${nameKey}.book3.quote2`
        ]
      }
    ]
  };
};


const writerNames = ["mureed","ibrahim","kanafani","hassan","jubra", "darwish","ibrahim_touqan","fadwa","tamim","suzan","samih","edward","sahar","abdul_rahim"];


const literatureData = {
  quotes: [
    { textKey: "quotes.0", authorKey: "quotes.1" },
    { textKey: "quotes.1", authorKey: "quotes.2" },
    { textKey: "quotes.2", authorKey: "quotes.3" },
  ],
  writers: writerNames.map(nameKey => createWriterData(nameKey))
};

export default literatureData;
