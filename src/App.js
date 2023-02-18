import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState,useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";
import SideMenu from "./component/SideMenu";


function App() {
  const [width,setWidth]=useState('0')
  const closeSide=(width)=>{
    setWidth(width)
}
  const menuList=['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
  const [authenticate,setAuthenticate] = useState(false)
  useEffect(() => {
  console.log('authenticate',authenticate)
  }, [authenticate])
  return (
  <div>
    <SideMenu menuList={menuList} closeSide={closeSide} width={width}/>
    <NavBar menuList={menuList} closeSide={closeSide} authenticate={authenticate} setAuthenticate={setAuthenticate}/>
    <Routes>
      <Route path="/" element={<ProductAll/>}/>
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
    </Routes>
  </div>
  )
}
export default App;
