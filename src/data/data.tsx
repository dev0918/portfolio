import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/21.jpeg';

import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/dev_img.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Devanshu Portfolio',
  description: "Example site built with Devanshu Kumar react resume template",

};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Devanshu Kumar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm <strong className="text-stone-100">Devanshu Kumar</strong>, currently working at 
        <strong className="text-stone-100"> Clarivate</strong> as a Senior Software Engineer. 
        I have over <strong className="text-stone-100">5 years of professional experience</strong> 
        building scalable backend systems and data pipelines. My expertise includes 
        <strong className="text-stone-100"> Python, SQL, PostgreSQL, and data processing</strong>, 
        along with experience in distributed systems and cloud-based workflows.
      </p>
      
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am passionate about continuous learning and growth, especially in the fields of 
        <strong className="text-stone-100"> Artificial Intelligence and Data Science</strong>. 
        I enjoy exploring new technologies and building data-driven solutions that improve 
        system performance and reliability.
      </p>
      
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy <strong className="text-stone-100">web scraping</strong>, 
        experimenting with <strong className="text-stone-100">new technologies</strong>, and 
        learning about emerging tools and frameworks. With a strong interest in data science, 
        I aim to leverage technology to solve real-world problems and build impactful solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1bsPTI79H8_d_Z2j5EGVsSL6iEEvCO_Xg/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Senior Software Engineer with 4+ years of experience building scalable backend systems and data pipelines. I specialize in Python, SQL, PostgreSQL, and distributed data processing, with hands-on experience in developing reliable and efficient data-driven applications.

I am passionate about learning new technologies and exploring advancements in Artificial Intelligence and Data Science. I enjoy solving complex problems, optimizing data workflows, and building systems that improve performance and scalability.

Outside of work, I like experimenting with web scraping, exploring emerging technologies, and continuously expanding my knowledge to build impactful real-world solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Noida, India', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Motorcycles', Icon: SparklesIcon},
    {label: 'Study', text: 'Chandigarh University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Clarivate', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Java Script',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'Flask',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  
  {
    title: 'Project 1 : Sun Tracking system',
    description: "Objective of this project is to get the maximum efficiency for the solar cells. In this we used a servo motor at the base of the solar panel to provide the motion by which it can move in all directions to track the sunlight and store the maximum energy",
    image: porfolioImage2,
    url: ''
  },
  {
    title: 'Project 2 : Fire Sensor',
    description: "The objective of this project is to sense the flame and pump the water to the direction of flame. In this 3 L.D.R. sensor for sensing the flame were used. The vehicle will move if it senses the flame into its range and pumps the water to the flame.",
    image: porfolioImage9,
    url: ''
  },
  {
    title: 'Project 3 : Bluetooth Messaging Application',
    description: "This is a Messenger Application which can be used to Communicate between two people with messages, images, and videos with the help of Bluetooth Connectivity within the Bluetooth range.",
    image: porfolioImage4,
    url: ''
  },
  {
    title: 'Project 4 :COVID-19 Data Analysis',
    description: "Performed Data Mining and Data research on Covid-19 Dataset. After that visualised the trends, insights and performed Feature Engineering ",
    image: porfolioImage5,
    url: ''
  },
  {
    title: 'Project 5 : Scrapping of google news',
    description: "In this project I scraped the data from 'https://news.google.com/' and transforming it into the sheet of respective date.",
    image: porfolioImage7,
    url: 'https://github.com/dev0918/Latest_Google_News'
  },
  {
    title: 'Project 6 : Emotion, Age and Gender Detection',
    description: "This machine learning model was trained to detect the gender and age of the user. The objective was to determine the emotion of the person, for this purpose a deep learning model was trained.",
    image: porfolioImage8,
    url: 'https://github.com/dev0918/Age_Gender_detection'
  },
  {
    title: 'Project 7 : Movie Recommendation System',
    description: 'This recommendation system is a type of information filtering system that makes suggestions based on user preferences and makes an effort to forecast the preferences of the user. The aim of the project is to improve the quality of the film recommendation system, such as the accuracy, quality and scalability of the system compared to pure approaches. This is done using a hybrid approach that combines content-based filtering and collaborative filtering.',
    image: porfolioImage10,
    url: 'https://github.com/dev0918/movie_recommendation_system'
  },
  {
    title: 'Project 8 : Created my Portfolio',
    description: "This is my portfolio page that has been created by myself in React.js",
    image: porfolioImage11,
    url: 'https://github.com/dev0918/portfolio'
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021',
    location: 'Chandigarh University, Mohali',
    title: 'Masters of Computer Application in Artificial Intelligence & Machine Learning',
    content: <p></p>,
  },
  {
    date: 'July 2018',
    location: 'Dayalbagh Educational Institute, Agra',
    title: "Bachelor's of Vocation in Robotics & Artificial Intelligence",
    content: <p>{/*Describe your experience at school, what you learned, what useful skills you have acquired etc.*/}</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2023 - Present',
    location: 'Noida, India',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Designed and developed a monitoring platform from scratch to log, monitor, and track the real-time status of Kubernetes services and connected applications, enhancing system observability and operational efficiency.
      </p>
    ),
  },
  {
    date: 'May 2022 - Sep 2023',
    location: 'Betasource Tech',
    title: 'Python Developer',
    content: (
      <p>
        My work is to scrape the data from different web pages as asked by the organization. Some of the pages are : https://www.cbp.gov , https://www.freightnet.com/ 
      </p>
    ),
  },
  {
    date: 'January 2021 - April 2022',
    location: 'Runnel.AI',
    title: 'DevOps Engineer',
    content: (
      <p>
        Developed a product from scratch which was used to logging, monitor and check the live status of the Kubernetes services and connected apps.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Devanshu Kumar',
      text: "I'm very passionate about being able to help people by automating their work that they have to do on daily basic. ",
      image: 'https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg',
    },
    {
      name: 'Dr. APJ Abdul Kalam',
      text: 'Do not wait for something big to happen. Start where you are with whatever you have. ',
      image: 'https://www.shutterstock.com/image-illustration/dr-apj-abdul-kalam-portrait-600nw-2310267175.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'devanshu26mgr@gmail.com',
      href: 'mailto:devanshu26mgr@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Noida, India',
      href: 'https://goo.gl/maps/Nozy3G6ZhqCP7PCH6',
    },
    {
      type: ContactType.Github,
      text: 'dev0918',
      href: 'https://github.com/dev0918',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dev0918'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/devanshumgr/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/dev0918_'},
];
