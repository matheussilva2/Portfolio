export interface Experience {
    title: string;
    description: string;
    location: string;
    schedule: string;
}

export const EXPERIENCES: Experience[] = [
    {
        title: "Desenvolvedor Web Fullstack - Freelancer",
        description: "Atualmente estou trabalhando em projetos freelancer, analisando o contexto e demanda dos clientes para orientar o melhor projeto possível.",
        location: "Remoto",
        schedule: "Tempo Integral"
    },
    {
        title: "Desenvolvedor Web Fullstack - GeraUp Tecnologia",
            description: `
                Na GeraUp fui responsável por cuidar de produtos existentes e desenvolvimento de novos projetos que estavam para entrar na etapa de desenvolvimento (após passar a etapa de análise de mercado).

                Desenvolvi um projeto de marketplace de recursos artísticos (ex.: arte para sublimação) feito em ReactJs, NestJs, TailwindCSS e com deploy no Google Cloud Run.

                Programei novos recursos para um painel que centraliza a comunicação de suporte ao cliente de todos os produtos da GeraUp. Foi usado AngularJs, NestJs, ElasticUI e Socket para comunicação do chat em tempo real dos clientes nos sites dos produtos e o painel.

                Gerenciei a implantação e a infraestrutura na Google Cloud Platform, assegurando performance e escalabilidade.
        `,
        location: "Remoto",
        schedule: "Tempo Integral"
    },
    {
        title: "Desenvolvedor Web Front-end - Magnetis Investimentos",
        description: `
            Na Magnetis desenvolvi páginas para o site do aplicativo de investimentos. Fiz landing pages para as campanhas de marketing e atualizações na página institucional.

            Para o desenvolvimento das páginas foi utilizado ReactJs junto de uma framework CSS própria. Trabalhei em equipe que utiliza Scrumban como metodologia de gestão.
        `,
        location: "Remoto",
        schedule: "Tempo Integral"
    },
    {
        title: "Desenvolvedor Web Fullstack - UDOIS",
        description: `
            No produto Udois fui responsável por manter o funcionamento do projeto e adicionar novas funcionalidades. Neste projeto trabalhei com Laravel, JQuery, BootstrapCSS e Google Cloud.

            Atuei também com resolução de problemas sendo o mais complexo uma grande otimização de um produto que estava transicionando do MVP, chegando a reduzir 40% de custos de cloud com várias otimizações.

            Nesta mesma experiência desenvolvi um projeto em Node/Express e Angular para um sistema de criação de rifas.
        `,
        location: "Remoto",
        schedule: "Tempo Integral"
    },
    {
        title: "Desenvolvedor Web Fullstack - Freelancer",
        description: `
            Desenvolvi sites utilizando PHP e tecnologias de front-end, atendendo a diversas demandas de clientes.
        `,
        location: "Remoto",
        schedule: "Tempo Integral"
    },
];