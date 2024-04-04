// *************************************
export interface teamProps {
  name: string;
  icon: string;
  about: string;
  link: string;
}

export interface folderProps {
  name: string;
  subExist: boolean;
  subItems: {
    name: string;
    link: activeFolder;
  }[];
  link: activeFolder;
}

export enum extendFolders {
  PRODUCTS = "products",
  SALES = "sales",
  DESIGN = "design",
}

export enum activeFolder {
  PRODUCTS = "products",
  SALES = "sales",
  DESIGN = "design",

  ROADMAP = "roadmap",

  FEEDBACK = "feedBack",

  PERFORMANCE = "performance",

  TEAM = "team",

  ANALYTICS = "analytics",

  SALES_ROADMAP = "salesroadmap",

  SALES_FEEDBACK = "salesfeedBack",

  SALES_PERFORMANCE = "salesperformance",

  SALES_TEAM = "salesteam",

  SALES_ANALYTICS = "salesanalytics",

  DESIGN_ROADMAP = "designroadmap",

  DESIGN_FEEDBACK = "designfeedBack",

  DESIGN_PERFORMANCE = "designperformance",

  DESIGN_TEAM = "designteam",

  DESIGN_ANALYTICS = "/designanalytics",

  OFFICE = "office",

  LEGAL = "legal",
}
