import Icon from "@mdi/react";
import {mdiFacebook, mdiInstagram, mdiYoutube, mdiShare} from "@mdi/js";
import {icons} from "../../assets";

export default function SocialCounter() {
  const socials = [
    {icon: mdiFacebook, name: 'Seguidores', url: '', background: 'bg-[#4267B2]', counter: '1k'},
    {icon: mdiInstagram, name: 'Seguidores', url: '', background: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500', counter: '1k'},
    {icon: icons.icTwitterX, name: 'Seguidores', url: '', background: 'bg-black', counter: '1k', local: true},
    {icon: mdiYoutube, name: 'Suscriptores', url: '', background: 'bg-[#FF0000]', counter: '1k'},
    {icon: icons.icGithub, name: 'Seguidores', url: '', background: 'bg-black', counter: '1k', local: true},
    {icon: mdiShare, name: 'Seguidores', url: '', background: 'bg-brand-dark', counter: '6k'},
  ]

  return (
    <div className="w-full h-32 grid grid-cols-6">
      {socials.map((it, i) => (
        <div key={i} className={`transition duration-300 delay-75 ${socials.length - 1 !== i && 'opacity-50 hover:opacity-100'} flex justify-center items-center gap-3 cursor-pointer ${it.background}`}>
          {it.local ?
            <img className="w-16 h-16" src={it.icon} alt={it.name} /> :
            <Icon className="w-20 h-20" path={it.icon} title={it.name} />
          }
          <div>
            <h6 className="text-5xl font-black">{it.counter}</h6>
            <p className="text-gray-200">{it.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
