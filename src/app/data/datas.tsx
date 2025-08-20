import { BookProps } from "./typeDatas";

interface HomeSectonDataProps {
  title: string;
  link: string;
  data: BookProps[];
}
export const selfDevelopment: HomeSectonDataProps = {
  title: "Self-development",
  link: "/book-genre/" + "Self-development",
  data: [
    {
      image:
        "https://images.unsplash.com/photo-1543878636-41918458581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8dG95c3xlbnwxfHx8fDE2ODU5NzY5MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,
      price: "12",
      new: true,
      resume:
        "Un jeune homme découvre une clé ancienne dans un vieux grenier. Cette clé va l’entraîner dans une aventure spirituelle et personnelle où il affrontera ses peurs, ses doutes et ses désirs les plus profonds. Ce livre explore le pouvoir des rêves, la destinée, et le courage d’aller au bout de soi-même.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxkZXRlY3RpdmV8ZW58MXx8fHwxNjg1OTc3MDY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,
      price: "12",
      new: true,
      resume:
        "Dans cette suite palpitante, le héros poursuit sa quête pour comprendre le secret des alchimistes. Il traverse des mondes parallèles, rencontre des sages et découvre la véritable nature de la transformation intérieure. Ce livre nous pousse à réfléchir sur notre propre cheminement vers la sagesse et l’accomplissement.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616429553139-cfb41803dcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxjYXQlMjB8ZW58MXx8fHwxNjg1OTIzMzk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Forgotten Forrest",
      author: "Robert Lawson",
      price: "12",
      new: false,
      reduction: 3,
      resume:
        "Perdu dans une forêt oubliée, un jeune garçon découvre un royaume secret peuplé de créatures fantastiques. Mais ce monde est en danger, et lui seul détient la clé pour le sauver. Un conte initiatique sur le courage, la nature, et la capacité de chaque enfant à faire une différence dans le monde.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633123476598-243aac24d2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2N3x8ZG9nJTIwYW5kJTIwY2hpbGR8ZW58MXx8fHwxNjg1OTc3MDQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Forgotten Forrest",
      author: "Robert Lawson",
      price: "12",
      new: false,
      reduction: 0,
      resume:
        "Une fille curieuse suit son chien dans une forêt mystérieuse. Ce qu'elle y découvre changera à jamais sa vision du monde. Les secrets anciens, les esprits de la nature, et le poids des choix passés se dévoilent peu à peu. Un récit magique qui mêle nature, émotion et aventure personnelle.",
    },
  ],
};

export const litleReaders: HomeSectonDataProps = {
  title: "Little readers",
  link: "/book-genre/" + "Little readers",
  data: [
    {
      image:
        "https://images.unsplash.com/photo-1543878636-41918458581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8dG95c3xlbnwxfHx8fDE2ODU5NzY5MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,

      price: "12",
      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxkZXRlY3RpdmV8ZW58MXx8fHwxNjg1OTc3MDY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,

      price: "12",
      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1616429553139-cfb41803dcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxjYXQlMjB8ZW58MXx8fHwxNjg1OTIzMzk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Forgotten Forrest",
      author: "Robert Lawson",
      price: "12",
      new: false,
      reduction: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633123476598-243aac24d2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2N3x8ZG9nJTIwYW5kJTIwY2hpbGR8ZW58MXx8fHwxNjg1OTc3MDQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Forgotten Forrest",
      author: "Robert Lawson",
      price: "12",
      new: false,
      reduction: 0,
    },
  ],
};

export const bestSellers: HomeSectonDataProps = {
  title: "Best Sellers",
  link: "/book-genre/" + "Best Sellers",
  data: [
    {
      image:
        "https://images.unsplash.com/photo-1635070040809-d434392ae756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxM3x8cXVhbnR1bXxlbnwxfHx8fDE2ODU5NzgwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      price: "12",
      reduction: 0,

      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1519658422992-0c8495f08389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxMTJ8fG9yYW5nZXxlbnwxfHx8fDE2ODU5ODA3MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      reduction: 0,

      author: "Michael Andreson",
      price: "12",
      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1602752975366-5520991f958d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxN3x8d2F0Y2h8ZW58MXx8fHwxNjg1OTc4MTA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,

      price: "12",
      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1561072367-34d4167ab722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1MDl8fG9yYW5nZXxlbnwxfHx8fDE2ODU5OTE0NDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      price: "12",
      reduction: 0,

      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1591055749071-927e6ddffc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw4fHxiaXJkfGVufDF8fHx8MTY4NTk3ODE1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      reduction: 0,
      price: "12",
      new: true,
    },
  ],
};
