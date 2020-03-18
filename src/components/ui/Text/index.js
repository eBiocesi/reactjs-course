import React from 'react';
import styles from './text.module.css';

// props = {
//   content: "qsqsd",
//   toto:"toto",
//   titi: "titi"
// }

const Text = props => {
  const { content, toto, titi } = props;
  return (
    <div>
      <p className={styles.p}>{content}</p>
      <p>{toto}</p>
      <p>{titi}</p>
    </div>
  );
};

export default Text;
