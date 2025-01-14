export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'ongoing' | 'completed';
  projectDetails: {
    fundedBy?: string[];
    duration: string;
    principalInvestigator: string;
    coInvestigators?: string[];
  };
  link?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    id: "ai-decision-intelligence",
    title: "Decision Intelligence: Computational Linguistic Modeling and Evaluation",
    category: "Computational Linguistic Decision Modeling",
    description: "Developing computational linguistic modeling methods for optimizing sequential decision-making problems, enabling efficient, effective, and structured decision intelligence through language-based problem-solving frameworks.",
    image: "/images/decision-intelligence.jpg",
    status: "ongoing",
    projectDetails: {
      fundedBy: ["National Research Foundation of Korea", "Ministry of Science and ICT"],
      duration: "2024.06.01 ~ 2027.05.31",
      principalInvestigator: "Keeheon Lee"
    }
  },
  {
    id: "past-meets-future",
    title: "Past Meets Future: Deep Learning Innovations in Historical Map Digitization and Infrastructure Insights",
    category: "Deep Learning",
    description: "This research project proposes a novel approach to accelerating the addition of geospatial and historical data to the Open World Atlanta (OWA - atlanta.urbanspatialhistory.org) interface, a web-based platform that makes accessible information drawn from historical maps, city directories, archival collections, newspapers, web resources, and census data. We will leverage tools from Artificial Intelligence, geospatial analysis, machine learning, and usability studies to develop new approaches and methodologies for data-rich, collaborative research projects. Specifically, our proposed project utilizes machine learning and student-researcher involvement to develop more efficient map processing workflows through four distinct steps: Map Restoration, Intelligent Infrastructure Recognition System, Historical Map Augmentation, and the creation of User-Centric Historical Maps. This partnership brings together an interdisciplinary team of faculty and staff experts from Emory and Yonsei University while also giving opportunities to graduate and undergraduate students to research and publish. Harnessing the Emory-Yonsei team’s combined expertise in machine learning and geospatial mapping technologies will not only build out OWA’s collections to include current bodies of information, but will also better position future teams to expand the body of work. We hope this current phase will result in an exponential increase in data processing efficiency and speed, the streamlining of which has the potential to revolutionize the current workflow with AI capabilities in a way that other digital mapping or archival projects can then replicate. ",
    image: "/images/past-meets-future.jpg",
    status: "ongoing",
    projectDetails: {
      fundedBy: ["Emory University-Yonsei University Collaborative Research Grants"],
      duration: "2024.03.01 ~ 2026.2.28",
      principalInvestigator: "Keeheon Lee"
    }
  },
  {
    id: "communitas-america",
    title: "Communitas America CASA Project",
    category: "Data Analysis",
    description: "Information extraction, analysis, visualization of speech data from entrepreneurship program participants in Bronx, NYC.",
    image: "/images/bronx.jpg",
    status: "completed",
    projectDetails: {
      fundedBy: ["Communitas America"],
      duration: "2021.04.01 ~ 2022.1.31",
      principalInvestigator: "Keeheon Lee"
    },
  },
  {
    id: "korean-econ-dev-analysis",
    title: "Construction and Analysis of the Korean Economic Development Paper Dataset",
    category: "Data Analysis",
    description: "Information extraction, analysis, visualization of Korean Economic Development Paper Dataset.",
    image: "/images/project-example.jpg",
    status: "completed",
    projectDetails: {
      fundedBy: ["KDI"],
      duration: "2021.08.01 ~ 2021.12.31",
      principalInvestigator: "Keeheon Lee"
    },
  },
  {
    id: "medical-doc-analysis",
    title: "Extraction of Raw Data from Medical Documents and Development of Sensitivity Analysis Algorithms and Software (Outsourced)",
    category: "Data Analysis",
    description: "Information extraction, analysis, visualization of Korean Economic Development Paper Dataset.",
    image: "/images/project-example.jpg",
    status: "completed",
    projectDetails: {
      fundedBy: ["Ministry of SMEs and Startups, Korea"],
      duration: "2021.09.01 ~ 2022.08.31",
      principalInvestigator: "Keeheon Lee"
    },
  },
];