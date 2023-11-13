import {cleanEnv, str} from 'envalid'

export default cleanEnv(process.env, {
  // ADMIN_EMAIL: email({ default: 'admin@example.com' }),
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
  // Facebook
  FACEBOOK_APP_ID: str({default: ''}),
  FACEBOOK_SITE_USERNAME: str({default: ''}),
  FACEBOOK_LINK: str({default: ''}),
  // Twitter
  TWITTER_SITE_USERNAME: str({default: ''}),
  TWITTER_CREATOR_USERNAME: str({default: ''}),
  TWITTER_AUTHOR_NAME: str({default: ''}),
  TWITTER_LINK: str({default: ''}),
  // Instagram
  INSTAGRAM_LINK: str({default: ''}),
  // GitHub
  GITHUB_LINK: str({default: ''}),
  // WhatsApp
  WHATSAPP_LINK: str({default: ''}),
  // Telegram
  TELEGRAM_LINK: str({default: ''}),
})
