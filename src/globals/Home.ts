import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'summary',
      label: 'Content',
      type: 'text',
    },
  ],
}
