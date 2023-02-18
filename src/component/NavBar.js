import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-regular-svg-icons';
import React from 'react'
import {   Container, Row } from 'react-bootstrap';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = ({authenticate,setAuthenticate,menuList,closeSide}) => {
  const navigate = useNavigate()
  const goToLogout=()=>{
    setAuthenticate(false);
    navigate('/')
  }
  const goToLogin = ()=>{
    navigate('/login')
  }
  const goToHome=()=>{
    navigate('/')

  }
  const search = (event)=>{
    if(event.key=="Enter"){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
      event.target.value=null
    }

  }
 
  return (
    <Container>
      <div className='side-bar' >
        <FontAwesomeIcon className='bar' onClick={()=>closeSide('225px')} icon={faBars}/>
        <FontAwesomeIcon className='search-icon' icon={faSearch}/>
        <input placeholder='Search' onKeyDown={(event)=>search(event)}/>
      </div>
      <div className='login-area' onClick={authenticate==false?goToLogin:goToLogout}>
        <FontAwesomeIcon icon={faUser}/>
        <span>{authenticate==false?"로그인":"로그아웃"}</span>
      </div>
      <div className='logo'>
        <img onClick={goToHome} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-QlWGpc1nFtCV7SFAnHKIQaD0mTxlByJmrHQCM4XnA&s'/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu)=>{
            return <li>{menu}</li>
          })}
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon className='search-icon' icon={faSearch}/>
          <input placeholder='Search' onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    
    </Container>
  )
}

export default NavBar