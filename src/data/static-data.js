import Projects from "../models/projects";
import imgOne from '../../public/odd-neon.jpeg';
import imgTwo from '../../public/s-weird.jpeg';
import imgThree from '../../public/run-us.jpeg';


/*-----------------------------
 *   Projects Data               *
 -----------------------------*/ 
export const PROJECTS = [
    new Projects('800', 'iShootCoral', 'https://github.com/Lambit/IShootCoral','Photography App • React Native' ),
    new Projects('801', "Dean's List", 'https://github.com/Lambit/deans-list-frontend', 'Ecommerce • React • Node.js • Heroku' ),
    new Projects('802', 'PlanIt Eats', 'https://github.com/Lambit/PlanItEatsApp', 'Ecommerce • React Native • Firebase' ),
    new Projects('802', 'Find A Hero', 'https://github.com/Lambit/superhero-app', 'Social • Python • Flask' ),
];

/*-----------------------------
 *   Carousel Images          *
 -----------------------------*/ 
export const CAROL_IMGS = [imgOne, imgTwo, imgThree];
