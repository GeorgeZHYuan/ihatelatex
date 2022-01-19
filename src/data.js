export const workExperience = [
  // {
  //   companyName: `Zynga`,
  //   role: `Software Developer Intern`,
  //   date: `Jan – April 2021`,
  //   address: `Toronto, Ontario (Remote)`,
  //   details: [
  //     `Built and maintained web features, regression tests and CI/CD pipelines for analytics web tool as full stack developer`, 
  //     `Identified and fixed incorrect primary/foreign key mappings in MySQL database, udpated queries and REST API against crashes, and conducted functional testing on dev and prod environments`, 
  //     `Dockerized Selenium test suite, deployed to EKS with sidecar approach, automated error/crash recovery through chrome driver status tracking and helm liveness probes, and created paramaterized Jenkins pipeline for launching`,
  //   ]
  // },
  // {
  //   companyName: `Zynga`,
  //   role: `Software Developer Intern`,
  //   date: `Sept – Dec 2021`,
  //   address: `Toronto, Ontario (Remote)`,
  //   details: [
  //     `Collaborated with product and development teams using an iterative development and review process to create design documents for product workflow, UI mockups, sequence diagrams, and REST API documentation`,
  //     `Developed code viewer interface built inital UI and data routing from source of truth`,
  //     `Redesigned live server status tracking tool, used recursion and Semantic UI React to generate multilevel accordion-table interface, and mapped to existing Redux states to automatically update accordion on new data events`,     
  //   ]
  // },

  {
    companyName: `Zynga`,
    role: `Software Developer Intern`,
    date: `Jan – April, Sept – Dec 2021`,
    address: `Toronto, Ontario (Remote)`,
    details: [
      `Built and maintained web features, REST API, SQL queries, integration tests and CI/CD pipelines as full stack developer`,
      `Drove end-to-end feature development, collaborated with product team to design product workflows, created mockups, sequence diagrams and REST API for feature requests/investigations, and gathered feedback after launch`,
      `Redesigned rigid server status tracker into accordion-table structure, used recursive algorithms and Semantic UI React library to generate DOM layout, and provided live updates through mapped Redux states`,  
      `Identified incorrect primary/foreign key mappings causing crashes, cleaned database after functional testing on dev/prod environments, udpated queries and added error handling for REST API`,
      `Dockerized Selenium test suite, deployed to EKS with sidecar approach, automated error/crash recovery through chrome driver status tracking and helm liveness probes, and created paramaterized Jenkins pipeline for launching`,
    ]
  },
  {
    companyName: `Avidbots`,
    role: `Software Developer Intern`,
    date: `Sept 2019 – Dec 2019`,
    address: `Waterloo, Ontario`,
    details: [
      `Implemented warning/detection systems against slipping, component detachment and crashing for autonomous robot`,
      `Performed data analysis from field test data and live feeds via sockets from ROS publisher/subscriber framework`,
      `Developed robot human communication systems, designed state machine for multi-threaded response network and audio resources, collaborated with product team for optimal audio control settings and response timing.`,
    ]
  },
  {
    companyName: `Consensys`,
    role: `Software Developer Intern`,
    date: `Jan 2019 – April 2019`,
    address: `Waterloo, Ontario (Remote)`,
    details: [
      `Designed JSON based postcard generator for Crpyto crowd funder web app, used React/Redux and Styled components to generate DOM layouts based on user defined JSON`,
      `Deployed, debugged and fixed crashing docker images/containers and pods on AWS using Helm charts and kubernetes`
    ]
  },
  {
    companyName: `IBM`,
    role: `Software Developer Intern`,
    date: `May 2018 – Aug 2018`,
    address: `Calgary, Alberta`,
    details: [
      `Developed single sign-on template function, authenticated using SAML with PassportJ with JWT Tokens for statelessness and scalability, and demoed using browser side caching for credentials`,
      `Digitized oil task authorization system, created React forms, backend verification in NodeJs, and NoSQL cloud storage`
    ]
  }
  ]

  export const projects = [
  {
    projectName: `Educatore`,
    techStack: [
      `System Design`,
      `React`,
      'NodeJs',
      `SQL`,
      `AWS`,
    ],
    details: [
      `Developing a microservice based education resource distribution/discussion platform for fourth year design project`,
      `Documented and designed infrastructure for load balancing multiple NodeJs servers, authentication with OAuth2.0 via PassportJs, JWT tokens distrubtion system for sessionless authentication, hosted on VPC networks on AWS`
    ]
  },
  {
    projectName: `Waterloop`,
    techStack: [
      `TypeScript`,
      `Project Managment`,
    ],
    details: [
      `Designed team member profiles page on figma, implemented profiles, dropdowns, filters and transitions using TypeScript`,
      `Organized meetings, created and assigned tickets to team members, and demoed features as a Team Lead`
    ]
  },
  ]

  export const skills = [
  {
    title: `Languages`,
    skills: [
      `HTML`,
      `JavaScript (ES6)`,
      `TypeScript`,
      `CSS`,
      `SCSS`,
      `Python`,
      `C++`,
      `Java`,
      `SQL`,
      `Bash/Shell`,
    ] 
  },
  {
    title: `Tools`,
    skills: [
      `ReactJs`,
      `NodeJs`,
      `Flask`,
      `MySQL`,
      `PostgreSQL`,
      `MongoDB`,
      `Docker`,
      `AWS`,
      `Kubernetes`,
      `Jenkins`,
      `Git`,
    ] 
  },
]

export const education = {
  institution: `University of Waterloo`,
  degree: `BaSc. Honours Computer Engineering`,
  gradDate: `Expected Graduation in 2022`
}