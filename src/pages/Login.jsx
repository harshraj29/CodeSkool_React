import React, { useState } from 'react';
import { Navbar, LoginForm, Register, Footer ,Particlebg } from '../components';
import '../styles/Login.css';
function Login() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div>
      <Navbar />
      <Particlebg />
      <div className="LoginApp">
        {
          currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Login