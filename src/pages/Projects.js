import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import GameCMSImage from '../img/gameForDays.jpeg.png';
import FocusImage from '../img/focus.png';
import CampusPlace from '../img/allthree.jpeg.png';

//wanted to create something visually pleasing so I thought to add some movement, therefore I needed to create a variable.
//      {project.features.map((feature, i) => (
    // <li key={i}>• {feature}</li>
// ))}

const projects = [
    {
        title: 'Game Review CMS',
        type: 'Web Development / Full-Stack',
        languages: 'HTML, CSS, PHP, MySQL, XML',
        tools: 'Visual Studio Code, GitHub, PuTTY',
        description: 'This full-stack project is a dynamic CMS (Content Management System) for a game review platform that includes user logins, comment management, and XML syndication.',
        features: [
        'Commenting System: Logged-in users can leave comments on reviews. If not logged in, users can still read reviews/comments.',
        'RSS/XML Feed: When a review is added, its details are appended to an XML file and database to support RSS subscriptions.'
        ],
        link: 'https://students.gaim.ucf.edu/~ma870514/dig3134c/assignment05/login.php',
        image: GameCMSImage,
    },
    {
        title: 'Focus - High-Fidelity Design',
        type: 'Website UX/UI Design',
        languages: 'N/A',
        tools: 'Figma',
        description: 'For this project, my team developed three high-fidelity design options for FOCUS, an app created to support students with their academic goals, career planning, and personal development. Each version focused on a different look and feel, allowing me to explore how visual design impacts user experience. Prior to this, we completed market research, defined users and their tasks, developed the information architecture, navigation, and search systems, identified the technology target, and evaluated designs through user testing.',
        features: [
          'This project helped me connect visual design choices with actual user needs. By involving users in the decision-making process and translating their feedback into a consistent prototype, I learned how to build interfaces that are not just visually appealing but also practical and user centered.'
        ],
        link: 'https://www.figma.com/proto/lZyKo4mHcSfMBKT44fc3PN/Figma-Lab---Learn-to-use-a-UX-UI-prototyping-tool?node-id=77-12&t=PwemDJtUs2e5l0Vj-0&scaling=scale-down&content-scaling=fixed&page-id=77%3A11&starting-point-node-id=77%3A12',
        image: FocusImage,
      },
      {
        title: 'Campus Place - Mobile Product Design',
        type: 'Mobile UX/UI Design',
        languages: 'N/A',
        tools: 'Figma',
        description: 'For this project, I designed Campus Place, a mobile app prototype that allows students to share and discover local spots around UCF Main and Downtown campuses. The app combines user-generated reviews, recommendations, and social media-style interactions, making it easier for students to find places to study, eat, or hang out. Users can post hidden gems, leave comments, give ratings, and save favorite spots for later. The process began with brainstorming features and laying out key screens like the home feed and user profile. I selected a color palette that felt friendly and vibrant, reflecting student life. After researching local places and sketching ideas, I created an initial prototype. Based on user feedback, I revised the design and developed a more refined version that focused on improving navigation, visual hierarchy, and engagement features.',
        features: [
            'Helps UCF students share and discover local study spots and hangouts.',
            'User-friendly UI with a social-media feel, created based on user testing.'
          ],
        link: 'https://www.figma.com/design/sWygSEu4tg6cB66kyaMlFP/Project-4-Part-1-and-2--Mobile-Product-Design?node-id=0-1&p=f&t=8K07x173nU25V1qc-0',
        image: CampusPlace,
      }
  ];

  //map function was the best for this type of code, I learned a lot about it in my previous classes, plus earlier in the semester.
  //got some idea for motion from here:
  //https://motion.dev/

function Projects() {
  return (
    <div className="projectsPage">
      <h3 className='heading'>My Projects</h3>
      <p>Here are a few projects I've worked on recently that I am very proud of.</p>

      <div className="projectboxes">
      {projects.map((project, index) => (
        <motion.div
            key={index}
            className="projectCard"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }} >
            <img src={project.image} alt={project.title} />
            <h4 className='heading'>{project.title}</h4>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Languages:</strong> {project.languages}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            <p>{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
  </motion.div>
))}
</div>
</div>
);
}

export default Projects;