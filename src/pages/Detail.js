import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export default () => {
  const { detailId } = useParams()
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
