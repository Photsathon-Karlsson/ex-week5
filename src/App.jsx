//import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Validation</h1>

      <section className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          title="The user has not been in the field yet."
        />
        <p className="error">Error</p>

        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          type="text"
          placeholder="Your surname"
          value="Abcde"
          className="valid"
          readOnly
        />
        <p className="error">Error</p>

        <label htmlFor="email">E-mail address</label>
        <input
          id="email"
          type="text"
          placeholder="Your e-mail"
          className="invalid"
          value="xxxx-x.com"
          readOnly
        />
        <p className="error">Your email address is missing "@".</p>
      </section>

      <section className="form-field row">
        <button type="button">Save</button>
        <button type="button" className="ghost">Delete</button>
      </section>
    </div>
  )
}

export default App
