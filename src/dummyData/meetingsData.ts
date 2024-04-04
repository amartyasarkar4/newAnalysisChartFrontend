const StyleCategories = [
  { title: "Automation", color: "#9333ea" },
  { title: "E-commerce", color: "#f59e0b" },
  { title: "B2B", color: "#d97706" },
  { title: "SAAS", color: "#4ade80" },
  { title: "Mobile", color: "#65a30d" },
  { title: "Marketplace", color: "#2dd4bf" },
  { title: "B2C", color: "#93c5fd" },
  { title: "Technology", color: "#06b6d4" },
  { title: "Finance", color: "#fb7185" },
  { title: "Transportation", color: "#a21caf" },
  { title: "Publishing", color: "#be185d" },
  { title: "Web Service", color: "#0d9488" },
];

const NextMeetings = [
  { title: "in 30 minutes", color: "#22c55e" },
  { title: "Tomorrow", color: "#0284c7" },
  { title: "in 6 hours", color: "#059669" },
  { title: "No contact", color: "#be123c" },
  { title: "in 1 hour", color: "#65a30d" },
  { title: "Next month", color: "#52525b" },
];

const Tags = {
  d: "DigitalTransformation",
  o: "OnlineShoping",
  t: "TechInformation",
  b: "BuySellOnline",
  bu: "BusinessPartnership",
  s: "SmartFinance",
  l: "LogisticTech",
  c: "CloudHosting",
  u: "UX",
  ui: "UI",
  b2c: "B2CMarketing",
  a: "AIintegration",
};
export const meetingsData = [
  {
    brand: {
      name: "Wix",
      logo: "/brands/wix.svg",
    },
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    members: [
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[0], StyleCategories[1]],
    tags: [Tags.d, Tags.c],
    nextmeeting: NextMeetings[0],
  },

  {
    brand: {
      name: "Shopify",
      logo: "/brands/shopify.svg",
    },
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    members: [
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[3], StyleCategories[1]],
    tags: [Tags.o, Tags.d],
    nextmeeting: NextMeetings[1],
  },
  {
    brand: {
      name: "Disney",
      logo: "/brands/disney.jpeg",
    },
    description:
      "Richard McClintock, a Latin professor at Hampden-Sydney College in ",
    members: [
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[2], StyleCategories[3]],
    tags: [Tags.t, Tags.c],
    nextmeeting: NextMeetings[1],
  },
  {
    brand: {
      name: "Evernote",
      logo: "/brands/evernote.svg",
    },
    description:
      "Virginia, looked up one of the more obscure Latin words, consectetur, from a",
    members: [
      {
        name: "second s",
        photo: "/people-2.jpg",
      },

      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[4], StyleCategories[5]],
    tags: [Tags.bu, Tags.o],
    nextmeeting: NextMeetings[2],
  },
  {
    brand: {
      name: "Facebook",
      logo: "/brands/facebook.svg",
    },
    description:
      "There are many variations of passages of Lorem Ipsum available",
    members: [
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },

      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[6], StyleCategories[1]],
    tags: [Tags.s, Tags.ui],
    nextmeeting: NextMeetings[3],
  },
  {
    brand: {
      name: "Figma",
      logo: "/brands/figma.svg",
    },
    description: "The standard chunk of Lorem Ipsum used since the 1500s",
    members: [
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
    ],
    categories: [StyleCategories[7], StyleCategories[3]],
    tags: [Tags.u, Tags.s],
    nextmeeting: NextMeetings[4],
  },

  {
    brand: {
      name: "Google",
      logo: "/brands/google.svg",
    },
    description:
      "It was popularised in the 1960s with the release of Letraset sheets",
    members: [
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[8], StyleCategories[9]],
    tags: [Tags.l, Tags.b2c],
    nextmeeting: NextMeetings[2],
  },
  {
    brand: {
      name: "Linkedin",
      logo: "/brands/linkedin.svg",
    },
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because",
    members: [
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
    ],
    categories: [StyleCategories[10]],
    tags: [Tags.d, Tags.l],
    nextmeeting: NextMeetings[4],
  },
  {
    brand: {
      name: "MailChimp",
      logo: "/brands/mailchimp.svg",
    },
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    members: [
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
    ],
    categories: [StyleCategories[11], StyleCategories[7]],
    tags: [Tags.o, Tags.a],
    nextmeeting: NextMeetings[5],
  },

  {
    brand: {
      name: "Microsoft",
      logo: "/brands/microsoft.svg",
    },
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae ",
    members: [
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
    ],
    categories: [StyleCategories[10], StyleCategories[1]],
    tags: [Tags.a],
    nextmeeting: NextMeetings[1],
  },
  {
    brand: {
      name: "Paypal",
      logo: "/brands/paypal.svg",
    },
    description:
      "But in certain circumstances and owing to the claims of duty or the obligations of business",
    members: [
      {
        name: "third d",
        photo: "/people-7.jpg",
      },

      {
        name: "",
        photo: "/people-8.jpg",
      },
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
    ],
    categories: [StyleCategories[0], StyleCategories[11]],
    tags: [Tags.l, Tags.d],
    nextmeeting: NextMeetings[3],
  },

  {
    brand: {
      name: "Skype",
      logo: "/brands/skype.svg",
    },
    description:
      "sNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placea",
    members: [
      {
        name: "second s",
        photo: "/people-2.jpg",
      },
      {
        name: "third d",
        photo: "/people-3.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-4.jpg",
      },
      {
        name: "",
        photo: "/people-5.jpg",
      },
      {
        name: "second s",
        photo: "/people-6.jpg",
      },
      {
        name: "third d",
        photo: "/people-7.jpg",
      },
      {
        name: "fourth df",
        photo: "/people-3.jpg",
      },
      {
        name: "",
        photo: "/people-8.jpg",
      },
    ],
    categories: [StyleCategories[6], StyleCategories[9]],
    tags: [Tags.c, Tags.t],
    nextmeeting: NextMeetings[4],
  },
];
