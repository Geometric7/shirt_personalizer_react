import styles from './Product.module.scss';
//import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
//import shortid from 'shortid';
import ProductForm from '../ProductForm/ProductForm'

const Product = ({title, basePrice, colors, sizes, name }) => {

const [currentColor, setCurrentColor] = useState(colors[0]);
const [currentSize, setCurrentSize] = useState(sizes[0].name);

const getPrice = () => {
  const clickedSize = sizes.find(element => element.name === currentSize)
  return basePrice + clickedSize.additionalPrice;
}


const handleSubmit = e => {
    e.preventDefault();
//purchase info
  console.log ('Summary')
  console.log('==================')
  console.log('Name:  ' + title)
  console.log('Price:  ' + getPrice())
  console.log('Size:  ' + currentSize)
  console.log('Color:  ' + currentColor)
}

 /*const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };*/

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} colors={colors} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
};

export default Product;
