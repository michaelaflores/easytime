import { createContext } from 'react'

const AuthContext = createContext({ token: null, updateToken: () => {} })
export default AuthContext
