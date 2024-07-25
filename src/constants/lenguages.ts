import scorpio from '../../public/assets/gifs/def.gif'
import laurete from '../../public/assets/gifs/laurete.gif'
import siste from '../../public/assets/gifs/siste.gif'
import email from '../../public/assets/images/email.svg'
import phone from '../../public/assets/images/phone.svg'
import whats from '../../public/assets/images/whats.svg'


export const english = {
    messageHome: {
        msg_1: 'Ulises I. Escobar',
        msg_2: 'Crafting Solutions, Ensuring Results'
    },
    specializations: "I specialize in",
    links: {
        link_0: {
            name: "Technology/Knowledge",
            link: "technologies"
        },
        link_1: {
            name: "About me",
            link: "about"
        },
        link_2: {
            name: "Experience",
            link: "experience"
        },
        link_3: {
            name: "Projects",
            link: "projects"
        },
        link_4: {
            name: "Contact",
            link: "contact"
        },
    },
    about: `Throughout my career, I have dedicated myself passionately to crafting innovative solutions for both web and mobile platforms. My strong experience in developing interactive and functional applications has been pivotal in projects that not only enhance efficiency but also revolutionize user experience.

I have successfully applied agile frameworks and methodologies, tackling complex challenges with creativity and precision. My commitment to continuous learning drives me to stay updated with the latest trends and technologies in software development, ensuring that my skills remain at the forefront.

My goal is to continue contributing to the success of ambitious projects, leveraging my passion for technology and effective innovation.`
}

export const spanish = {
    messageHome: {
        msg_1: 'Ulises I. Escobar',
        msg_2: 'Creo tú Solución\n Garantizando Resultados'
    },
    specializations: "Me especializo en",
    links: {
        link_0: {
            name: "Tecnologias/Conocimientos",
            link: "tecnologias"
        },
        link_1: {
            name: "Sobre mí",
            link: "acerca"
        },
        link_2: {
            name: "Experiencia",
            link: "experiencia"
        },
        link_3: {
            name: "Proyectos",
            link: "proyectos"
        },
        link_4: {
            name: "Contacto",
            link: "contacto"
        },
    },
    about: `Hola mucho gusto, soy Ulises, antes que sigas leyendo te agradezco tu visita. :D
    
Durante mi carrera, me he dedicado apasionadamente a la creación de soluciones innovadoras tanto para web como para dispositivos móviles. Mi experiencia sólida en el desarrollo de aplicaciones interactivas y funcionales ha sido fundamental para proyectos que no solo mejoran la eficiencia, sino que también transforman la experiencia del usuario.

He aplicado frameworks y metodologías ágiles con éxito, enfrentando desafíos complejos con creatividad y precisión. Mi compromiso con el aprendizaje continuo me impulsa a mantenerme actualizado con las últimas tendencias y tecnologías en el desarrollo de software, asegurando así que mis habilidades estén siempre a la vanguardia.

Mi objetivo es seguir contribuyendo al éxito de proyectos ambiciosos, aprovechando mi pasión por la tecnología y mi habilidad para innovar de manera efectiva.`,

    projects: [
        {
            title: "Sistecrédito",
            description: "¿Necesitas un prestámo? Nosotros te ayudamos.",
            labels: ["Wordpress", "React", "CSS", "SEO"],
            gif: siste,
            link: "https://www.sistecredito.com/"
        },
        {
            title: "Laurette",
            description: "Sistema administrativo de universidades.",
            labels: ["React", "Django", "PostgreSQL", "Docker"],
            gif: laurete,
            link: false
        },
        {
            title: "Scorpio Industrial",
            description: "Corte de placa con pantógrafo.",
            labels: ["Next.js", "tailwind", "SEO"],
            gif: scorpio,
            link: "https://www.scorpioindustrial.mx/"
        },
    ],

    contact: {
        description: `¿Tienes alguna pregunta, quiéres contactarme, o tal vez solo quieres pasar mi contacto?

¡Presiona cualquiera de los iconos que aparecen abajo!
`,
        contacts: [
            {
                image: whats,
                message: '¡Mándame un Whatsapp!',
                link: "https://wa.me/525610140710?text=Hola%20estoy%20interesado%20en%20saber%20más%20de%20tú%20trabajo.",
            },
            {
                image: phone,
                message: '¡Llámame, para una comunicación más rápida!',
                link: "tel:+525610140710",
            },
            {
                image: email,
                message: '¡Descríbeme los mensajes con un correo!',
                link: "mailto:uliescodi@gmail.com?Subject=Interesado%20en%20saber%20m'as%20de%20tú%20trabajo.",
            }]
    }
}