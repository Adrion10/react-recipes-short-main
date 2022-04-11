const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.title}</p>
    </div>
  );
};

export default RecipeCard;
