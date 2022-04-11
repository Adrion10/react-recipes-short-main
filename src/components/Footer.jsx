import { useContext } from 'react';

import MyContext from '../context/MyContext';

const Footer = () => {
  const context = useContext(MyContext);
  const { pageEnd } = context;

  return <footer ref={pageEnd}>Footer</footer>;
};

export default Footer;
