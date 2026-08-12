import { Route, Routes } from "react-router"

import Main from "./pages/Main"
import ProjectDetails from "./componenets/ProjectDetails"

function App() {
  return (
    <>
      
      <Routes>
        
        <Route path="/" element={<Main/>}/>
  
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />
</Routes>
    </>
  )
}

export default App
