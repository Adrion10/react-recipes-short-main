import { useContext } from 'react';

import MyContext from './context/MyContext';

import Header from './components/Header';
import RecipeContainer from './components/RecipeContainer';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const context = useContext(MyContext);
  const { results } = context;

  return (
    <main>
      <Header />
      {results && <RecipeContainer />}
      <Footer />
    </main>
  );
};

export default App;
