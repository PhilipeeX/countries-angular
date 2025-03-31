export interface CountryDetailsInterface {
  flags: {
    png: string;
    alt: string;
  };

  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      }
    }
  };

  population: number;
  region: string;
  subregion?: string;
  capital: string;
  tld: [0];

  currencies: {
    [key: string]: {
      name: string;
    }
  };

  languages: {
    [key: string]: string
  };

  borders: string[];
}
