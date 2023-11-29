import axios from "axios";
import { createContext, useEffect, useReducer, useMemo, useContext } from "react";
import { reducer } from "../../Reducers/reducer";

const CharStates = createContext();

const initialState = {
  list: [],
  favs: [],
  // theme: "light",
}

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const url = 'https://jsonplaceholder.typicode.com/users/';

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data.results}))
  }, [])

  return (
    <CharStates.Provider value={{state, dispatch}}>
      {children}
    </CharStates.Provider>
  )
}

export default Context

export const useCharStates = () => useContext(CharStates)