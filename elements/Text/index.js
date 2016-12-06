import React, { PropTypes as pt } from 'react'
import { css } from 'glamor'

import { pxToEm } from '../../utils'
import { color } from '../../style'
import { typography } from '../../settings'

const { keys } = Object

css.fontFace(typography.museoSans)

const baseStyle = css({
  lineHeight: 1.5,
  fontFamily: 'Museo Sans'
})

const typeConfig = {
  p: { size: 18, opacity: 0.6 },
  h1: { size: 36, weight: 900 },
  h2: { size: 31.5, weight: 900 },
  h3: { size: 27, weight: 900 },
  h4: { size: 24, weight: 900 },
  h5: { size: 21, weight: 900 },
  h6: { size: 18, weight: 900 },
  label: { size: 16, weight: 900 },
  span: { size: 16 },
  small: { size: 12 }
}

/*
  make: {
    p: css({}),
    h1: css({}),
    ...
   }
 */
const styleConfig = keys(typeConfig)
  .reduce((styles, type) => ({
    ...styles,
    [type]: css({
      fontSize: pxToEm(typeConfig[type].size),
      fontWeight: typeConfig[type].weight || 500,
      opacity: typeConfig[type].opacity || 0.8
    })
  }), {})

const decoration = {
  none: css({textDecoration: 'none'}),
  underline: css({textDecoration: 'underline'}),
  overline: css({textDecoration: 'overline'}),
  'line-through': css({textDecoration: 'line-through'})
}

const transform = {
  none: css({textTransform: 'none'}),
  uppercase: css({textTransform: 'uppercase'}),
  lowercase: css({textTransform: 'lowercase'}),
  capitalize: css({textTransform: 'capitalize'}),
  'full-width': css({textTransform: 'full-width'})
}

const whiteListedProps = {
  id: value => ({id: value}),
  baseRef: value => ({ref: value}),
  decoration: value => decoration[value] || {},
  transform: value => transform[value] || {}
}

const Text = ({
  type: Type = 'span',
  color: clr = 'font',
  children,
  ...rest
}) => {
  const props = keys(whiteListedProps)
    .reduce((props, propName) => {
      if (rest.hasOwnProperty(propName)) {
        return {
          ...props,
          ...whiteListedProps[propName](rest[propName])
        }
      }
      return props
    }, {})

  return (
    <Type {...props} {...baseStyle} {...color[clr]} {...styleConfig[Type]}>
      {children}
    </Type>
  )
}

Text.propTypes = {
  color: pt.oneOf(keys(color)),
  type: pt.oneOf([
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'label',
    'small'
  ]),
  transform: pt.oneOf(keys(transform)),
  decoration: pt.oneOf(keys(decoration))
}

export default Text
