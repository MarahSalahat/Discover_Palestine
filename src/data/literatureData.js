const literatureData = {
    quotes: [
        { textKey: "quotes.0", authorKey: "quotes.1" },
        { textKey: "quotes.1", authorKey: "quotes.2" },
        { textKey: "quotes.2", authorKey: "quotes.3" },
      ],
    writers: [
      {
        id: 1,
        nameKey: "literatureData.writers.darwish.name",
        shortBioKey: "literatureData.writers.darwish.shortBio",
        fullBioKey: "literatureData.writers.darwish.fullBio",
        imageUrl: "images/darwish.jpeg",
        books: [
          {
            titleKey: "literatureData.writers.darwish.book1.title",
            descriptionKey: "literatureData.writers.darwish.book1.description",
            detailedDescriptionKey: "literatureData.writers.darwish.book1.detailedDescription",
            quotes: [
              "literatureData.writers.darwish.book1.quote1",
              "literatureData.writers.darwish.book1.quote2"
            ]
          }
        ]
      },
      {
        id: 2,
        nameKey: "literatureData.writers.kanafani.name",
        shortBioKey: "literatureData.writers.kanafani.shortBio",
        fullBioKey: "literatureData.writers.kanafani.fullBio",
        imageUrl: "images/kanafani.jpg",
        books: [
          {
            titleKey: "literatureData.writers.kanafani.book1.title",
            descriptionKey: "literatureData.writers.kanafani.book1.description",
            detailedDescriptionKey: "literatureData.writers.kanafani.book1.detailedDescription",
            quotes: [
              "literatureData.writers.kanafani.book1.quote1",
              "literatureData.writers.kanafani.book1.quote2"
            ]
          }
        ]
      }
    ]
  };
  
  export default literatureData;
  