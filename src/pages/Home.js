import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const { id } = useParams()
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

export default Home
