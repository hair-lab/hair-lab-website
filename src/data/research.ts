export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  keyFindings?: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: "human-ai-interaction",
    title: "Human-AI Interaction",
    description: "Developing novel interaction paradigms between humans and AI systems, focusing on intuitive interfaces and natural communication methods.",
    category: "HCI",
    keyFindings: [
      "Novel gesture-based interaction system",
      "Improved response accuracy by 45%",
      "Enhanced user satisfaction metrics"
    ]
  },
  {
    id: "ethical-ai",
    title: "Ethical AI Development",
    description: "Research on developing AI systems with strong ethical foundations, focusing on fairness, transparency, and accountability.",
    category: "Ethics",
    keyFindings: [
      "Framework for ethical AI development",
      "Bias detection methodologies",
      "Privacy-preserving algorithms"
    ]
  },
  {
    id: "ai-interpretability",
    title: "AI Interpretability",
    description: "Making AI systems more understandable and interpretable to humans, bridging the gap between complex models and human comprehension.",
    category: "Explainable AI",
    keyFindings: [
      "Visual explanation methods",
      "Natural language model explanations",
      "Interactive debugging tools"
    ]
  }
];