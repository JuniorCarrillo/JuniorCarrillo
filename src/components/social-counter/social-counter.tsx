import Icon from "@mdi/react";
import {mdiFacebook, mdiInstagram, mdiYoutube, mdiShare} from "@mdi/js";
import {icons} from "../../assets";
import env from "../../env";

export default function SocialCounter() {
  const socials = [
    {icon: mdiFacebook, name: 'Seguidores', url: env.REACT_APP_FACEBOOK_LINK, background: 'bg-[#4267B2]', counter: '1k'},
    {icon: mdiInstagram, name: 'Seguidores', url: env.REACT_APP_INSTAGRAM_LINK, background: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500', counter: '1k'},
    {icon: icons.icTwitterX, name: 'Seguidores', url: env.REACT_APP_TWITTER_LINK, background: 'bg-black', counter: '1k', local: true},
    {icon: icons.icGithub, name: 'Seguidores', url: env.REACT_APP_GITHUB_LINK, background: 'bg-black', counter: '1k', local: true},
    {icon: mdiYoutube, name: 'Suscriptores', url: env.REACT_APP_YOUTUBE_LINK, background: 'bg-[#FF0000]', counter: '1k'},
    {icon: mdiShare, name: 'Seguidores', url: '/social', background: 'bg-brand-dark', counter: '6k', disableNewTab: true},
  ]

  return (
    <div className="w-full h-32 grid grid-cols-6">
      {socials.map((it, i) => (
        <a rel="noreferrer" href={it.url} target={it.disableNewTab ? '_self' : '_blank'} key={i} className={`transition duration-300 delay-75 ${socials.length - 1 !== i && 'opacity-50 hover:opacity-100'} flex justify-center items-center gap-3 cursor-pointer ${it.background}`}>
          {it.local ?
            <img className="w-16 h-16" src={it.icon} alt={it.name} /> :
            <Icon className="w-20 h-20" path={it.icon} title={it.name} />
          }
          <div>
            <h6 className="text-5xl font-black">{it.counter}</h6>
            <p className="text-gray-200">{it.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
