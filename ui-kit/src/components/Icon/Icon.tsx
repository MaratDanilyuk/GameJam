import * as React from 'react';

export type IconName =
  | 'add' | 'check' | 'close' | 'remove' | 'more' | 'menu'
  | 'expand-more' | 'expand-less' | 'arrow-back' | 'arrow-forward'
  | 'play' | 'pause' | 'star' | 'star-filled' | 'heart' | 'heart-filled'
  | 'help' | 'info' | 'warning' | 'success' | 'error'
  | 'message' | 'bell' | 'search' | 'home' | 'user';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const P: Record<IconName, React.ReactNode> = {
  add: <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  check: <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  close: <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  remove: <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
  more: <g fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></g>,
  menu: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></g>,
  'expand-more': <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  'expand-less': <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  'arrow-back': <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  'arrow-forward': <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  play: <path d="M7 4v16l13-8z" fill="currentColor"/>,
  pause: <g fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></g>,
  star: <path d="M12 3l2.6 5.7 6.4.6-4.8 4.4 1.4 6.3L12 16.9 6.4 20l1.4-6.3L3 9.3l6.4-.6L12 3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>,
  'star-filled': <path d="M12 3l2.6 5.7 6.4.6-4.8 4.4 1.4 6.3L12 16.9 6.4 20l1.4-6.3L3 9.3l6.4-.6L12 3z" fill="currentColor"/>,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>,
  'heart-filled': <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" fill="currentColor"/>,
  help: <g stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7v.5" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></g>,
  info: <g stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5" strokeLinecap="round"/></g>,
  warning: <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"><path d="M12 4 22 20H2L12 4Z"/><path d="M12 11v4M12 17.5v.5" strokeLinecap="round"/></g>,
  success: <g><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".15"/><path d="m7 12 3.5 3.5L17 9" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>,
  error: <g><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".15"/><path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></g>,
  message: <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-4 4v-4H6a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>,
  bell: <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2H4.5L6 16ZM10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  search: <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></g>,
  home: <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-4v-6h-4v6H4a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>,
  user: <g stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" strokeLinecap="round"/></g>,
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...rest}>{P[name]}</svg>
);
