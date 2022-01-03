import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus favoritos' description='Aqui puedes encontrar tus animales favoritos'>
      <FavsWithQuery />
    </Layout>

  )
}
