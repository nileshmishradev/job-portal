import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

  // hero section to handle input (search)
  const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:''
  })

  const [isSearched,setIsSearched] = useState(false)

  //
  const [jobs, setjobs] = useState([])

  // it will used in App.js if it ture that it display
  const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)

  // Function to fetch jobs
  const fetchjobs = async () => {
    setjobs(jobsData)
  }

  useEffect(()=>{
    fetchjobs()

  },[])

  const value = {
    setSearchFilter,searchFilter,
    isSearched, setIsSearched,
    jobs, setjobs,
    showRecruiterLogin,setShowRecruiterLogin,

  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}