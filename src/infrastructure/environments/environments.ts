import {cleanEnv, email, str} from 'envalid'

function environment() {
  const dynamicEnv = cleanEnv(process.env, {
    ADMIN_EMAIL: email({ default: 'm@juniorcarrillo.com' }),
    // EMAIL_CONFIG_JSON: json({ desc: 'Additional email parameters' }),
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
    REACT_APP_WEBSITE_DOMAIN: str({default: ''}),
    REACT_APP_WEBSITE_NAME: str({default: ''}),
    REACT_APP_WEBSITE_SHORT_DESCRIPTION: str({default: ''}),
    REACT_APP_WEBSITE_DESCRIPTION: str({default: ''}),
    REACT_APP_WEBSITE_OG_UPDATED_TIME: str({default: ''}),
    REACT_APP_WEBSITE_OG_LOCALE: str({default: ''}),
    REACT_APP_WEBSITE_LANG: str({default: ''}),
    REACT_APP_WEBSITE_LANG_SECONDARY: str({default: ''}),
    REACT_APP_WEBSITE_THEME_COLOR: str({default: ''}),
    REACT_APP_WEBSITE_ARTICLE_PUBLISHED_TIME: str({default: ''}),
    REACT_APP_WEBSITE_ARTICLE_MODIFIED_TIME: str({default: ''}),
    REACT_APP_WEBSITE_AUTHOR_NAME: str({default: ''}),
    // Sentry.io
    REACT_APP_SENTRY_IO_URI: str({default: ''}),
    // Facebook
    REACT_APP_FACEBOOK_APP_ID: str({default: ''}),
    REACT_APP_FACEBOOK_SITE_USERNAME: str({default: ''}),
    REACT_APP_FACEBOOK_LINK: str({default: ''}),
    // Twitter
    REACT_APP_TWITTER_SITE_USERNAME: str({default: ''}),
    REACT_APP_TWITTER_CREATOR_USERNAME: str({default: ''}),
    REACT_APP_TWITTER_AUTHOR_NAME: str({default: ''}),
    REACT_APP_TWITTER_LINK: str({default: ''}),
    // Instagram
    REACT_APP_INSTAGRAM_LINK: str({default: ''}),
    // GitHub
    REACT_APP_GITHUB_LINK: str({default: ''}),
    // WhatsApp
    REACT_APP_WHATSAPP_LINK: str({default: ''}),
    // Telegram
    REACT_APP_TELEGRAM_LINK: str({default: ''}),
    // YOUTUBE
    REACT_APP_YOUTUBE_LINK: str({default: ''}),
    // BUY ME A COFFEE
    REACT_APP_BUYMEACOFFEE_LINK: str({default: ''}),
  });

  return {
    ...dynamicEnv,
  }
}

export default environment();
