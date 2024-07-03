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

//MATERIALS
MATERIALS1: string;
MATERIALS2: string;
LINKS: Link[];

//EVENTS
EVENTS: string;
EVENTS_LIST: Event[];

//GOZ
GOZ_COMPANIES: GozCompany[];

//CHOOSENPRODUCTS
CHOOSEN_PRODUCT_TITLE: string;
CHOOSEN_PRODUCTS: ChoosenProduct[];

//ABOUT US
ABOUT_US: string;
WHO_ARE_WE: string;
CODE: string;
COUNCIL: string;
ASSOCIATES: string;
MISSION: string;


//FOOTER
RIGHTS: string;
QUICK_LINKS: string;
FOOTER_CONTACT_INFO: FooterContactInfo;

//REPUTE
REPUTE: string;
REPUTE_DESC: string;

//SLIDER
SLIDER_DESC: string;
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

  export interface Link {
    title: string;
    href: string;
  }
  
  export interface Event {
    title: string;
    src: string;
    href: string;
  }

  export interface GozCompany{
    name: string;
    description: string;
    href: string;
    img: string;
  }

  export interface ChoosenProduct{
    title: string;
    icon: string;
    description: string;
  }

  export interface FooterContactInfo{
    title: string;
    links: AddressFooter[];
  }


  export interface AddressFooter {
    label: string;
    value: string;
  }