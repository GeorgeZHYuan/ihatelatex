export const workExperience = [

  {
    companyName: `Zynga`,
    role: `Software Developer Intern`,
    date: `Sept – Dec 2021`,
    address: `Toronto, ON`,
    details: [
      `Built web features and CI/CD pipelines as full stack developer to maintain and improve data analytics tools (React, Redux), microservices (SpringBoot, Flask) and development workflows`,
      `Redesigned backend infrastructure for error handling, database queries, and search suggestion business logic, resolving all search related crashes while increasing search relevancy by over 80%`,
      `Dockerized and deployed Selenium test suite to EKS, automated crash recovery with helm liveness probes, and created a parameterized Jenkins pipeline, enabling automated recurrent test runs`,
      `Investigated incorrect primary/foreign key mappings, developed cleanup and functional testing procedures, and rolled out changes to development and production environment reducing 100% of mapping errors`,
    ]
  },
  {
    companyName: `Zynga`,
    role: `Software Developer Intern`,
    date: `Jan – April 2021`,
    address: `Toronto, ON`,
    details: [
      `Led the end-to-end development of a code-viewer feature, organized meetings to discuss/review trade-offs for several product and architectural designs, and implemented full functionality from created design documents`,
      `Developed server status tracking tool, used recursive algorithms and React libraries to generate accordion layout from JSON metadata, and provided live updates through mapped Redux states`,
      `Designed and built asynchronous REST API endpoints, managing multiple redirections over microservice architecture`
    ]
  },
  {
    companyName: `Avidbots`,
    role: `Software Developer Intern`,
    date: `Sept 2019 – Dec 2019`,
    address: `Waterloo, ON`,
    details: [
      `Implemented user interfaces and warning/detection systems against slipping, component detachment and crashing for autonomous robot using C++, Python and JavaScript`,
      `Developed robot human communication systems, collaborated with product team to determine audio behavior, and built a state machine for multithreaded management of robot states and audio resources`,
      `Analyzed data collected through field tests and live feeds using TCP sockets from ROS publisher/subscriber framework`,
    ]
  },
  {
    companyName: `IBM`,
    role: `Software Developer Intern`,
    date: `May 2018 – Aug 2018`,
    address: `Calgary, AB`,
    details: [
      `Built a SAML based single sign-on middleware using PassportJs with cached JWT Tokens for statelessness and scalability, allowing client identity providers to authenticate with an internal IBM service provider`,
      `Digitized an oil task authorization system using React forms, NodeJs backend verification, and a NoSQL db on IBM cloud, reducing client document approval times by several weeks`
    ]
  }
  ]

  export const projects = [
  {
    projectName: `Educatore`,
    techStack: [
      `ReactJs`,
      'NodeJs',
      `Docker`,
      `AWS`,
      `System Design`
    ],
    details: [
      `Building an data distribution platform based on cloud hosted microservice architecture for fourth year design project`,
      `Documented and designed infrastructure for load balancing multiple NodeJs servers, authentication with OAuth2.0 via PassportJs, JWT tokens distrubtion system for sessionless authentication, hosted on VPC networks on AWS`
    ]
  },
  {
    projectName: `Waterloop`,
    techStack: [
      `TypeScript`,
      `Project Managment`,
      `Leadership`
    ],
    details: [
      `Designed team member profiles page on figma, implemented profiles, dropdowns, filters and transitions using TypeScript`,
      `Responsible for organizing meetings, scoping features and managing 10+ entry to junior level developers as a Team Lead `
    ]
  },
  ]

  export const skills = [
  {
    title: `Languages`,
    skills: [
      `JavaScript (ES6)`,
      `TypeScript`,
      `Python`,
      `C++`,
      `Java`,
      `HTML`,
      `CSS`,
      `SCSS`,
      `Bash`,
    ] 
  },
  {
    title: `Tools`,
    skills: [
      `ReactJs`,
      `NodeJs`,
      `Flask`,
      `MySQL`,
      `MongoDB`,
      `Docker`,
      `Kubernetes`,
      `AWS`,
      `Jenkins`,
      `Postman`
    ] 
  },
]

export const education = {
  institution: `University of Waterloo`,
  degree: `BaSc. Honours Computer Engineering`,
  gradDate: `Expected Graduation in 2022`
}