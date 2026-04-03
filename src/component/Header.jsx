
import { Link } from 'react-router-dom'

function Header() {
  return (
     <div className="bg-orange-700 text-white px-6 py-3 shadow-md">
      <ul className="flex  gap-10 items-center">
        
        <li className="text-xl font-bold">School Canteen</li>

        <div className="flex gap-6 text-lg font-extrabold text-white">
          <li className="cursor-pointer  hover:text-gray-200"><Link to="/SnackPage">🥗 Snacks</Link></li>
          <li className="cursor-pointer  hover:text-gray-200"><Link to="/StudentPage">👨‍🎓Students</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default Header
