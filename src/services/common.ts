import { api, authenticated } from '.';

export const getPalikaProfile = (params: any) =>
  authenticated(api).get('/palika-profile/', {
    params,
  });

export const nothing = '';
