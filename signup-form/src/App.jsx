import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function handleForm(formData) {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const employment = formData.get("employment");
    // const dietary = formData.getAll("dietaryRestrictions");
    // const color = formData.get("favColor");

    /* The fromEntries shortcut will use the .get() values for each form input.
       With multi-select fields like checkboxes, this will pick one value instead
       of returning the array of all selected, so you must overwrite it manually.
    */
    const data = Object.fromEntries(formData);
    data.dietaryRestrictions = formData.getAll("dietaryRestrictions");

    console.log(data);
  }

  return (
    <main>
      <h1 className="form-title">Signup form</h1>
      <form action={handleForm} className="signup-form">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" defaultValue="d@ug.com" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue="123456pass"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        />
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employment" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employment" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employment"
              value="full-time"
              defaultChecked={true}
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="vegan"
              defaultChecked={true}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="halal"
              defaultChecked={true}
            />
            Halal
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            --- Choose a Color ---
          </option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>

        <button>Submit</button>
      </form>
    </main>
  );
}

export default App;
