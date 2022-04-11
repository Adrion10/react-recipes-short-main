import { useState, useRef, useEffect } from 'react';

import MyContext from './MyContext';
import useFetch from '../hooks/useFetch';

const MyProvider = ({ children }) => {
  const [search, setSearch] = useState('chicken');
  const [searchInput, setSearchInput] = useState('');
  const [offset, setOffset] = useState(0);
  const inputRef = useRef();
  const pageEnd = useRef();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${API_KEY}&offset=${offset}`;
  console.log(URL);
  //Fetch the data
  const { results, loading, error } = useFetch(URL);

  //...................................................Start Infinite scroll section................................................................

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  useEffect(() => {
    const options = { root: null, rootMargins: null, threshold: 0.2 };
    const handleIntersect = ([pageEnd]) => {
      if (pageEnd.isIntersecting) loadMore();
    };
    if (!loading) {
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(pageEnd.current);
      return () => {
        observer.unobserve(pageEnd);
      };
    }
  }, [loading]);

  //...................................................End Infinite scroll section................................................................

  //Handle the search form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setOffset(0);
    setSearch(searchInput);
    setSearchInput('');
    inputRef.current.focus();
  };

  return (
    <MyContext.Provider
      value={{
        searchInput,
        setSearchInput,
        inputRef,
        pageEnd,
        results,
        loading,
        error,
        handleSubmit,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
