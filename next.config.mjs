import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/rileigh-ellison',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'https://read.cv/rileigh',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
