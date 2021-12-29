import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import database from '../../../api/db.json'

const useCategoriesData = () => {
  const [categories, setCategories] = useState(database.categories)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(e => setLoading(false))
  }, [])

  return {
    categories,
    loading
  }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setshowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setshowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    // <List className={fixed ? 'fixed' : ''}>
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'> <Category /></Item>
          : categories.map((item) => (
            <Item key={item.id}>
              <Category {...item} />
            </Item>)
          )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}