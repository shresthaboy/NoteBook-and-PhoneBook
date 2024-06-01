import React from "react";
import { useState } from "react";

const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [showall, setShowAll] = useState(true);

  const addnote = (e) => {
    e.preventdefault();

    // here an object is created with two properties which stores the
    // id of the notes to be included from its length +1

    const note = {
      id: notes.length + 1,
      note: newNote,
      important: Math.random() < 0.5,
    };
    console.log(note);
    // Here the note object is added to the {notes} state variable by its setter function.
    setNotes(notes.concat(note));
    // After the newNote has been set, it's value is set to empty to store other new notes
    setNewNote("");
  };

  const notestoshow = showall
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Add Your Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showall)}>
        show {showall ? "important" : "all"}</button>
      </div>

      {/* first, setting the input field value to {newNote} state and also targetting the updated value */}
      <form onSubmit={addnote}>
        {/*Then on form submit, {addnote} function is invoked which stores the {newNote}
      into an an object */}
        <input
          type="text"
          name="note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h3>All Notes</h3>
      {/* To render the notes, which is stored in the {notes} state variable, since it is an array; 
      to assesss it we need to use the map method*/}
      <ul>
        {notestoshow.map((n) => {
          <li key={n.id}>{n.note}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
