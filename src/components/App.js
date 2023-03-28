import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css';
import RecipeList from "./RecipeList";

// export const ThemeContext = React.createContext()

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. put salt \n2. asdfsadf \n3. eat",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '1 ton'
      },
      {
        id: 2,
        name: 'rice',
        amount: '1 cup'
      },
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 69,
    cookTime: '1546:45',
    instructions: "1. put asdfsadfsdf \n2. asdfsdfsadfsadfs \n3. asdfasdfsadfsadf",
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '1 ton'
      },
      {
        id: 2,
        name: 'noodls',
        amount: '1 cup'
      },
    ]

  },
]


function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '12',
      instructions: 'instructionssdfsadf',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 cup'}
      ]
  
    }
    setRecipes([...recipes, newRecipe])
  }

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return ( 
    <RecipeList 
      recipes={ recipes } 
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
   )
}

export default App;
