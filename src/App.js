import { Route, Routes } from "react-router-dom"
import { LightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={LightTheme}>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element ={<BlogPage/>}/>
          <Route path="/work" element = {<WorkPage/>}/>
          <Route path="/skills" element={<MySkillsPage/>}/>
        </Routes>
      </ThemeProvider>
    </>
  )
    
}

export default App

