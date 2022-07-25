import { IoLogoInstagram, IoMailOutline, IoCallOutline } from 'react-icons/io5';

export const contacts = [
    {
        id: 1,
        label: 'Instagram',
        href: 'https://www.instagram.com/bukittcamino/',
        icon: IoLogoInstagram,
    },
    {
        id: 2,
        label: 'Phone',
        href: 'tel:3059986034',
        icon: IoCallOutline,
    },
    {
        id: 3,
        label: 'Mail',
        href: 'mailto:hello@bukitt.com',
        icon: IoMailOutline,
    },
];

//    <a
//                             href="https://www.instagram.com/bukittcamino/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <IoLogoInstagram className="h-12 w-12 rounded-full bg-stone-50 p-2" />
//                         </a>
//                         <a
//                             href="https://www.instagram.com/bukittcamino/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <IoMailOutline className="h-12 w-12 rounded-full bg-stone-50 p-2" />
//                         </a>
//                         <a>
//                             <IoCallOutline className="h-12 w-12 rounded-full bg-stone-50 p-2" />
//                         </a>
