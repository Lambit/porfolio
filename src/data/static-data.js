import Projects from "../models/projects";
import Icons from "../models/icons";
import About from "../models/about";
import { GitHoob,Linkdin, Twit, PdRez } from "../animations/svg/LogosAndIcons";
import imgOne from '../../public/projects/i-shoot/home.png';
import imgTwo from '../../public/projects/i-shoot/about.png';
import imgThree from '../../public/projects/i-shoot/sps.png';
import imgFour from '../../public/projects/i-shoot/select-book.png';

import eatOne from '../../public/projects/p-eat/home.png';
import eatTwo from '../../public/projects/p-eat/form.png';
import eatThree from '../../public/projects/p-eat/item.png';

import think from '../../public/aliens/think.png';
import hey from '../../public/aliens/a-contact.png';


/*-----------------------------
 *   Projects Data               *
 -----------------------------*/ 
export const PROJECTS = [
    new Projects('800', 'iShootCoral', [imgOne, imgTwo, imgThree, imgFour], 'https://github.com/Lambit/IShootCoral','Photography App • React Native' ),
    new Projects('801', "Dean's List", [hey ], 'https://github.com/Lambit/deans-list-frontend', 'Ecommerce • React • Node.js • Heroku' ),
    new Projects('802', 'PlanIt Eats', [eatOne, eatTwo, eatThree], 'https://github.com/Lambit/PlanItEatsApp', 'Ecommerce • React Native • Firebase' ),
    new Projects('803', 'Find A Hero', [think], 'https://github.com/Lambit/superhero-app', 'Social • Python • Flask' ),
];

/*-----------------------------
 *   Icon Data               *
 -----------------------------*/ 
export const ICONS = [
    new Icons('t1', <Twit width={'100px'} height={'100px'}/>, <Twit width={'50px'} height={'50px'} />,'https://twitter.com/Lucas_Lydon'),
    new Icons('t2', <Linkdin width={'100px'} height={'100px'}/>, <Linkdin width={'50px'} height={'50px'} />, 'https://www.linkedin.com/in/lucas-lambert-5748601ab/' ),
    new Icons('t3', <GitHoob width={'100px'} height={'100px'}/>, <GitHoob width={'50px'} height={'50px'} />, 'https://github.com/Lambit/'),
    new Icons('t4', <PdRez width={'100px'} height={'100px'}/>, <PdRez width={'50px'} height={'50px'} />, 'https://docs.google.com/document/d/1kUhr7ugqJOuP3mIPFDuvEOnHx3iJrtbDVLykUmxF7bw/edit?usp=sharing' ),
];
/*-----------------------------
 *   Icon Data               *
 -----------------------------*/ 
export const ABOUT_DATA = [
    new About('a1', 'Education', 
        { title:'Bachelors Degree in Audio Engineering', school:'New England Institute of Art', date:'2010-2013'},
        { title:'Software Engineering Certificate', school:'Springboard Academy', date:'2021-2022'},
        { title:'React Native Advanced Topics', school:'Udemy Academy', date:'2023'},
        { title:'React Native A Practical Guide', school:'Udemy Academy', date:'2023'},),
    new About('a2', 'Experience', 
        { title:'Full Stack Developer', school:'Custom templates', date:'Server integration'},
        { title:'Object Oriented Programming', school:'Strong handle on data structures', date:'Experience various types'},
        { title:'SQL & NoSQL Database', school:'PostgeSQL SQLite', date:'Realm & Firebase'},
        { title:'Full CRUD API Architecture', school:'Platform Specific Code', date:'Experience with web, iOS & Android'},),
    new About('a3', 'Skills', 
        { title:'Javascript', school:'React.js', date:'Next.js'},
        { title:'Mobile Development', school:'React Native', date:'Swift & Java'},
        { title:'Database', school:'Architecture & Maintenance', date:'Navigation & Queries'},
        { title:'Adobe Products', school:'Adobe XD', date:'Photoshop & Lightroom'},),

];

