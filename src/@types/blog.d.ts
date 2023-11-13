interface Blog {
  version: string
  user_comment: string
  home_page_url: string
  feed_url: string
  language: string
  title: string
  description: string
  icon: string
  items: Array<Item>
}

interface Item {
  id: string
  url: string
  title: string
  content_html: string
  content_text: string
  date_published: string
  date_modified: string
  authors: Array<Author>
  author: Array<Author>
  image: string
  tags: Array<string>
}

interface Author {
  name: string
  url: string
  avatar: string
}
