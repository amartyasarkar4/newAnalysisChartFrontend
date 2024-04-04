import { activeFolder, folderProps } from "@/types/loadtype";

export const folderData: folderProps[] = [
  {
    name: "Products",
    subExist: true,
    link: activeFolder.PRODUCTS,
    subItems: [
      {
        name: "Roadmap",
        link: activeFolder.ROADMAP,
      },
      {
        name: "FeedBack",
        link: activeFolder.FEEDBACK,
      },

      {
        name: "Performance",
        link: activeFolder.PERFORMANCE,
      },
      {
        name: "Team",
        link: activeFolder.TEAM,
      },
      {
        name: "Analytics",
        link: activeFolder.ANALYTICS,
      },
    ],
  },
  {
    name: "Sales",
    subExist: true,
    link: activeFolder.SALES,
    subItems: [
      {
        name: "Sales Roadmap",
        link: activeFolder.SALES_ROADMAP,
      },
      {
        name: "Sales FeedBack",
        link: activeFolder.SALES_FEEDBACK,
      },

      {
        name: "Sales Performance",
        link: activeFolder.SALES_PERFORMANCE,
      },
      {
        name: "Sales Team",
        link: activeFolder.SALES_TEAM,
      },
      {
        name: "Sales Analytics",
        link: activeFolder.SALES_ANALYTICS,
      },
    ],
  },
  {
    name: "Design",
    subExist: true,
    link: activeFolder.DESIGN,
    subItems: [
      {
        name: "Design Roadmap",
        link: activeFolder.DESIGN_ROADMAP,
      },
      {
        name: "Design FeedBack",
        link: activeFolder.DESIGN_FEEDBACK,
      },

      {
        name: "Design Performance",
        link: activeFolder.DESIGN_PERFORMANCE,
      },
      {
        name: "Design Team",
        link: activeFolder.DESIGN_TEAM,
      },
      {
        name: "Design Analytics",
        link: activeFolder.DESIGN_ANALYTICS,
      },
    ],
  },

  {
    name: "Office",
    subExist: false,
    subItems: [],
    link: activeFolder.OFFICE,
  },

  {
    name: "Legal",
    subExist: false,
    subItems: [],
    link: activeFolder.LEGAL,
  },
];
