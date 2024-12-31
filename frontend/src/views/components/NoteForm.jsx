import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function NoteForm() {

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const note = { titre, description };
        const response = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if(response.ok){
            setTitre('');
            setDescription('');
            setError(null);
            console.log('new note added', json);
            navigate('/');
         }

    }
  return (
    <>
          <form className='card p-4' method="post" onSubmit={handleSubmit}>
              <h3>Creer une note</h3>
              <div className="form-group mb-3">
                  <label htmlFor="titre" className="form-label">Titre:</label>
                  <input type="text" name="titre" id="titre" placeholder='titre de la note' className="form-control" value={titre} onChange={(e) => setTitre(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea name="description" id="description" rows='5' className="form-control" placeholder='description de la note' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <button className="btn btn-primary mb-3 fw-bold">Ajouter note</button>
              {error && <div className="alert alert-danger">{error}</div>}
        </form>
    </>
  )
}

export default NoteForm