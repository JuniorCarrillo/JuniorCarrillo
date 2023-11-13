import React from 'react';
import Title from "../title";
import {icons} from "../../assets";

export default function Technologies() {
  const skills: Array<SkillItem> = [
    {
      name: 'GoLang',
      icon: icons.icGolang,
      description: 'Lenguaje',
      url: 'https://www.golang.org',
    },
    {
      name: 'Typescript',
      icon: icons.icTypescript,
      description: 'Lenguaje',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Swift',
      icon: icons.icSwift,
      description: 'Lenguaje',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Python',
      icon: icons.icPython,
      description: 'Lenguaje',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'ReactJS',
      icon: icons.icReactjs,
      description: 'Framework',
      url: 'https://www.reactjs.org',
    },
    {
      name: 'VueJS',
      icon: icons.icVuejs,
      description: 'Framework',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Kotlin',
      icon: icons.icKotlin,
      description: 'Lenguaje',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Docker',
      icon: icons.icDocker,
      description: 'Aplicación',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Kubernetes',
      icon: icons.icKubernetes,
      description: 'Aplicación',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Git',
      icon: icons.icGit,
      description: 'Aplicación',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'Android',
      icon: icons.icAndroid,
      description: 'Sistema operativo',
      url: 'https://www.vuejs.org',
    },
    {
      name: 'iOS',
      icon: icons.icApple,
      description: 'Sistema operativo',
      url: 'https://www.vuejs.org',
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex col-span-4">
        <Title type="h2" title="Habilidades" description="Tecnologías, cursos y certificaciones" />
      </div>
      {skills.map((it, i) => (
        <div key={i} className="transition duration-300 delay-75 hover:text-brand-dark hover:bg-brand-accent bg-gray-900 p-4 grid grid-cols-3 gap-4 items-center rounded-md shadow cursor-pointer">
          <div className="w-full flex justify-center col-span-1">
            <img className="w-full" src={it.icon} alt={it.name} />
          </div>
          <div className="col-span-2">
            <h6 className="font-black text-xl">{it.name}</h6>
            <small className="truncate">{it.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
