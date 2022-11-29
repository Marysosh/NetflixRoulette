import ACTIONS from "./actionTypes";

const addMovie = (title = "Moana", releaseDate = "25.12.2020") => ({
  type: ACTIONS.ADD_MOVIE,
  payload: {
    title,
    releaseDate,
  },
});

const removeMovie = (id) => ({
  type: ACTIONS.REMOVE_MOVIE,
  payload: id,
});

export { addMovie, removeMovie };
