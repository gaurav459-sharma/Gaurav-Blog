import Header from "../../components/header/Header"
import "./Home.css"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Home() {
  return (
      <>
      <Header/>
      <div className="home">
      <Posts />
      <Sidebar/>
      </div>
      </>
        
  )
}
