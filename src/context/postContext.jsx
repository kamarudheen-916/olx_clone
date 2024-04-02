import {createContext,useState} from 'react'

export const PostContext = createContext(null)

export default function Post ({children}){
    const [postDeatails,setPostDetails] = useState()
    return(
        <PostContext.Provider value={{postDeatails,setPostDetails}} >
            {children}
        </PostContext.Provider>
    )
 }

 