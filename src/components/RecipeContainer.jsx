import { useContext } from 'react';
import MyContext from '../context/MyContext';
import RecipeCard from './RecipeCard';

const RecipeContainer = () => {
  const context = useContext(MyContext);
  const { results, loading, error } = context;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const list = results.results.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return <div>{list}</div>;
};

export default RecipeContainer;
