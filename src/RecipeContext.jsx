import { createContext,useReducer} from "react";
import { Recepies } from "./db/Recipes";

export const DataContext=createContext();

const recipeReducer = (state, action) => {
    switch (action.type) {
      case "ADD_RECIPE":
        return [...state, action.payload];
      default:
        return state;
    }
  };

export function DataProvider({children}){
//   const [recipes,setRecepies]=useState(Recepies);
  const [recepies, dispatch] = useReducer(recipeReducer, Recepies);

    return (
        <>
        <DataContext.Provider value={{recepies, dispatch}}>{children}</DataContext.Provider>
        </>
    )
}