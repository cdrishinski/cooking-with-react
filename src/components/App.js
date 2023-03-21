import React from "react";
import '../css/app.css';
import RecipeList from "./RecipeList";

export const ThemeContext = React.createContext()

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

  return ( 
    <RecipeList recipes={ sampleRecipes } />
   )
}

export default App;
