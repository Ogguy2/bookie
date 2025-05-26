import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function page() {
  const getRandomInt1To10 = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  const citations: Record<string, string>[] = [
    {
      auteur: "Marcel Proust",
      texte:
        "La lecture, au sens plein du terme, c’est-à-dire la lecture qui nous révèle, qui nous éclaire sur nous-mêmes, ce n’est pas une évasion, mais une découverte. Lire, c’est une rencontre avec soi.",
    },
    {
      auteur: "Victor Hugo",
      texte:
        "Apprendre à lire, c’est allumer un feu ; chaque syllabe épelée étincelle. Il n’est rien de plus puissant qu’une âme qui s’éveille à travers les mots.",
    },
    {
      auteur: "Umberto Eco",
      texte:
        "Les livres ne sont pas faits pour être crus, mais pour être soumis à l’examen. Devant un livre, nous devons nous poser la question non de ce qu’il dit, mais de ce qu’il veut dire.",
    },
    {
      auteur: "Albert Camus",
      texte:
        "La lecture, comme l’amitié, demande un effort d’âme. C’est un acte de fidélité, un apprentissage du silence, une manière de tenir la main d’un inconnu à travers les siècles.",
    },
    {
      auteur: "Jorge Luis Borges",
      texte:
        "Je me suis toujours imaginé que le paradis serait une sorte de bibliothèque. Chaque livre que l’on ouvre est une porte, et chaque page est un monde.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen">
      <div className="hidden  bg-[url(/images/login.jpg)] bg-center bg-cover lg:flex justify-around items-center">
        <div className="bg-white rounded-lg max-w-[500px] px-8 py-8 space-y-5">
          <div className="text-justify italic">
            « La lecture, au sens plein du terme, c’est-à-dire la lecture qui nous révèle, qui nous éclaire sur nous-mêmes, ce n’est pas une évasion, mais une
            découverte. Lire, c’est une rencontre avec soi. »
          </div>
          <div>
            <span className="">Marcel Proust</span>-<span className="font-bold"> À la recherche du temps perdu</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[400px]  mx-auto space-y-10">
          {/* LOGO */}
          <div>
            <Logo size="sm" />
            <div>Acheter vos livre au meilleur prix !!</div>
          </div>
          
          {/* FORM */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="">Adresse email</div>
              <div>
                <input
                  className="border border-gray-300 shadow w-full focus:ring-gray-400 p-2 rounded-lg"
                  type="text"
                  name="email"
                  placeholder="email@service.com"
                  id=""
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="">Mot de passe</div>
              <div>
                <input
                  className="border border-gray-300 shadow w-full focus:ring-gray-400 p-2 rounded-lg  "
                  type="password"
                  name="password"
                  placeholder="password"
                  id=""
                />
              </div>
            </div>
          </div>
          
          <div>
            <button className="w-full p-2 bg-primary text-white rounded-lg cursor-pointer font-bold">Se connecter</button>
          </div>
          <div className="relative">
            <span className="absolute left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white px-4 ">OU</span>
            <hr className="border-gray-400" />
          </div>
          {/* SOCIAL CONNECTION */}
          <div className="">
            <button className="cursor-pointer rounded-lg p-2 border flex justify-center items-center gap-3 border-gray-300 shadow w-full">
              <Icon size="sm">
                <FcGoogle />
              </Icon>
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
