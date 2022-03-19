import { object, string } from "yup";

export const loginScheme = object().shape({
  email: string().email().required(),
  password: string().required(),
});
