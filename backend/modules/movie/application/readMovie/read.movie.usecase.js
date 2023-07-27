const MovieSchemaAdapter = require('../../infraestructure/movie.schema.adapter');

class ReadMovie {
  constructor() {}
  async getMoviesUseCase() {
    try {
      const moviesData = await MovieSchemaAdapter.getMovies();
      return moviesData;
    } catch (error){
      throw new Error(error)
    }
  }
  async getMoviesByNameUseCase(name) {
    try {
      const moviesData = await MovieSchemaAdapter.getMovieByName(name);
      return moviesData;
    } catch (error){
      throw new Error(error)
    }
  }
}

module.exports = ReadMovie;
