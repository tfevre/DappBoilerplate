import { ThemingProps } from '@chakra-ui/react'
import { mainnet, polygonMumbai, sepolia, polygon } from '@wagmi/chains'

export const SITE_NAME = 'Le Club Metadev3'
export const SITE_DESCRIPTION = 'Website for the Le Club Metadev3'
export const SITE_URL = 'https://127.0.0.1:3000'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'orange'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }

export const SOCIAL_MEDIUM = ''
export const SOCIAL_TWITTER = 'Metadev_3'
export const SOCIAL_GITHUB = 'metadev3'
export const SOCIAL_LINKEDIN = 'metadev3'
export const SOCIAL_DISCORD = ''

export const INFURA_KEY = 'a7af8062dbdd4c8c922ba9bd355a7589'
export const NETWORKS = [mainnet, polygon, polygonMumbai, sepolia]