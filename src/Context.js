import {createContext, useState} from 'react'

export const Id = createContext();

const Context = ({children}) => {
  const [id, setId] = useState();
  return <Id.Provider value={{id, setId}}>{children}</Id.Provider>
}

export default Context