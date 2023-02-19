import "./register.css"

export default function Register() {
    return (
        <div className="register">
         <span className="Titlebigreg">WOLFHOUND & ELK</span>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Name</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <br>
      
      </br>
      <span className="textregister"><a href="/Login"> Already a member? Login here</a> </span>
    </div>
    )
}