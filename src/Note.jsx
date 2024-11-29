import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion"

function Note({note,deleteNote}) {
    return (
      <motion.div whileHover={{ scale: 1.04 }} className="whitespace-pre-wrap bg-yellow-200 w-[300px] h-[300px] flex flex-col justify-between p-4 rounded-2xl">
       <span className="text-lg font-semibold">{note.title}</span>
       <p>{note.description}</p>
       <div className="flex flex-row justify-between items-center">
        <p className="">{note.date}</p>
        <MdDeleteForever onClick={()=>deleteNote(note.id)} className="hover:text-red-500 w-6 h-6 cursor-pointer"/>
       </div>
      </motion.div>
    )
  }
  
  export default Note
