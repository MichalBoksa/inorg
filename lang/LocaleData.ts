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
COOPERATION: string;
WE_ARE_PART_OF: string;

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

//WHO ARE WE
WHO_ARE_WE_HISTORY : string;
WHO_ARE_WE_HISTORY_DESC: string;
DYNAMIC_SUR: string;
DYNAMIC_SUR_DESC: string;
EXPERTS: string;
EXPERTS_DESC: string;
REALIZED_PROJECTS: string;
REALIZED_PROJECTS_DESC: string;
SPEC_ABOUT_US: string[];
RELATIONS: string;
RELATIONS_DESC: string;


//CODE INFO
CODE_INFO: string;
CODE_RULES_DESC: string;
CODE_RULES: string[];
CODE_RULES_EMPLOYEES_DESC: string;
CODE_RULES_EMPLOYEES: string[];

//MANAGMENT
MANAGMENT: string;
BOSS: string;
VICE_BOSS: string;
PROMNY: string;
COUNCIL_HEAD: string;
COUNCIL_MAN: string;


//ASSOCIATES
OUR_ASSOCIATES:string;
CONST_ASSOCIATES:string;
CONST_ASSOCIATES_LIST:string[];
OUR_PARTNERS:string;
OUR_PARTNERS_LIST:string[];


//GOALS
OUR_MISSION:string;
INORG_MISSION:string; 
INORG_MISSION_LIST:string[];
WHY_US:string;
OUR_SOURCES:string;
POSITION:string;
POSITION_LIST:string[];
OUR_FEATURES:string;
OUR_FEATURES_LIST:string[];


//INDONESIA_BUSINESS
INDONESIA_BUSINESS:string;

//EU_PROJECTS
EU_PROJECTS:string;
EU_PROJECTS_DESC:string;
EU_PROJECTS_DESC2:string;
EU_PROJECTS_NET_AMT:string;
EU_PROJECTS_AMT:string;


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