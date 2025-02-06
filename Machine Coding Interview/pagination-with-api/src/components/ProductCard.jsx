import React from 'react'
import './product.css'

const ProductCard = ({image, title}) => {
  return (
    <div className='product-card'>
        <img src={image} alt={title} className='product-img' />
        <span className='product-title'>{title}</span>
    </div>
  )
}

export default ProductCard

// my name is misty kumari.
// my father's name is pankaj prajapati.
// my mother's name is soni devi.
// i live in thane.