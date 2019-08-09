import React, { Component } from 'react'

export default class Dl extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
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

    // 点击验证登录
    yanzhengdenglu = () => {
        //验证手机号
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        const regemail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if ((this.state.username === "" || !reg.test(this.state.username)) && !regemail.test(this.state.username)) {
        return alert("请输入正确的账号");
        }
        // 验证密码
        if (this.state.password.length < 6 || this.state.password.length > 16) {
        return alert("密码要6~16位");
        }
        //成功
        alert("登录成功")
    };


    render() {
        const { username,password } = this.state
        return (
            <div className='Dl'>
                <form action="" className='Dlf'>
                    <label htmlFor="" className='Dlfl'>
                        <p>账号: </p>
                        <input type="text" className='Dlfli' placeholder='请输入账号' name='username' value={username} onChange={this.onUser}/>
                    </label>
                    <label htmlFor="" className='Dlfl'>
                        <p>密码: </p>
                        <input type="password" className='Dlfli' placeholder='请输入密码'  name='password' value={password} onChange={this.onUser}/>
                    </label>
                    <label htmlFor="" className='Dllabel'>
                        <input type="button" className='Dllabel-btn' value='点击登录' onClick={this.yanzhengdenglu}/>
                    </label>
                </form>
            </div>
        )
    }
}
