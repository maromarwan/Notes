import { useState } from "react"

function Addnote({addNote}) {
  const [newNote, setNewNote] = useState('');
  const handleChange = (e) =>{
    if (200 - e.target.value.length >=0) {
           setNewNote(e.target.value);     
    }
  }
  const handleSave = () =>{
    if (newNote.trim().length > 0) {
      addNote(newNote);
      setNewNote('');
    }
  }
    return (
      <div className="bg-blue-200 w-[300px] h-[300px] rounded-2xl flex flex-col justify-between">
        <textarea value={newNote} onChange={handleChange} placeholder="Type a new note ..." rows={8} cols={30} className="m-4 focus:outline-none resize-none bg-transparent"></textarea>
        <div className="flex justify-between mx-3 my-5">
            <p>{200 - newNote.length} Remaining</p>
            <button onClick={handleSave} className="border border-gray-700 px-2 rounded-xl hover:bg-green-300">Save</button>
        </div>
      </div>
    )
  }
  
  export default Addnote
