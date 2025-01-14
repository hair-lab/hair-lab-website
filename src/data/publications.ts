export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citation?: string;
  link: string;
  category: "AI & Deep Learning" | "HCI & Chatbots" | "Network Analysis" | "Product Design" | "Digital Libraries" | "Social Impact" | "Bibliometrics";
}

export const publications: Publication[] = [
  {
    title: "The Computational Limits of Deep Learning",
    authors: ["Thompson, N.C.", "Greenewald, K.", "Lee, K.", "Manso, G.F."],
    venue: "IEEE Spectrum",
    year: 2021,
    citation: "IEEE Spectrum 58 (10), 50-55",
    category: "AI & Deep Learning",
    link: "https://arxiv.org/abs/2007.05558"
  },
  {
    title: "Factors that influence an individual's intention to adopt a wearable healthcare device: The case of a wearable fitness tracker",
    authors: ["Lee, S.Y.", "Lee, K."],
    venue: "Technological Forecasting and Social Change",
    year: 2018,
    citation: "Technological Forecasting and Social Change 129, 154-163",
    category: "Product Design",
    link: "https://www.researchgate.net/publication/322911016_Factors_that_influence_an_individual's_intention_to_adopt_a_wearable_healthcare_device_The_case_of_a_wearable_fitness_tracker"
  },
  {
    title: "Deep Learning's Diminishing Returns: The Cost of Improvement is Becoming Unsustainable",
    authors: ["Thompson, N.C.", "Greenewald, K.", "Lee, K.", "Manso, G.F."],
    venue: "IEEE Spectrum",
    year: 2021,
    citation: "IEEE Spectrum 58 (10), 50-55",
    category: "AI & Deep Learning",
    link: "https://ieeexplore.ieee.org/document/9563954"
  },
  {
    title: "Agent-based diffusion model for an automobile market with fuzzy TOPSIS-based product adoption process",
    authors: ["Kim, S.", "Lee, K.", "Cho, J.K.", "Kim, C.O."],
    venue: "Expert Systems with Applications",
    year: 2011,
    citation: "Expert Systems with Applications 38 (6), 7270-7276",
    category: "Product Design",
    link: "https://www.researchgate.net/publication/220219228_Agent-based_diffusion_model_for_an_automobile_market_with_fuzzy_TOPSIS-based_product_adoption_process"
  },
  {
    title: "Dynamic semantic network analysis for identifying the concept and scope of social sustainability",
    authors: ["Lee, K.", "Jung, H."],
    venue: "Journal of Cleaner Production",
    year: 2019,
    citation: "Journal of Cleaner Production 233, 1510-1524",
    category: "Network Analysis",
    link: "https://www.researchgate.net/publication/333625173_Dynamic_Semantic_Network_Analysis_for_Identifying_the_Concept_and_Scope_of_Social_Sustainability"
  },
  {
    title: "Subject–method topic network analysis in communication studies",
    authors: ["Lee, K.", "Jung, H.", "Song, M."],
    venue: "Scientometrics",
    year: 2016,
    citation: "Scientometrics 109 (3), 1761-1787",
    category: "Network Analysis",
    link: "https://link.springer.com/article/10.1007/s11192-016-2135-7"
  },
  {
    title: "Simple and Steady Interactions Win the Healthy Mentality: Designing a Chatbot Service for the Elderly",
    authors: ["Ryu, H.", "Kim, S.", "Kim, D.", "Han, S.", "Lee, K.", "Kang, Y."],
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    year: 2020,
    citation: "Proceedings of the ACM on Human-Computer Interaction 4 (CSCW2), 1-25",
    category: "HCI & Chatbots",
    link: "https://dl.acm.org/doi/10.1145/3415223"
  },
  {
    title: "Can Chatbots Help Reduce the Workload of Administrative Officers? Implementing and Deploying FAQ Chatbot Service in a University",
    authors: ["Lee, K.", "Jo, J.", "Kim, J.", "Kang, Y."],
    venue: "International Conference on Human-Computer Interaction",
    year: 2020,
    citation: "International Conference on Human-Computer Interaction, 348-354",
    category: "HCI & Chatbots",
    link: "https://www.researchgate.net/publication/334371692_Can_Chatbots_Help_Reduce_the_Workload_of_Administrative_Officers_-_Implementing_and_Deploying_FAQ_Chatbot_Service_in_a_University"
  },
  {
    title: "A Data-Driven Design Framework for Customer Service Chatbot",
    authors: ["Hwang, S.", "Kim, B.", "Lee, K."],
    venue: "International Conference on Human-Computer Interaction",
    year: 2019,
    citation: "International Conference on Human-Computer Interaction, 222-236",
    category: "HCI & Chatbots",
    link: "https://dl.acm.org/doi/10.1007/978-3-030-23570-3_17"
  },
  {
    title: "Pricing and Timing Strategies for New Product Using Agent-Based Simulation of Behavioural Consumers",
    authors: ["Lee, K.", "Lee, H.", "Kim, C.O."],
    venue: "Journal of Artificial Societies and Social Simulation",
    year: 2014,
    citation: "Journal of Artificial Societies and Social Simulation 17 (2), 1",
    category: "Product Design",
    link: "https://www.jasss.org/17/2/1.html"
  },
  {
    title: "Digital Libraries: Providing Quality Information",
    authors: ["Allen, R.B.", "Hunter, J.", "Zeng, M.L."],
    venue: "17th International Conference on Asia-Pacific Digital Libraries",
    year: 2015,
    citation: "ICADL 2015, Seoul, Korea",
    category: "Digital Libraries",
    link: "https://link.springer.com/content/pdf/10.1007/978-3-319-27974-9.pdf"
  },
  {
    title: "A Systematic Review on Social Sustainability of Artificial Intelligence in Product Design",
    authors: ["Lee, K."],
    venue: "Sustainability",
    year: 2021,
    citation: "Sustainability 13 (5), 2668",
    category: "Social Impact",
    link: "https://www.mdpi.com/2071-1050/13/5/2668"
  },
  {
    title: "The paradigm shift of mass customisation research",
    authors: ["Kim, S.", "Lee, K."],
    venue: "International Journal of Production Research",
    year: 2020,
    category: "Product Design",
    link: "https://www.tandfonline.com/doi/full/10.1080/00207543.2022.2081629"
  },
  {
    title: "Examining Characteristics of Traditional and Twitter Citation",
    authors: ["Jung, H.", "Lee, K.", "Song, M."],
    venue: "Frontiers in Research Metrics and Analytics",
    year: 2016,
    citation: "Frontiers in Research Metrics and Analytics 1, 6",
    category: "Bibliometrics",
    link: "https://www.frontiersin.org/journals/research-metrics-and-analytics/articles/10.3389/frma.2016.00006/full"
  },
  {
    title: "Ensemble analysis of topical journal ranking in bioinformatics",
    authors: ["Song, M.", "Kim, S.Y.", "Lee, K."],
    venue: "Journal of the Association for Information Science and Technology",
    year: 2017,
    category: "Bibliometrics",
    link: "https://arxiv.org"
  },
  {
    title: "Agent simulation-based ordinal optimisation for new product design",
    authors: ["Lee, H.", "Lim, J.", "Lee, K.", "Kim, C.O."],
    venue: "Journal of the Operational Research Society",
    year: 2019,
    citation: "Journal of the Operational Research Society 70 (3), 502-515",
    category: "Product Design",
    link: "https://arxiv.org"
  },
  {
    title: "Comparative evaluation of bibliometric content networks by tomographic content analysis",
    authors: ["Lee, K.", "Kim, S.Y.", "Kim, E.H.J.", "Song, M."],
    venue: "Journal of the Association for Information Science and Technology",
    year: 2018,
    category: "Bibliometrics",
    link: "https://asistdl.onlinelibrary.wiley.com/doi/full/10.1002/asi.23752?casa_token=Wy8Dm1DCaaEAAAAA%3ACUQnrvhZ_fLvqcYTagb5mU1FkuBmgA_s147ZItI2CFRQqrgCXNk43EfK5rV1T6ltvMDnrcvQiWqE5bYc"
  },
  {
    title: "Inferring Undiscovered Public Knowledge by Using Text Mining-driven Graph Model",
    authors: ["Heo, G.E.", "Lee, K.", "Song, M."],
    venue: "Proceedings of the ACM 8th International Workshop on Data and Text Mining",
    year: 2014,
    category: "Network Analysis",
    link: "https://dl.acm.org/doi/abs/10.1145/2665970.2665984?casa_token=4hIkWQfrm0sAAAAA:1g02VmAysN2XB73qASSkA7zUInQbewrSFPFJIC3I9G_Sjzb8xwKfASseDZ7Mx_C28WW5oD40uE_TYg"
  },
  {
    title: "Transforming a Specialized Q&A System to a Chatbot System: A Case of a Simplified Taxation in Korea",
    authors: ["Jang, J.", "Lee, K."],
    venue: "International Conference on Human-Computer Interaction",
    year: 2021,
    citation: "International Conference on Human-Computer Interaction, 296-308",
    category: "HCI & Chatbots",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-30712-7_38"
  }
];

export const getPublicationsByCategory = (category: Publication['category']) => {
  return publications.filter(pub => pub.category === category);
};

export const getCategories = (): Publication['category'][] => {
  return Array.from(new Set(publications.map(pub => pub.category)));
};

export const getRecentPublications = (limit: number = 5) => {
  return [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
};