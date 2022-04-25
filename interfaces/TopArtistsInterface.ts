export interface TopArtistsProps {
    external_urls: ExternalUrls;
    followers: Followers;
    genres?: (string)[] | null;
    href: string;
    id: string;
    images?: (ImagesEntity)[] | null;
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }
  export interface ExternalUrls {
    spotify: string;
  }
  export interface Followers {
    href?: null;
    total: number;
  }
  export interface ImagesEntity {
    height: number;
    url: string;
    width: number;
  }
  