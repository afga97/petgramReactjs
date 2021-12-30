import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { TogggleLikeMutation } from '../../container/ToggleLikeMutation'
import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <TogggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    setLiked(!liked)
                  }
                  return <FavButton like={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </TogggleLikeMutation>
          </>
      }
    </Article>
  )
}
