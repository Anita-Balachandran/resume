import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BlogTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const BlogDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const BlogExcerpt = styled.p`
  color: #444;
  margin: 1rem 0;
`;

function BlogCard({ title, date, excerpt }) {
  return (
    <Card>
      <BlogTitle>{title}</BlogTitle>
      <BlogDate>{date}</BlogDate>
      <BlogExcerpt>{excerpt}</BlogExcerpt>
    </Card>
  );
}

export default BlogCard; 