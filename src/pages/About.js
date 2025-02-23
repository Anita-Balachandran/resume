import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

function About() {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      
      <Section>
        <h2>Professional Background</h2>
        <p>
        Learn and grow as a counselling therapist and psychologist by leveraging my knowledge to provide advice to my clients and change their attitude to lead a better life. With rich understanding and passion towards psychology, I want to build a career out of my passion in contributing to the society
        </p>
      </Section>

      <Section>
        <h2>Education</h2>
        <ul>
          <li>
            Master of Computer Applications - MCA, Computer Engineering- [
            Madurai Kamaraj University]</li>
          <li>Post Graduate , Counseling and Family Therapy - [
Indira Gandhi National Open University ]</li>
          <li>Master's degree, Psychology- [
Tamil Nadu Open University (TNOU)
]</li>
        </ul>
      </Section>

      <Section>
        <h2>Professional Experience</h2>
        <ul>
          <li>Freelance Counselling Psychologist (2020-Present)</li>
          <li>Relationship Counsellor at [Myfitbrain] (2025-Present)</li>
          <li>Counselling Psychologist at [Myfitbrain] (2025-Present)</li>
          {/* Add more experience items */}
        </ul>
      </Section>
    </AboutContainer>
  );
}

export default About; 