import React, { useState } from "react";

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newMovie = {
      id: Date.now(), 
      title,
      watched: false,
    };

    addMovie(newMovie);
    setTitle(""); 
  };

  return (
    <form className="addMovie" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
