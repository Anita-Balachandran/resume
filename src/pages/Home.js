import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { fadeIn, slideUp, pulse } from '../components/animations/keyframes';

// Import images (add these to your assets folder)
import heroImage from '../assets/images/psychology-hero.jpg';
import brainIcon from '../assets/images/brain-icon.svg';
import wellnessImage from '../assets/images/wellness.jpg';
import therapyImage from '../assets/images/therapy.jpg';
import meditationImage from '../assets/images/meditation.jpg';

const ScrollIndicator = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary});
  transform-origin: 0%;
  transform: scaleX(${props => props.scrollProgress});
  z-index: 1000;
  transition: transform 0.1s ease;
`;

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 0.6s ease-in;
`;

const HomeContainer = styled(AnimatedContainer)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  padding: 8rem 2rem;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(74, 144, 226, 0.1), 
      rgba(103, 178, 111, 0.1));
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  animation: ${slideUp} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const WelcomeText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${theme.colors.text.secondary};
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);

    &:before {
      opacity: 1;
    }

    h3 {
      color: ${theme.colors.primary};
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const BrainIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  animation: ${pulse} 2s infinite;
`;

const TestimonialSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  background: ${theme.colors.background.accent};
  border-radius: 20px;
`;

const TestimonialSlider = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.4rem;
  line-height: 1.8;
  color: ${theme.colors.text.primary};
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.cite`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  font-style: normal;
`;

const CTASection = styled.section`
  margin: 4rem 0;
  padding: 4rem;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 20px;
  text-align: center;
  color: white;
`;

const CTAButton = styled.button`
  background: white;
  color: ${theme.colors.primary};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-top: 2rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  text-align: center;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
  }
`;

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollIndicator scrollProgress={scrollProgress} />
      <HomeContainer>
        <Hero>
          <HeroContent>
            <BrainIcon src={brainIcon} alt="Brain Icon" />
            <Title>Anita Balachandran</Title>
            <Subtitle>
              Licensed Clinical Psychologist | Mental Health Advocate | Wellness Expert
            </Subtitle>
            <WelcomeText>
              Welcome to a space dedicated to your mental well-being. Here, we explore the 
              complexities of the human mind with empathy, understanding, and evidence-based insights.
            </WelcomeText>
          </HeroContent>
        </Hero>

        <StatGrid>
          <StatCard>
            <h4>1+</h4>
            <p>Years Experience</p>
          </StatCard>
          <StatCard>
            <h4>10+</h4>
            <p>Clients Helped</p>
          </StatCard>
          <StatCard>
            <h4>100%</h4>
            <p>Confidentiality</p>
          </StatCard>
        </StatGrid>
        
        <FeaturedGrid>
          <FeatureCard>
            <img src={therapyImage} alt="Therapy Session" />
            <h3>Individual Therapy</h3>
            <p>Personalized support for your mental health journey, tailored to your unique needs and goals.</p>
          </FeatureCard>
          <FeatureCard>
            <img src={wellnessImage} alt="Wellness Practice" />
            <h3>Mindfulness Practice</h3>
            <p>Learn evidence-based techniques for staying present and reducing stress in your daily life.</p>
          </FeatureCard>
          <FeatureCard>
            <img src={meditationImage} alt="Group Session" />
            <h3>Group Sessions</h3>
            <p>Connect with others in a supportive environment and share experiences in a safe space.</p>
          </FeatureCard>
        </FeaturedGrid>

        <TestimonialSection>
          <TestimonialSlider>
            <TestimonialQuote>
              "Working with Anita has been transformative. Her approach is both professional 
              and deeply compassionate, helping me develop practical tools for managing stress."
            </TestimonialQuote>
            <TestimonialAuthor>-Confidential Client</TestimonialAuthor>
          </TestimonialSlider>
        </TestimonialSection>

        <CTASection>
          <h2>Ready to Start Your Journey?</h2>
          <p>Take the first step towards better mental health today.</p>
          <CTAButton onClick={() => window.location.href='https://myfitbrain.in/online-therapists/anita-balachandran'}>
            Schedule a Consultation
          </CTAButton>
        </CTASection>
      </HomeContainer>
    </>
  );
}

export default Home; 