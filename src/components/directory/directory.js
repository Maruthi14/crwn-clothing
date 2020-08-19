import React from 'react'

import Menuitem from '../menu-item/menu-item'
import './directory.style.scss'
import SECTIONS_DATA from './sections.data'

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections : SECTIONS_DATA
        }
    }
    
    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id , ...sectionprops }) =>(
                        <Menuitem key ={id} {...sectionprops}></Menuitem>
                    )
                        )
                }
    
            </div>
        )
    }
}

export default Directory