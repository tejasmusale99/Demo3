
import Body from './Body';
import Header from './Header';
import About from './About'
import {createBrowserRouter,Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Header />
     <Outlet />
    </div>
  );
}

export const approuter= createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element:<About /> 
      },
    ] 
  },
])


export default App;
