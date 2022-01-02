import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Link to={`${path}`}>
    <Anchor>
      <Image src={cover} />
      {emoji}
    </Anchor>
  </Link>
)
