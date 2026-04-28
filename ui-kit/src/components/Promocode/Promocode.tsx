import * as React from 'react';
import styles from './Promocode.module.scss';

export interface PromocodeProps { code: string; onCopy?: (code: string) => void; }

export const Promocode: React.FC<PromocodeProps> = ({ code, onCopy }) => {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code);
    onCopy?.(code);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  };
  return (
    <div className={styles.box}>
      <span className={styles.code}>{code}</span>
      <button className={[styles.btn, done ? styles.copied : ''].join(' ')} onClick={copy}>
        {done ? 'Скопировано' : 'Копировать'}
      </button>
    </div>
  );
};
