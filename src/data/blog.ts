export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime?: string;  // Added readingTime as optional property
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'welcome',
    title: 'Welcome to HAIR Lab',
    date: '2025-01-04',
    author: 'Lab Team',
    excerpt: 'Introduction to the Human AI Research Lab at Yonsei University',
    tags: ['announcement', 'research'],
    content: `
# Welcome to HAIR Lab

Welcome to the Human AI Research (HAIR) Lab at Yonsei University. Our lab focuses on developing AI solutions that are more aligned with human needs and values.

## Our Mission

We strive to create artificial intelligence systems that are:
- More interpretable
- More ethical
- More human-centered

## Current Research

Our current research focuses on several key areas:
1. Human-AI Interaction
2. Ethical AI Development
3. AI Interpretability
4. Social Impact of AI

Stay tuned for more updates on our research and findings!
    `
  },
  {
    slug: 'ethical-ai-development',
    title: 'Ethical Considerations in AI Development',
    date: '2024-12-15',
    author: 'Dr. Kim',
    excerpt: 'Exploring the ethical implications of AI development and our approach to responsible AI research',
    tags: ['ethics', 'research', 'AI development'],
    content: `
# Ethical Considerations in AI Development

Our lab focuses on developing AI systems with strong ethical foundations. Here's how we approach this challenge:

## Key Principles
1. Transparency
2. Accountability
3. Fairness
4. Privacy Protection

## Current Frameworks
We've developed several frameworks for ethical AI development...
    `
  },
  {
    slug: 'new-collaboration',
    title: 'New Collaboration with Industry Partners',
    date: '2024-11-20',
    author: 'Prof. Lee',
    excerpt: 'Announcing our new partnership with leading tech companies for AI research',
    tags: ['announcement', 'collaboration', 'industry'],
    content: `
# New Industry Partnerships

We're excited to announce new collaborations with industry leaders in AI development.

## Partnership Goals
- Joint research initiatives
- Knowledge exchange
- Real-world applications

## Expected Outcomes
This collaboration will accelerate our research in several key areas...
    `
  },
  {
    slug: 'research-breakthrough',
    title: 'Breakthrough in Human-AI Interaction',
    date: '2025-01-02',
    author: 'Research Team',
    excerpt: 'Recent breakthrough in our human-AI interaction research shows promising results',
    tags: ['research', 'breakthrough', 'human-AI interaction'],
    content: `
# Recent Breakthrough in Human-AI Interaction

Our team has achieved significant progress in developing more intuitive human-AI interfaces.

## Key Findings
- Improved response accuracy by 45%
- Reduced interaction latency
- Enhanced user satisfaction scores

## Methodology
The research involved comprehensive user studies...
    `
  }
];