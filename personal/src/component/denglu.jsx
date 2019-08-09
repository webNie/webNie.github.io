import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import Zhuce from './zhuce'
import Dl from './dl'

export default class Denglu extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className='Denglu'>
                <img src="" className='Denglu-img'/>
                <div className='Denglu-content'>
                    <NavLink activeClassName='Denglu-bottom' to='/denglu/zhuce'>注册</NavLink>
                    <NavLink isActive={(match,location)=>{
                        if(match || location.pathname === '/denglu'){
                            return true;
                        }
                            return false
                    }}
                    activeClassName='Denglu-bottom' 
                    to='/denglu/dl'>登录</NavLink>
                </div>
                <div className='Denglu-main'>
                    <Route path='/denglu/zhuce' component={Zhuce}/>
                    <Route path='/denglu/dl' component={Dl}/>
                </div>
            </div>
        )
    }
}
