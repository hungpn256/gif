
import {Component} from 'react'
class SignUp extends Component{
  render(){
    return (
      <div class="container">
        <h1>Đăng Ký</h1>
        <form action="/action_page.php" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="uname">Username:</label>
            <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="form-group">
            <label for="pwd"> Re-Enter password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Re-Enter password" name="pswd" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" required/> Remember me
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Check this checkbox to continue.</div>
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div> 
    );
  }
}

export default SignUp;
