export interface CategoryInterface {
    href: string;
    icons?: (IconsEntity)[] | null;
    id: string;
    name: string;
  }
  export interface IconsEntity {
    height: number;
    url: string;
    width: number;
  }
  