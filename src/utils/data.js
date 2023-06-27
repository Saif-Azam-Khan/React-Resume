import redux_icon from "../utils/icons/Redux-icon.png";
import react_icon from "../utils/icons/React-icon.png";
import python_icon from "../utils/icons/Python-icon.png";
import nodejs_icon from "../utils/icons/Node-icon.png";
import html_icon from "../utils/icons/html-icon.png";
import css_icon from "../utils/icons/css-icon.png";
import javascript_icon from "../utils/icons/JavaScript-icon.png";
import mongoDb_icon from "../utils/icons/Mongodb-icon.png";

export const contactInfo = {
  email: "saif.azamkhan77@gmail.com",
  address: "Bhopal, MP, India",
  linkedin: "https://www.linkedin.com/in/saif-azam-khanbb6733173/",
  phone: "+91-9111 844 005",
};

export const work_experience = [
  {
    id: "0",
    company_name: "V Group Inc.",
    position: "Sourcing associate",
    date_of_joining: "01/2020",
    end_date: "03/2020",
    responsibilities: [
      "Analyzed job orders to fully understand clients' specific needs and requirements, and update job descriptions to meet client explicit requirements.",
      "Identify and source top candidates through resume analysis",
      "Conduct searches to find qualified individuals via websites including Monster, LinkedIn, Indeed, Dice, etc.",
      "Edited and reformatted resumes as necessary, adding relevant keywords and skills to increase candidates' match with client positions.",
    ],
  },
  {
    id: "1",
    company_name: "Java R&D",
    position: "Software developer",
    date_of_joining: "10/2020",
    end_date: "Present",
    responsibilities: [
      "Developed reusable components using React according to design guidelines.",
      "Used predefined CSS tokens to maintain page theme and consistent style.",
      "Made sure that accessibility worked in both Windows and Mac and also the application is easily accessible with the help of keyboard controls only.",
      "Protected operations by keeping information confidential.",
      "Worked closely with different teams to know their requirements and recommendations.",
      "Assisted the Development Manager with all aspects of software design and coding.",
      "Followed Agile methodology for this project, and attended daily standups and sprint refinement meetings.",
    ],
    environment:
      "React, ES6, Hooks, React Promises, CSS, JavaScript, JSX, Material UI, Yarn, NodeJS, VS Code, GitHub, Agile, Scrum, Zoom, Webex, Microsoft Teams",
  },
];

export const techStack = [
  {
    id: 0,
    technology: "React.js",
    description:
      "React.js is a JavaScript library for building user interfaces. It uses a component-based architecture to simplify the development of complex UIs through the creation and composition of reusable components. React is known for its performance, flexibility, and scalability and is widely used by developers to build web applications, mobile apps, and other interactive user interfaces.It is maintained by Meta and a community of individual developers and companies.\nMost of my projects are in React.js asa this is my primary tech stack.",
    icon: react_icon,
    link: "https://github.com/Saif-Azam-Khan?tab=repositories",
    linkMessage: "Link to git repository"
  },
  {
    id: 1,
    technology: "Redux/ RTK (Redux Toolkit)",
    description:
      "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.\nRTK (Redux Toolkit) is a package that simplifies and accelerates the development of Redux applications. It provides abstractions for common Redux use cases, such as creating slices of state, defining reducers and actions, and configuring the store. RTK also includes utilities to handle asynchronous logic and manage immutable updates of the store.",
    icon: redux_icon,
  },
  {
    id: 2,
    technology: "Python",
    description:
      "Python is a high-level, interpreted programming language that emphasizes code readability and simplicity. It supports multiple programming paradigms, including object-oriented, functional, and procedural styles. Python has a large standard library and numerous third-party libraries for various applications, making it a popular choice for application development, AI/ML, data analysis, and more.\nI am also have a gold 5 star badge on hackerRank for python.",
    icon: python_icon,
    link: "https://www.linkedin.com/posts/activity-6956929323656200192-FpUm?utm_source=share&utm_medium=member_desktop",
    linkMessage: "Shared on LinkedIn"
  },
  {
    id: 3,
    technology: "Node.js",
    description:
      "Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser. It allows developers to build scalable and high-performance applications with its asynchronous event-driven architecture. Node.js has a large ecosystem of modules and packages that can be easily added to any project via npm, making it a popular choice for building backend services and APIs.",
    icon: nodejs_icon,
  },
  {
    id: 4,
    technology: "JavaScript",
    description:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
    icon: javascript_icon,
  },
  {
    id: 5,
    technology: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.\n\nCascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    icon: [html_icon],
  },
  {
    id: 6,
    technology: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a styling language used to describe the presentation of HTML (HyperText Markup Language) or XML (eXtensible Markup Language) documents. It defines how elements should be displayed on a web page, including layout, typography, colors, and other visual aspects. By separating the content (HTML) from the presentation (CSS), it allows developers to create beautiful and consistent designs easily across multiple pages or devices, making it an essential technology for modern web development.",
    icon: [css_icon],
  },
  {
    id: 7,
    technology: "MongoDB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.",
    icon: mongoDb_icon,
  },
];

export const skills = [
  "Excellent communication skills",
  "Urge to learn new things",
  "Dedicated to work",
  "Well organized",
  "Result driven",
  "Loyal",
];

export const silentSkills = [
  "Comfortable working in night shifts",
  "A team player",
  "Have good knowledge of electronic components",
  "Good in sports",
];
