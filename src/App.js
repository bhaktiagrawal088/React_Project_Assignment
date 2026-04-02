import ReactDOM from "react-dom/client"
import SnackPage from "./component/SnackPage";
import "./index.css"
import Header from "./component/Header";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom"
import StudentPage from "./component/StudentPage";
import StudentDetails from "./component/StudentDetails";


const Root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path: "/",
        element: <SnackPage />  
      },
      {
        path : "/SnackPage",
        element : <SnackPage/>
      },
      {
        path : "/StudentPage",
        element : <StudentPage/>
      },
      {
        path: "/students/:id",
        element: <StudentDetails />
      }
    ]
  }
])
Root.render(<RouterProvider  router={appRoute}/>)