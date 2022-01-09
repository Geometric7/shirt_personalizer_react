import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from '.ProductForm.module.scss'

const ProductForm = ({ handleSubmit, sizes, colors, currentColor, setCurrentColor, currentSize, setCurrentSize }) => {

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSizes} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

export default ProductForm;
