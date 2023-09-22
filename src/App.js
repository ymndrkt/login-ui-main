import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>ADMIN</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <button className="loginBut">
          <p>Login</p>
        </button>

      
      </div>
    </div>
  );
}

export default App;
