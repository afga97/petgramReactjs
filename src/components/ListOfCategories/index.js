import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let isCancelled = false
    window.fetch('http://localhost:3500/categories')
      .then(res => res.json())
      .then(response => {
        if (!isCancelled) {
          setCategories(response)
          setLoading(false)
        }
      })
      .catch(e => {
        if (!isCancelled) {
          setLoading(false)
        }
      })
    return () => {
      isCancelled = true
    }
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
              <Category {...item} path={`/pet/${item.id}`} />
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
