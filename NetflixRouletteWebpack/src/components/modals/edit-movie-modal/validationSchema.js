/* eslint-disable no-useless-escape */
import * as Yup from "yup";

export const validationParameters = Yup.object({
  title: Yup.string().required("Title is required"),
  movieURL: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "Add valid URL"
    )
    .required("Movie URL is required")
    .typeError("Movie URL must be valid"),
  releaseDate: Yup.string()
    .matches(
      /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
      "Use this format: YYYY-MM-DD"
    )
    .required("Release date is required"),
  rating: Yup.number().typeError("Rating must be a number"),
  runtime: Yup.number().typeError("Runtime must be a number"),
  overview: Yup.string().required("Overview is required"),
});
