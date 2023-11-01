import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'

const App=()=> {

  const [progress,setProgress]=useState(0);

    return (
      <div >
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='green'
            progress={progress}
            height={3}
            background="white"
          />
          <Routes>
            <Route exact path="/" element={<News updateprogress={setProgress} category="general" country="in" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/sports" element={<News updateprogress={setProgress} key="sports" category="sports" country="in" />} />
            <Route exact path="/general" element={<News updateprogress={setProgress} key="general" category="general" country="in" />} />
            <Route exact path="/business" element={<News updateprogress={setProgress} key="business" category="business" country="in" />} />
            <Route exact path="/entertainment" element={<News updateprogress={setProgress} key="entertainment" category="entertainment" country="in" />} />
            <Route exact path="/health" element={<News updateprogress={setProgress} key="health" category="health" country="in" />} />
            <Route exact path="/science" element={<News updateprogress={setProgress} key="science" category="science" country="in" />} />
            <Route exact path="/technology" element={<News updateprogress={setProgress} key="technology" category="technology" country="in" />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    )
  
}

export default App;
