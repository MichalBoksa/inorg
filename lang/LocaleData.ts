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

//TRAINING AREA
TRAINING_AREA: string;
TRAINING_AREA_DESC: string;
TRAINING_AREA_PRODUCTS: TrainingProduct[];

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

  export interface TrainingProduct {
    title: string;
    desc: string;
    img: string;
  }