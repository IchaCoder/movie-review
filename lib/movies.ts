export type CastMember = {
  name: string;
  role: string;
  initials: string;
};

export type MovieReview = {
  author: string;
  rating: number;
  comment: string;
};

export type Movie = {
  id: string;
  title: string;
  year: string;
  duration: string;
  genre: string;
  rating: string;
  score: string;
  maturity: string;
  tagline: string;
  synopsis: string;
  backdrop: string;
  poster: string;
  status: string;
  releaseDate: string;
  director: string;
  budget: string;
  boxOffice: string;
  genres: string[];
  cast: CastMember[];
  reviews: MovieReview[];
  relatedIds: string[];
};

export const movies: Movie[] = [
  {
    id: "inception",
    title: "Inception",
    year: "2010",
    duration: "2h 28m",
    genre: "Sci-Fi / Action",
    rating: "8.8",
    score: "87%",
    maturity: "13+",
    tagline: "A heist that takes place inside a dream becomes a fight for reality itself.",
    synopsis:
      "Dom Cobb is a thief with a very specific skill: he can extract secrets from the depths of a sleeping mind. A final assignment asks him to do the opposite and plant an idea so persuasive that the target believes it was his own. The closer the team gets to success, the more the rules of the dream collapse around them.",
    backdrop:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Eo89XC1waqUUpsNdDpsmumvRKzpslR3KVtk1PBXle9Ur7TwzlK7-KBTpJa7ygSopU5rsGVtIvRx_kwOzwaWPrJtwD32PiIfUR3D3UJWgK8qElys-ip2rTPrz2CemTVPrMseRaYEASGe6-KkS6DSJj23NiZQvMe0UKQrczFjuh0R8KnIKw90JX04oY63SbKLB_DY9C7RS2rjS6XnRQTjyXuFuvztHGHxFFAKkGF0FHPV4huAzzShDHrw-gCrr5lAdutUA6TdCNTk",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3MGlADDcP7mNJTxMnyMw0jXIH1MBH0yBXzVbUX0uQJ8zh1mWs_GLxfo39hT4dEJe9u14Wld4fSzfPV88VQqMJTTnN17u1Zsy3QabD0d8orsW_ArdvU5aOncAl3J5XLL1Rbi-AbCapsMgSqmjsTG3XzB6TJ1o_dNqn54vISmhwoOuwBgTWFmNs4rM8ySvSaSCHarlYfuHvLymN8gr1uk-0CTQDcRB8aoAo0Q3kj3Xaz8WtKgHwrju4C12QyQIK-u09VPGFBrYV_Ow",
    status: "Released",
    releaseDate: "July 16, 2010",
    director: "Christopher Nolan",
    budget: "$160,000,000",
    boxOffice: "$836,848,441",
    genres: ["Action", "Sci-Fi", "Adventure"],
    cast: [
      { name: "Leonardo DiCaprio", role: "Dom Cobb", initials: "LD" },
      { name: "Joseph Gordon-Levitt", role: "Arthur", initials: "JG" },
      { name: "Elliot Page", role: "Ariadne", initials: "EP" },
      { name: "Tom Hardy", role: "Eames", initials: "TH" },
    ],
    reviews: [
      {
        author: "John_Doe_92",
        rating: 5,
        comment: "A rare blockbuster that keeps rewarding attention. Every revisit exposes another layer.",
      },
      {
        author: "SarahCinemaphile",
        rating: 4,
        comment: "The hallway fight and the score still hit hard. It feels engineered to be rewatched.",
      },
    ],
    relatedIds: ["interstellar", "tenet", "noir-collection"],
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: "2014",
    duration: "2h 49m",
    genre: "Drama / Sci-Fi",
    rating: "8.6",
    score: "73%",
    maturity: "13+",
    tagline: "A desperate mission crosses distance, time, and the limits of human survival.",
    synopsis:
      "When Earth starts failing, a former pilot joins a last-resort expedition through a wormhole in search of a world that can sustain humanity. What begins as a rescue mission becomes a test of sacrifice, memory, and the bond between parent and child.",
    backdrop:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3MGlADDcP7mNJTxMnyMw0jXIH1MBH0yBXzVbUX0uQJ8zh1mWs_GLxfo39hT4dEJe9u14Wld4fSzfPV88VQqMJTTnN17u1Zsy3QabD0d8orsW_ArdvU5aOncAl3J5XLL1Rbi-AbCapsMgSqmjsTG3XzB6TJ1o_dNqn54vISmhwoOuwBgTWFmNs4rM8ySvSaSCHarlYfuHvLymN8gr1uk-0CTQDcRB8aoAo0Q3kj3Xaz8WtKgHwrju4C12QyQIK-u09VPGFBrYV_Ow",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1W2J2_kGMYtFgQ4oWQ8I2L1Qwzv4W7lH8uX6n0VY8x4xjDk2u8vLwG1Zx2Y5xLQKJcM6J6M4ZV3fS7fJZfXW0qL2sV8vL8o8q0y3dO5nS4nB4Wn8K1XU2H5G2qW1J1F0h8p8O5Z8h4lHq0iQm9s2QmV4vH8bQ2yJm4iV3O3lA0mFQ",
    status: "Released",
    releaseDate: "November 7, 2014",
    director: "Christopher Nolan",
    budget: "$165,000,000",
    boxOffice: "$773,837,686",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    cast: [
      { name: "Matthew McConaughey", role: "Cooper", initials: "MM" },
      { name: "Anne Hathaway", role: "Brand", initials: "AH" },
      { name: "Jessica Chastain", role: "Murph", initials: "JC" },
      { name: "Michael Caine", role: "Professor Brand", initials: "MC" },
    ],
    reviews: [
      {
        author: "OrbitFan",
        rating: 5,
        comment: "It is huge in scope but still hits hardest as a family story. The ending is unforgettable.",
      },
      {
        author: "FrameByFrame",
        rating: 4,
        comment: "The visuals are striking and the emotional core keeps it grounded all the way through.",
      },
    ],
    relatedIds: ["inception", "tenet", "noir-collection"],
  },
  {
    id: "tenet",
    title: "Tenet",
    year: "2020",
    duration: "2h 30m",
    genre: "Action / Thriller",
    rating: "7.3",
    score: "70%",
    maturity: "13+",
    tagline: "A mission unfolds in two directions at once.",
    synopsis:
      "A covert operative is recruited into a global operation where objects and people can move backward through time. To prevent a catastrophic future, he must understand a conflict that only makes sense when viewed from both directions at once.",
    backdrop:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClmfyG0Y0veYj-8lINZ1O4FCb46fq2xaU4fFUFlUlCE_6h9tKXET9ixw433k2zaOeTeLsCYv9stV9lnYJWjX41MUeyem8OdUri4GhFuR-H38USHr1ix1SOffdJlCNd3wZoX3oU8ys4-LZwrb6lMwd1IF6QwVmrlSLlMWalS30qdv5x6kEXCteIMOPl8J3YXMbvMB_NaOZWZVdys2NDXfIIIEfxQppZ4NOEHg59jbCjakcVQR5LjbN_C1-3trtw42cttmAB2kdtO-4",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC15JLbAlEA3-xpaJroNAtcog_SNATBpdRAuJERCo78fRGk6OyhhsKUnm3iNxwghZVehRXV5BZuZVtyy9an6C8_UtfKBxg6hUTm1Im4ndF3-Zl49NxuJ-PalngmfUA-jvjV5jAVoTM8SNmDoreKDlE_J_FLSUKPfFVO4_F8DUlqWWLmYmMomAToXa2GG_9HdW7RpMKPKFFtRJr1dvtnPUgwPhmL1LnRZ7Im9kTDk7HdS1Erdkuwrt6qjOla66eDMRE3V-sLkHq09dQ",
    status: "Released",
    releaseDate: "September 3, 2020",
    director: "Christopher Nolan",
    budget: "$200,000,000",
    boxOffice: "$365,304,105",
    genres: ["Action", "Sci-Fi", "Thriller"],
    cast: [
      { name: "John David Washington", role: "The Protagonist", initials: "JW" },
      { name: "Robert Pattinson", role: "Neil", initials: "RP" },
      { name: "Elizabeth Debicki", role: "Kat", initials: "ED" },
      { name: "Kenneth Branagh", role: "Sator", initials: "KB" },
    ],
    reviews: [
      {
        author: "TemporalLens",
        rating: 4,
        comment: "Confusing in the best possible way if you want a movie that demands full attention.",
      },
      {
        author: "CinemaLoop",
        rating: 4,
        comment: "The action is clean and the time mechanics make repeat viewing almost mandatory.",
      },
    ],
    relatedIds: ["inception", "interstellar", "noir-collection"],
  },
  {
    id: "noir-collection",
    title: "Noir Collection",
    year: "2025",
    duration: "Curated",
    genre: "Mystery / Crime",
    rating: "9.0",
    score: "92%",
    maturity: "16+",
    tagline: "A bundle of shadow-heavy stories built for late-night viewing.",
    synopsis:
      "This themed collection gathers sleek thrillers, conspiracies, and moody investigations into one place. It is designed as a jump-off point for viewers who want something tense, stylish, and a little unpredictable.",
    backdrop:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1W2J2_kGMYtFgQ4oWQ8I2L1Qwzv4W7lH8uX6n0VY8x4xjDk2u8vLwG1Zx2Y5xLQKJcM6J6M4ZV3fS7fJZfXW0qL2sV8vL8o8q0y3dO5nS4nB4Wn8K1XU2H5G2qW1J1F0h8p8O5Z8h4lHq0iQm9s2QmV4vH8bQ2yJm4iV3O3lA0mFQ",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1W2J2_kGMYtFgQ4oWQ8I2L1Qwzv4W7lH8uX6n0VY8x4xjDk2u8vLwG1Zx2Y5xLQKJcM6J6M4ZV3fS7fJZfXW0qL2sV8vL8o8q0y3dO5nS4nB4Wn8K1XU2H5G2qW1J1F0h8p8O5Z8h4lHq0iQm9s2QmV4vH8bQ2yJm4iV3O3lA0mFQ",
    status: "Collection",
    releaseDate: "Curated selection",
    director: "CineStream Editors",
    budget: "N/A",
    boxOffice: "N/A",
    genres: ["Mystery", "Crime", "Thriller"],
    cast: [
      { name: "The Usual Suspects", role: "Curated pick", initials: "US" },
      { name: "Se7en", role: "Curated pick", initials: "S7" },
      { name: "Nightcrawler", role: "Curated pick", initials: "NC" },
      { name: "Prisoners", role: "Curated pick", initials: "PR" },
    ],
    reviews: [
      {
        author: "LateNightQueue",
        rating: 5,
        comment: "A strong shelf of recommendations when I want something dark and atmospheric.",
      },
      {
        author: "MoodSetter",
        rating: 4,
        comment: "The selection feels intentional instead of random, which makes it easy to start watching.",
      },
    ],
    relatedIds: ["inception", "interstellar", "tenet"],
  },
];

export function getMovieById(id: string) {
  return movies.find((movie) => movie.id === id);
}

export function getMovieCards() {
  return movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.rating,
    year: movie.year,
    art: movie.poster,
  }));
}
