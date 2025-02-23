import React from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

function Blog() {
  const blogPosts = [
    {
      title: "Understanding Cognitive Behavioral Therapy",
      date: "April 15, 2024",
      excerpt: "An in-depth look at how CBT can help manage anxiety and depression..."
    },
    {
      title: "The Impact of Social Media on Mental Health",
      date: "April 10, 2024",
      excerpt: "Exploring the relationship between social media usage and mental well-being..."
    },
    {
      title: "Mindfulness Techniques for Daily Life",
      date: "April 5, 2024",
      excerpt: "Simple mindfulness practices you can incorporate into your daily routine..."
    }
  ];

  return (
    <BlogContainer>
      <h1>Blog Posts</h1>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}

export default Blog; 