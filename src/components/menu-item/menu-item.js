import React from 'react'

import './menu-item.style.scss'
const Menuitem = ({id,title,url,size }) =>(
    <div className = {`menu-item ${size}`}
    >
        <div className='background-image'
        style={{backgroundImage:`url(${url})`}}>

        </div>
        <div className='content'>
           <h1 className='title'>{title.toUpperCase()}</h1>
           <span className='subtitle'>Shop Now</span> 
        </div>
    </div>
)

export default Menuitem