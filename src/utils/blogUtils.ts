import { BlogPost, blogPosts } from '@/data/blog';

export type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const getAllPosts = (): (BlogPost & { readingTime: string })[] => {
  return blogPosts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content)
  }));
};

export const getPostBySlug = (slug: string) => {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  
  return {
    ...post,
    readingTime: calculateReadingTime(post.content)
  };
};

export const filterPosts = (
  posts: BlogPost[],
  {
    search = '',
    tags = [] as string[],
    sortBy = 'date-desc' as SortOption,
  }
) => {
  let filteredPosts = [...posts];

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
    );
  }

  if (tags.length > 0) {
    filteredPosts = filteredPosts.filter((post) =>
      tags.every((tag) => post.tags.includes(tag))
    );
  }

  filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return filteredPosts;
};

export const getAllTags = (posts: BlogPost[]) => {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};