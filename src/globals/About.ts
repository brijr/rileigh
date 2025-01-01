import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },

    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'resumeLink',
      label: 'Resume Link',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'linkedinLink',
      label: 'Linkedin Link',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'emailLink',
      label: 'Email Link',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
