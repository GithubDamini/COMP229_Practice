import { useRef } from "react";
import "./uncontrolled.css";

export default function Uncontrolled() {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log("Name:", nameRef.current.value);
    console.log("Description:", descriptionRef.current.value);
  }

  function handleClear() {
    // Clear the input fields using refs
    nameRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label>
        <p>New Shop</p>
      </label>

      <form className="uncontrolled" onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="form-input">
          <input
            ref={descriptionRef}
            type="text"
            placeholder="Description"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="uncontrolled__button" type="submit">
            Submit
          </button>
          <button className="uncontrolled__button" type="button" onClick={handleClear}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
