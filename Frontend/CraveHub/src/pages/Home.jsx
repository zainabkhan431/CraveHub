import Navbar from "../Components/Navbar.jsx";
import Header from "../Components/Header.jsx";
// import Categories from "../Components/Categories.jsx";
import Resturant from "../Components/Resturant.jsx";
import BlogSection from "../Components/BlogSection.jsx";
import About from "../Components/About.jsx";
import Footer from "../Components/Footer.jsx";
import WorkSteps from "../Components/WorkSteps.jsx";
import Feedback from "../Components/Feedback.jsx";
const Home = () => {
  return (
    <div>
        <Navbar/>
       <Header/>
       
       {/* <Categories/> */}
     
       <Resturant/>
       <WorkSteps/>
       <Feedback/>
     
       <BlogSection/>
      
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
