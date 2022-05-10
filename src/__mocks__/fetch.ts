
const mockResponse = {
  data: {
    Search: [
      {
        Title: "Spider",
        Year: "2018",
        imdbID: "tt5796170",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjQ5NzQ5OTE5Ml5BMl5BanBnXkFtZTgwMzk5NzY3MjE@._V1_SX300.jpg",
      },
      {
        Title: "Spider",
        Year: "2018",
        imdbID: "tt5796170",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjQ5NzQ5OTE5Ml5BMl5BanBnXkFtZTgwMzk5NzY3MjE@._V1_SX300.jpg",
      },
    ],

    totalResults: "2",
    Response: "True",
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
