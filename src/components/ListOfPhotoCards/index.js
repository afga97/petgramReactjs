import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] }, categoryId } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)}
    </ul>
  )
}
