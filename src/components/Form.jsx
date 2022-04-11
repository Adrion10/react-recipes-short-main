import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

const Form = () => {
  const context = useContext(MyContext);
  const { searchInput, setSearchInput, inputRef, handleSubmit } = context;

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form>
      <input
        ref={inputRef}
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </form>
  );
};

export default Form;
