export type SiteInfo = {
  name: string;
  address: string;
  schedule: string;
  yandex_maps_iframe: string;
  logo: string;
};

export enum ContactName {
  PHONE = "phone",
  EMAIL = "email",
}
export type Contact = {
  id: number;
  name: ContactName;
  value: string;
};
export type Link = {
  id: number;
  name: string;
  url: string;
};
