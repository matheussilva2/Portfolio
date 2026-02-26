export interface Project {
    title: string;
    image_url: string[];
    description: string;
    tags: string[];
}

export const PROJECTS: Project[] = [
    {
        title: "Everconte",
        image_url: [
            "/images/projects/everconte/everconte-1.png",
            "/images/projects/everconte/everconte-2.png",
            "/images/projects/everconte/everconte-3.png",
            "/images/projects/everconte/everconte-4.png",
            "/images/projects/everconte/everconte-5.png",
        ],
        description: "Plataforma para automação de publicações em redes sociais em geral.",
        tags: ["NextJs", "ReactJs", "HeroUI", "TailwindCSS", "Google Cloud"]
    },
    {
        title: "Dowcenter",
        image_url: [
            "/images/projects/dowcenter/dowcenter-1.png",
            "/images/projects/dowcenter/dowcenter-2.png",
            "/images/projects/dowcenter/dowcenter-3.png",
            "/images/projects/dowcenter/dowcenter-4.png"
        ],
        description: "Landing page para marketing place de produtos de design.",
        tags: ["NextJs", "ReactJs", "HeroUI", "TailwindCSS"]
    },
    {
        title: "UDOIS",
        image_url: [
            "/images/projects/udois/udois-1.png",
        ],
        description: "Marketing place de artes (convite de festa, topo de bolo, cartão de visita...) com artes personalizáveis através de um editor online.",
        tags: ["Laravel", "JQuery", "Bootstrap", "Google Cloud Platform", "MySQL", "Docker"]
    },
];