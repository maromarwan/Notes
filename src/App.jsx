import { useEffect, useState } from "react"
import Note from "./Note"
import Addnote from "./Addnote";
import { MdSearch } from "react-icons/md";

function App() {
const [notes,setNotes] = useState(()=>{
  const localValue = localStorage.getItem('item');
  if (localValue == null) {
    return []
  }else{
    return JSON.parse(localValue)
  }
});

const [searchText,setSearchText] = useState('');

useEffect(()=>{
  localStorage.setItem('item', JSON.stringify(notes));
},[notes])

const addNote = (text) =>{
  const dateTime = new Date();
  const title = notes.length + 1;
  setNotes((prevNotes) => [
    ...prevNotes,
    {id : crypto.randomUUID(), title : 'Note '+ title, description : text, date : dateTime.toLocaleDateString()},
  ]);
}

const deleteNote = (id) =>{
  const stillNotes = notes.filter((note)=> note.id !== id);
  setNotes(stillNotes);
}

  return (
    <div className="place-items-center">
      <div className="flex flex-row gap-3 mt-5 items-center w-[300px] md:w-[700px] lg:w-[900px]">
        <MdSearch size='1.3em'/>
        <input onChange={(e)=>{setSearchText(e.target.value)}} type="text" placeholder="Search for notes..." className="border border-gray-800 rounded-md w-full focus:outline-none focus:border-sky-500"/>
      </div>

      <div className="py-5 px-6 mx-auto my-auto max-w-5xl grid grid-cols-1 place-items-center lg:grid-cols-3 md:grid-cols-2 gap-4">
      {notes.filter((n)=>n.description.toLowerCase().includes(searchText)).map((note)=>
         <Note note={note} deleteNote={deleteNote}/>
      )}
      <Addnote addNote={addNote}/>
      </div>
    </div>

  )
}

export default App
