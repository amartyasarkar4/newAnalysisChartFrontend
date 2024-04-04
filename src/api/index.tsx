import { folderData } from "@/dummyData/folders";

import { meetingsData } from "@/dummyData/meetingsData";
import { teamDetails } from "@/dummyData/teamData";

export const loadTeams = () => {
  return teamDetails;
};

export const loadFolders = () => {
  return folderData;

  // const res = await fetch("http://localhost:5000/load");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // const myData = await res.json();

  // return myData.data;
};

export const loadMeetingsData = () => {
  return meetingsData;
};
