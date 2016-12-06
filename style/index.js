import { css } from 'glamor'
import { colors } from '../settings'

export const color = Object.keys(colors)
  .reduce((map, key) => ({
    ...map,
    [key]: css({color: colors[key]})
  }), {})
