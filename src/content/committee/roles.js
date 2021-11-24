/* 
  A map containing the committee roles and their responsibilities, keyed by their title.
  You probably won't need to ever touch this unless you change role responsibilities in an EGM/AGM
  or if, god forbid, I've made a typo.
*/

export const roles = new Map([
  [
    "president",
    {
      title: "President",
      description: "Responsible for leading the society and chairing committee meetings.",
    },
  ],
  [
    "secretary",
    {
      title: "Secretary",
      description:
        "Minutes committee meetings, ensure society admin is in order, and that the committee are carrying out their roles.",
    },
  ],
  [
    "treasurer",
    {
      title: "Treasurer",
      description:
        "Manages the societies finances, including buying of new hardware and ensuring that society membership is paid.",
    },
  ],
  [
    "events",
    {
      title: "Events Officer",
      description:
        "Coordinates with the president to put on events and plan the timetable of society workshops and socials.",
    },
  ],
  [
    "publicity",
    {
      title: "Press & Publicity Officer",
      description:
        "Responsible for sending society emails, operating society social media and organising society merchandise.",
    },
  ],
  [
    "infrastructure",
    {
      title: "Infrastructure Officer",
      description:
        "Responsible for coordinating the society's equipment acquisitions with the treasurer and maintaining the website and other systems necessary for the smooth running of workshops.",
    },
  ],
  [
    "social",
    {
      title: "Social Secretary",
      description:
        "Responsible for organising and coordinating non-academic, social events for members of the society.",
    },
  ],
  [
    "outreach",
    {
      title: "Outreach Officer",
      description:
        "A non-CS student, responsible for expanding the reach of the society to other departments.",
    },
  ],
  [
    "postgraduate",
    {
      title: "Postgraduate Officer",
      description:
        "Communicates with the GSA to encourage postgraduate students to engage with the society and its events, particularly CTFs.",
    },
  ],
  [
    "owp",
    {
      title: "Officer without Portfolio",
      description:
        "Assists committee members with their roles and provides feedback on running the society and its events.",
    },
  ],
]);
