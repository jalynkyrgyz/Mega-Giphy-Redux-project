import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
// eslint-disable-next-line import/no-unresolved

import { writeCategories } from '../../store/category/actions'
import styles from './category.module.css'

// eslint-disable-next-line no-unused-vars
function Category({ name, subcategories, ...props }) {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => setIsActive(!isActive)
  const getNameByClick = () => console.log(name)

  const handleCategoryClick = () => {
    toggleActive()
    getNameByClick()
  }

  function renderSubcategories() {
    if (isActive && subcategories && subcategories.length) {
      return (
        <ul className={styles.sub_list}>
          {subcategories.map((subcategory, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Category key={index} {...subcategory} />
          ))}
        </ul>
      )
    }
    return null
  }

  return (
    <li className={styles.item}>
      <span aria-hidden onClick={handleCategoryClick}>
        {name}
      </span>
      {renderSubcategories()}
    </li>
  )
}

function Categories() {
  const dispatch = useDispatch()

  const { categories, loading, error } = useSelector((state) => state.categories)
  useEffect(() => {
    dispatch(writeCategories())
  }, [])
  console.log(loading, error, categories)

  return (
    <ul className={styles.list}>
      {categories.map((category, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Category key={index} {...category} />
      ))}
    </ul>
  )
}

export default Categories
Category.propTypes = {
  name: PropTypes.string.isRequired,
  subcategories: PropTypes.array,
}
