import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            yzm:''
        }
    }

    // onchange事件
    onUser = event => {
        let { target } = event;
        console.log(target.value);
        // 赋值的时候用es6对象新特性去做
        this.setState({
            [target.name]: target.value
        });
    };

    // 点击提交验证
    yanzhengdenglu = () => {
        //验证手机号
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        const regemail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if ((this.state.username === "" || !reg.test(this.state.username)) && !regemail.test(this.state.username)) {
            return alert("请输入正确的账号");
        }
        // 验证密码
        if (this.state.password1.length < 6 || this.state.password1.length > 16) {
            return alert("密码要6~16位");
        }else if(this.state.password2.length < 6 || this.state.password2.length > 16){
            return alert("第二次密码也需要6~16位")
        }else if(this.state.password1 !== this.state.password2){
            return alert("两次输入的密码需要一致")
        }
        // 验证验证码
        if(this.state.yzm !== '6655'){
            return alert("验证码不正确，请重新输入")
        }
        //成功
        alert("登录成功")
    };

    render() {
        const { username,password1,password2,yzm } = this.state
        return (
            <div className='Zhuce'>
                <form action="" className='Zf'>
                    <label htmlFor="" className='Zfl'>
                        <p>账号: </p>
                        <input type="text" className='Zfli' placeholder='请输入账号' name='username' value={username} onChange={this.onUser}/>
                    </label>
                    <label htmlFor="" className='Zfl'>
                        <p>密码: </p>
                        <input type="password" className='Zfli' placeholder='请输入密码' name='password1' value={password1} onChange={this.onUser}/>
                    </label>
                    <label htmlFor="" className='Zfl'>
                        <p>密码: </p>
                        <input type="password" className='Zfli' placeholder='请再次输入密码' name='password2' value={password2} onChange={this.onUser}/>
                    </label>
                    <label htmlFor="" className='Zfl'>
                        <input type="text" className='Zfli Zfli3' placeholder='请输入验证码' name='yzm' value={yzm} onChange={this.onUser}/>
                        <p className='Zfl-p'>6655</p>
                    </label>
                    <label htmlFor="" className='Zfl'>
                        <input type="checkbox" className='Zfli-checkbox' />
                        <p className='Zfl-p'>我已经阅读了<NavLink to='/'>管理条例</NavLink></p>
                    </label>
                    <label htmlFor="" className='zfl-btn'>
                        <input type="button" className='Zfli-btn' value='点击注册' onClick={this.yanzhengdenglu}/>
                    </label> 
                </form>
            </div>
        )
    }
}
