export interface LocaleData {
    //NAVIGATION
    NAV_LINKS: NavLink[];
    PRODUCTS: Product[];

    //COMPETENCE
COMPETENCE_DESC: string;
COMPETENCE: string;
QUESTION: string;
ANSWEAR: string;

//ADVISORY AREA
ADVISORY_AREA: string;
ADVISORY_AREA_DESC:string;
}


export interface NavLink {
    href: string;
    key: string;
    label: string;
  }

  export interface Product {
    href: string;
    name: string;
  }
