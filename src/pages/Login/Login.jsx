import "./login.css"

export default function login() {
    return (
        <div className="login">
         <span className="Titlebiglogin">WOLFHOUND & ELK</span>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <br>
      
      </br>
      <span className="textlogin"><a href="/Register"> New? Register here</a> </span>
       
    </div>
    )
}