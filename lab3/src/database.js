let db = {
  articles: [
    {
      id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
      title: "My article",
      content: "Content of the article.",
      date: "04/10/2022",
      author: "Liz Gringer",
    },
    {
      id: "6ec0bd7f-11c0-43da-975e-49",
      title: "My object",
      content: "animals",
      date: "04/11/2020",
      author: "Ragavi",
    },
  ],
  comments: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      timestamp: 1664835049,
      content: "Content of the comment.",
      articleId: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
      author: "Bob McLaren",
    },
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-64",
      timestamp: 1664835849,
      content: "revue.",
      articleId: "6ec0bd7f-11c0-43da-975e-49",
      author: "Claude",
    },
  ],
};
module.exports = db;
