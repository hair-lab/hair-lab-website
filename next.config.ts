import createMDX from '@next/mdx'
import { Configuration } from 'webpack'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {}
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {}
        }
      ]
    })
    return config
  }
}

export default withMDX(nextConfig)