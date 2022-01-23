export const workExperience = [
  {
    companyName: `Zynga`,
    role: `Software Developer Intern`,
    date: `Jan – April, Sept – Dec 2021`,
    address: `Toronto, Ontario (Remote)`,
    details: [
      `Built and maintained data analytics tools (React, Redux), microservices (SpringBoot, Flask) and CI/CD pipelines as fullstack developer, delivering new features, bug fixes, and solutions to inconsistent behaviour from edge cases`,
      `Refactored SQL queires, error handling procedures, and business logic for dropdown search suggestion feature, eliminiting backend crashes while reducing redundant suggestions by 70% `,
      `Dockerized and deployed Selenium test suite to EKS with sidecar approach, added automated error/crash recovery through chrome driver status tracking and helm liveness probes, and created paramaterized Jenkins pipeline for launching`,
      `Parsed SQL database form inccorect primary/foreign key mappings, developed cleanup and functional testing procedures, and rolled out changes to development and production enviroments in multistage process`,
      `Propsosed and improved integration test plans through increasing test scalability, graceful cleanups, and test plan reviews with team`,
    ]
  },
  {
    companyName: `Avidbots`,
    role: `Software Developer Intern`,
    date: `Sept 2019 – Dec 2019`,
    address: `Waterloo, Ontario`,
    details: [
      `Implemented user interfaces and warning/detection systems against slipping, component detachment and crashing for autonomous robot using C++, Python and JavaScript`,
      `Performed data analysis from field test data and live feeds via sockets from ROS publisher/subscriber framework`,
      `Developed robot human communication systems, designed state machine to manage multi-threaded robot states and audio resources, collaborated with product team to determine control settings and response times for optimal customer experience.`,
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
      `Developed single sign-on template function, authenticated using SAML with PassportJ with JWT Tokens for statelessness and scalability`,
      `Digitized oil task authorization system, created React forms with backend verification in NodeJs, and used bluemix for NoSQL cloud storage`
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