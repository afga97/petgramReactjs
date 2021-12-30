import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}
