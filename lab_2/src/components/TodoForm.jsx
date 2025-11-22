import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    
    if (!value) {
      setError("Please enter a task");
      return;
    }

    if (value.length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }

    onAdd(value);
    setText("");
    setError("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };

  return (
    <div>
      <form className="d-flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder="Enter new task"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      {error && <div className="text-danger small mt-2">{error}</div>}
    </div>
  );
}
