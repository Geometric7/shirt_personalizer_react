import shortid from 'shortid';
import styles from './OptionSize.module.scss';
import cslx from 'cslx'

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  );
}

export default OptionSize;
