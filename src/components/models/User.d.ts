export type User = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

export type GoogleUser = {
  id: string;
  name: string;
  email: string;
  photo?: string;
  familyName?: string;
  givenName?: string;
};
