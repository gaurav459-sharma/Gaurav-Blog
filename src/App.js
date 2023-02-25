import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from "./pages/contactus/Contact";

function App() {
  
const user=true;
  return (
    <div className="App">
    <BrowserRouter>
     <Topbar/>
    <Routes>
        
        <Route  path="/" element={<Home/>}/>
        <Route path="/register" element={user?<Home/>:<Register />}/>
        <Route path="/login" element={user?<Home/>:<Login />}/>
        <Route path="/write" element={user?<Write/>:<Register />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/settings" element={user?<Settings/>:<Register />}/>
        <Route path="/post/:postId" element={<Single/>}/>
      
    </Routes>
  </BrowserRouter>
    
    </div>
   
  );
}

export default App;
