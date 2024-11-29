import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_black from '../../assets/logo-white.png'
import  search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search-b.png'
import dark_mode from '../../assets/day.png'
import light_mode from '../../assets/night.png'

const Navbar = ({theme, setTheme}) => {
    const toggle_mode =() => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    }

  return (
    <>
      <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_black} alt="Logo Image" className='logo' />
        <ul>
            <li>Nav1</li>
            <li>Nav2</li>
            <li>Nav3</li>
            <li>Nav4</li>
            <li>Nav5</li>
        </ul>
        <span></span>
        <div className="search-bx">
            <input type="text"  placeholder='Search'/>
            <img src={theme == 'light' ? search_dark : search_light} alt="Search icon" className='search-icon' />
        </div>
        <img onClick={() =>{toggle_mode()}} src={theme == 'light' ? light_mode : dark_mode} alt="Toggle Icon" className='img-toggle'/>
      </div>
    </>
  )
}

export default Navbar
                    