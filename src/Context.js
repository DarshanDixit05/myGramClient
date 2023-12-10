import {createContext, useState} from 'react'

export const Id = createContext();

export const Context = ({children}) => {
  const [id, setId] = useState();
  return <Id.Provider value={{id, setId}}>{children}</Id.Provider>
}