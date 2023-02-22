import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">Gaurav</span>
            <span className="headerTitlesLg">Blog</span>

        </div>
        <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
        alt="" 
         />
        

    </div>
  )
}
