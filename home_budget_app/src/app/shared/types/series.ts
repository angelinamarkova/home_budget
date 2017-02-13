export class Series {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Released: string;
    Response: boolean;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: number;
    imdbVotes: string;
    totalSeasons: number;

    constructor(seriesData ) {
      this.Actors = seriesData.Actors;
      this.Awards = seriesData.Awards;
      this.Country = seriesData.Country;
      this.Director = seriesData.Director;
      this.Genre = seriesData.Genre;
      this.Language = seriesData.Language;
      this.Metascore = seriesData.Metascore;
      this.Plot = seriesData.Plot;
      this.Poster = seriesData.Poster;
      this.Rated = seriesData.Rated;
      this.Released = seriesData.Released;
      this.Response = seriesData.Released;
      this.Runtime = seriesData.Runtime;
      this.Title = seriesData.Title;
      this.Type = seriesData.Type;
      this.Writer = seriesData.Writer;
      this.Year = seriesData.Year;
      this.imdbID = seriesData.imdbID;
      this.imdbRating = seriesData.imdbRating;
      this.imdbVotes = seriesData.imdbVotes;
      this.totalSeasons = seriesData.totalSeasons;
    }
}
