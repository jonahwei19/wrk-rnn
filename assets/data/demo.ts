import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "George Hubbard",
    isOnline: true,
    match: "78",
    description:
      "Managing Partner at Cerity Patners.",
    message:
      "Very interested in your company. Would like to set up a time to chat soon.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Tony Arnerich",
    match: "93",
    description:
      "CEO & CIO at Arnerich Massena & Associates.",
    isOnline: false,
    message: "Sorry, but I am not looking to invest right now. Let's keep in touch.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Sara Williams",
    match: "45",
    description:
      "Managing Director of Private Investments at Windmark Investment Patners.",
    isOnline: false,
    message:
      "We're reviewing the materials you sent to us. Will reply shortly!",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Seth Yablonovitz",
    match: "88",
    description:
      "Managing Director at Windmark Investment Partners.",
    isOnline: true,
    message: "My colleague Sara is better suited to answer your questions. I will send your material to here.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "David Berkman",
    match: "76",
    description:
      "Managing Partner at Associated Partners.",
    isOnline: false,
    message: "You: Hey David, I'd love to chat about your work & pitch you what may be a company of interest.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Dale Rice",
    match: "95",
    description:
      "Executive Director at Assured Management Company.",
    isOnline: true,
    message:
      "How's this Monday at 8:00am?.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "James Manley",
    match: "67",
    description:
      "CEO at Atlantic-Pacific Capital.",
    isOnline: true,
    message:
      "Interested in your company. Let's chat.",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Michael Keaveney",
    match: "85",
    description:
      "Partner at Capstone Partners.",
    age: "Location",
    location: "Greater New York City Area",
    info1: 'Villanova University 2003',
    info2: "Formerly at Credit Suisse, Atlantic-Pacific Capital, & Mercury Capital Advisors",
    info3: "Industry Agnostic",
    info4: "Us focused",
    isOnline: true,
    message:
      "We're not currently looking for investments at this time.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Pierre Costes",
    match: "74",
    description:
      "Director at Butler Capital Partners.",
    isOnline: true,
    message:
      "Apologies, we only consider investments in France.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Wilma Burns",
    match: "98",
    description:
      "Executive Assistant at Center for Financial Services Innovation.",
    isOnline: false,
    message:
      "You: I love the work that CFSI is doing. Could we set up a time to talk about it?",
    image: IMAGE_10,
  },
];

export default data;
