import ITestimonial from "@/interfaces/ITestimonial";
import { availableLanguages } from "@/interfaces/languages";

const testimonials: { [key: string]: ITestimonial[] } = {
    [availableLanguages["en-US"]]: [
        {
            testimonial:
                "The Van Veen Institute gave me the freedom to improve my professional skills and showed me the importance of knowledge.\n\nVan Veen was the foundation for new achievements and opportunities. At the age of 23, I was accepted into two Dutch universities with scholarships! Anything is possible with dedication and discipline! DREAM ON PEOPLE",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/Mayara-Ribeiro-Palmeira-300x300.jpg",
            },
            user: "Mayara Ribeiro - Hogeschool Utrecht - Netherlands",
        },
        {
            testimonial:
                "It is a pleasure to write this brief statement endorsing the Van Veen Institute while inviting you to support and be part of this initiative. As a student and former volunteer, I am happy and proud to know that we have such an extraordinary initiative in Brazil that has positively impacted students and their families' lives. Additionally, I would like to express my gratitude to Mr. Nicolas Van Veen, who, in my opinion, is a brilliant and hardworking entrepreneur.",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/alisson.jpeg",
            },
            user: "Alisson Brito - Coventry University - England",
        },
        {
            testimonial:
                "I am writing this testimonial from my new office at MIT. I encourage everyone to consider continuing their education at top universities. Once you have a plan, dedicate yourself seriously and believe in your potential.",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/20190430_081154-300x300.jpg",
            },
            user: "Diogo Castilho - MIT - USA",
        },
        {
            testimonial:
                "Life has taught me that anything is possible, even the impossible. I never imagined studying abroad, and now I am heading to Russia with a 100% scholarship at the Siberian State Academy of Arts. I am grateful to the Van Veen Institute and especially to Professor Nicolas Van Veen for guiding me through the entire process. Always believe in the best version of yourself!",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/nicolas-300x300.jpeg",
            },
            user: "Nicolas Roque - Siberian State Academy of Arts - Russia",
        },
        {
            testimonial:
                "Hello, my name is Rebeca, and I met Nicolas Van Veen and the Institute in 2016. I was surprised when he told me and many other public school students that studying at an international university was a dream worth pursuing! From there, I gained an amazing mentor who challenged me in every class to know myself and a place that encouraged me to explore the world around me. Moreover, it was at the Institute that I had the opportunity to deepen my understanding of Russian culture. Now I am moving forward with my application, having already received a scholarship from the Rossotrudnichestvo agency, to this country that has captivated me!",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/Rebeca-300x300.jpg",
            },
            user: "Rebeca Peres - National Research University Higher School of Economics - Russia",
        },
    ],
    [availableLanguages["pt-BR"]]: [
        {
            testimonial: `O Instituto Van Veen me deu liberdade para aprimorar minhas habilidades profissionais e me mostrou a importância do conhecimento.\n\nO Van Veen foi a base para novas conquistas e oportunidades. Com 23 anos fui aprovada em duas universidades holandesas com bolsa de estudos! Tudo é possível com dedicação e disciplina! DREAM ON PEOPLE`,
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/Mayara-Ribeiro-Palmeira-300x300.jpg",
            },
            user: "Mayara Ribeiro - Hogeschool Utrecht - Holanda",
        },
        {
            testimonial:
                "É um prazer escrever esta breve declaração atestando o Instituto Van Veen e, ao mesmo tempo, convidá-lo a apoiar e fazer parte desta iniciativa. Como aluno e também ex-voluntário, estou feliz e orgulhoso de saber que temos uma iniciativa tão extraordinária no Brasil que tem impactado positivamente os estudantes e a vida de suas famílias. Além disso, gostaria de expressar minha gratidão ao Sr. Nicolas Van Veen que, na minha opinião, é um empreendedor brilhante e trabalhador.",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/alisson.jpeg",
            },
            user: "Alisson Brito - Coventry University - Inglaterra",
        },
        {
            testimonial:
                "Escrevo esse depoimento aqui na minha nova sala no MIT. Encorajo a todos que considerem a continuação de sua formação em universidades de referência. Assim que tiverem um plano, dedique-se seriamente e acreditem em seu potencial.",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/20190430_081154-300x300.jpg",
            },
            user: "Diogo Castilho - MIT - EUA",
        },
        {
            testimonial:
                "A vida tem me ensinado que tudo é possível, até mesmo o impossível. Nunca imaginei que estudaria no exterior e agora estou indo para Rússia com 100% de bolsa na Siberian State Academy of Arts. Agradeço ao Instituto Van Veen e principalmente ao professor Nicolas Van Veen por ter me guiado durante todo o processo. Sempre acredite na sua melhor versão!",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/nicolas-300x300.jpeg",
            },
            user: "Nicolas Roque - Siberian State Academy of Arts - Rússia",
        },
        {
            testimonial:
                "Olá, meu nome é Rebeca e eu conheci o Nicolas Van Veen e o Instituto em 2016. Surpreendi-me quando ele disse para mim e mais um tanto de alunos de escolas públicas que estudar em uma universidade internacional era um sonho que valia a pena perseguir! A partir daí, eu ganhei um mentor incrível que me desafiava a cada aula a conhecer a mim mesma e um lugar que me instigava a explorar o mundo ao meu redor. Além do mais, foi no Instituto que eu tive a oportunidade de me aprofundar na cultura da Rússia e agora sigo com minha aplicação, após já ter ganho a bolsa da agência Rossotrudnichestvo, para esse país que me cativou!",
            upload: {
                link: "https://van-veen.s3.sa-east-1.amazonaws.com/van-veen-website/alumni/Rebeca-300x300.jpg",
            },
            user: "Rebeca Peres - National Research University Higher School of Economics - Rússia",
        },
    ],
};

export default testimonials;
