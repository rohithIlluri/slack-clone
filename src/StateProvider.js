import React ,{ createContext ,useContext ,  useReducer } from React ; 

    

export default stateContent = stateContent();

export const stateProvider =( { reducer , initialState ,children } ) => (
    <StateContext.Provider value = { useReducer(reducer, initialState) } >
        {children}
        </StateContext.Provider>
  ) ;

export const useStateValue = () => useContext(StateContext);