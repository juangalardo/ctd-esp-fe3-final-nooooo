import { createContext, useEffect, useReducer, useMemo, useContext } from "react";

export const initialState = {theme: "claro", data: []}

export const ContextGlobal = createContext(undefined);

const setTheme = "setTheme";
const setDataApi = "setDataApi";
const toggleTheme = "toggleTheme";

const reducer = (state, action) => {
  switch (action.type) {
    case setTheme:
      return {
        ...state,
        theme: action.payload
      };
    case setDataApi:
      return {
        ...state,
        data: action.payload
      };
    case toggleTheme:
      return {
        ...state,
        theme: state.theme === "claro" ? "oscuro" : "claro"
      };
    default:
      return state;
  }
}
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: setDataApi, payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo (() => ({
    theme: state.theme,
    data: state.data,
    toggleTheme: () => dispatch({ type: toggleTheme }),
  }), [state.data, state.theme]);

  return (
    <ContextGlobal.Provider value={ contextValue }>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)