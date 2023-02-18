import React from 'react'

const SideMenu = ({menuList,closeSide,width}) => {
    
  return (
    <div className='side-menu' style={{width:width}}>
        <div onClick={()=>closeSide('0')}  className='close-side'>&times;</div>
        <div className='side-menu-list'>
            {menuList.map((menu)=>{
                return (
                    <div>{menu}</div>
                )
            })}
        </div>
    </div>
  )
}

export default SideMenu