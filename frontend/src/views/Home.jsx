import { React, useState, useEffect } from 'react'
import NoteDetail from '../views/components/NoteDetail'
function Home() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("http://localhost:8000/api/notes");
            const json = await response.json();

            if (response.ok) {
                setNotes(json);
            }
        }
        fetchNotes();
    }, []);

  return (
    <div className='container'>
          <h1>Tous Les Notes</h1>

          <ul className="list-group mt-4">
          {notes && notes.map((note) => (
              <NoteDetail key={note._id} note={note} setNotes={setNotes} />
          ))}
          </ul>
          
    </div>
  )
}

export default Home