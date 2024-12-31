import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function NoteDetail({ note, setNotes }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
    const response = await fetch(`/api/notes/${note._id}`, {
      method: 'DELETE'
    })
    const json = await response.json();
    if (response.ok) {
      console.log('note deleted', json);
      navigate('/');
    }
   }

  return (
      <>
        <li className="list-group-item mb-2 pt-3 px-4 d-flex justify-content-between align-items-center">
            <div>
              <h3 className='text-success'>{note.titre}</h3>
                <p> <strong>Description:</strong> {note.description}</p>
                <span className='text-secondary'>{formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}</span>
            </div>
        <div>
          <Link to={`/edit/${note._id}`} className='btn'>
            <i className="bi bi-pen-fill text-warning fs-3"></i>
          </Link>
          <button className='btn' onClick={handleDelete}>
            <i className="bi bi-trash text-danger fs-3"></i>
          </button>
        </div>
        </li>
      </>
  )
}

export default NoteDetail