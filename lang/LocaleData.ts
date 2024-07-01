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

//PARTNERSHIP
TARGET_GROUP: string;
TARGET_GROUP_DESC: string;
PARTNERSHIP: string;
TARGET_GROUPS: TargetGroup[];
WHERE_WE_OPERATE: string;
WHERE_WE_OPERATE_DESC: string;
INTERNATIONAL_PARTNERSHIP: string;
INTERNATIONAL_PARTNERSHIP_DESC: string;

//RECOMMENDATIONS
RECOMMENDATIONS: Recommendation[];

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
  export interface TargetGroup {
    title: string;
    src: string;
  }

  export interface Recommendation {
    label: string;
    href: string;
  }