import React from 'react'

function NoteDetail({note}) {
  return (
      <>
        <li className="list-group-item mb-2 pt-3 px-4">
            <h3 className='text-success'>{note.titre}</h3>
            <p> <strong>Description:</strong> {note.description}</p>
            <span className='text-secondary'>{ note.createdAt}</span>
        </li>
      </>
  )
}

export default NoteDetail