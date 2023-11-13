import {useTranslation} from "react-i18next";
import {icons} from "../../assets";
import env from "../../env";

export default function Author() {
  const { t } = useTranslation();

  const social_networks = [
    {name: 'Facebook', link: env.FACEBOOK_LINK, icon: icons.icFacebook},
    {name: 'Instagram', link: env.INSTAGRAM_LINK, icon: icons.icInstagram},
    {name: 'Twitter X', link: env.TWITTER_LINK, icon: icons.icTwitterX},
    {name: 'GitHub', link: env.GITHUB_LINK, icon: icons.icGithub},
    {name: 'WhatsApp', link: env.WHATSAPP_LINK, icon: icons.icWhatsapp},
    {name: 'Telegram', link: env.TELEGRAM_LINK, icon: icons.icTelegram}
  ]

  return (
    <div className="max-w-full mb-5">
      <div className="flex flex-col justify-center items-center py-5 pt-10 bg-gray-900 rounded-t-md">
        <img
          className="rounded-full mb-2 border-4 border-brand-accent"
          src="https://graph.facebook.com/soyjrcarrillo/picture?width=150&height=150"
          alt={env.REACT_APP_WEBSITE_AUTHOR_NAME}
        />
        <h1 className="text-3xl font-black text-brand-accent">
          {env.REACT_APP_WEBSITE_AUTHOR_NAME}
        </h1>
        <small className="text-gray-500">
          {t('about:subtitle')}
        </small>
        <div className="flex gap-2 mt-3">
          {social_networks.map((it, i) => (
            <a href={it.link} target="_blank" rel="noreferrer">
              <img className="w-5 h-5" src={it.icon} alt={it.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="py-5 px-5 text-center bg-gray-800 rounded-b-md">
        <p className="prose prose-stone text-gray-100 text-ellipsis">
          {t('about:description')}
        </p>
      </div>
    </div>
  )
}
