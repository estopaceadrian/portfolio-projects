import React from 'react';
import { Layout, About, PortfolioSection } from '../components';

const Homepage = () => {
  const technologies = [
    'JavaScript',
    'Next.js',
    'React',
    'Bootstrap/Tailwind',
    'Laravel',
    'MySQL',
    'Heroku',
  ];
  const quickLinks = [
    {
      text: 'Github',
      href: 'https://github.com/estopaceadrian',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/estopaceadrian',
    },
    {
      text: 'Email',
      href: 'mailto:estopaceadrian@gmail.com',
    },
  ];
  const portfolioItems = [
    {
      title: 'RoninScooterPH',
      logo: '/white_logo.PNG',
      color: '#30bc72',
      descriptions:
        'An e-commerce site that handles Store and Admin page wherein owners can manage their products and orders. Store page has add-to-cart function that directly saves to database to record your cart items. My final solo capstone during my study at KodeGo.',
      technologies: [
        'React',
        'Laravel',
        'Bootstrap',
        'MySQL',
        'PHP',
        'JavaScript',
        'Heroku',
      ],
      links: [
        {
          text: 'Site',
          href: 'https://roninph.club/',
        },
        {
          text: 'Source Code',
          href: 'https://github.com/estopaceadrian/ronin-capstone',
        },
      ],
    },
    {
      title: '7seven Luxury Hotel',
      logo: '/7seven.jpg',
      color: '#84cc16',
      descriptions:
        'A Group Project in KodeGo and my task is to create layouts and develop reusable components and manage the routes.',
      technologies: ['React', 'Bootstrap', 'JavaScript'],
      links: [
        {
          text: 'Site',
          href: 'https://7seven-luxury-hotel.netlify.app/',
        },
        {
          text: 'Source Code',
          href: 'https://github.com/kasDev18/kodego_mini_project_2',
        },
      ],
    },
    {
      title: 'ViteProject',
      logo: '/vite.svg',
      color: '#4f46e5',
      descriptions: 'Landing page for RoninScooterPH using React-Vite',
      technologies: ['React', 'Vite', 'Tailwind', 'JavaScript'],
      links: [
        {
          text: 'Site',
          href: 'https://vite-project-snowy.vercel.app/',
        },
        {
          text: 'Source Code',
          href: 'https://github.com/estopaceadrian/vite-project',
        },
      ],
    },
  ];
  return (
    <Layout>
      <About
        profile="/Adrian.JPG"
        profileAlt="Adrian Estopace"
        subtitle="Full-stack (React) Developer"
        title="Adrian Estopace"
        description={`Hi there! I'm Adrian Estopace from Philippines. I like building apps and learning new technologies. I have experience programming in many different languages, however some of my favourite projects is App and Web Development.

        I graduated BS in Computer Science from a University in Laguna, Philippines`}
        technologies={technologies}
        quickLinks={quickLinks}
      />
      {portfolioItems.map(
        ({ title, logo, color, descriptions, technologies, links }) => (
          <PortfolioSection
            key={title}
            title={title}
            logo={logo}
            descriptions={descriptions}
            color={color}
            technologies={technologies}
            links={links}
          />
        )
      )}
    </Layout>
  );
};

export default Homepage;
