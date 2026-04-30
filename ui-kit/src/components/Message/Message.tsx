import * as React from 'react';
import styles from './Message.module.scss';
import { Avatar } from '../Avatar/Avatar';

export interface MessageProps {
  direction?: 'in' | 'out';
  author?: string;
  avatar?: string;
  time?: string;
  children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({ direction = 'in', author, avatar, time, children }) => (
  <div className={[styles.msg, styles[direction]].join(' ')}>
    {direction === 'in' && <Avatar size={32} name={author} src={avatar} />}
    <div>
      <div className={styles.bubble}>{children}</div>
      {time && <div className={styles.meta}>{time}</div>}
    </div>
  </div>
);
