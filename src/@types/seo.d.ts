export interface seo_params {
  title?: string;
  robots?: string;
  description?: string;
  canonical?: string;
  og?: og;
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    site?: string;
    creator?: string;
    label1?: string;
    data1?: string;
    label2?: string;
    data2?: string;
  }
}

interface og {
  title?: string;
  description?: string;
  updated_time?: Date;
  site_name?: string;
  locale?: 'es_ES' | 'en_US' | 'pt_BR';
  localeAlternative?: 'es_ES' | 'en_US' | 'pt_BR';
  type?: 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'article' | 'book' | 'profile' | 'website';
  url?: string;
  audio?: string;
  image?: string;
  article?: article;
  profile?: profile;
  book?: book;
}

interface article {
  published_time?: Date;
  modified_time?: Date;
  expiration_time?: Date;
  section?: string;
  author?: string;
  tag?: Array<string>;
}

interface book {
  author?: string;
  isbn?: string;
  release_date?: Date;
  tag?: Array<string>;
}

interface profile {
  first_name?: string;
  last_name?: string;
  username?: string;
  gender?: 'male' | 'female';
}
