import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function NoteEdit() {
    const { id } = useParams();

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/notes/${id}`);
            const json = await response.json();
            if (!response.ok) {
                setError(json.error || "Erreur lors de la récupération de la note.");
            } else {
                setTitre(json.titre);
                setDescription(json.description);
                setError(null);
            }
            } catch (error) {
                setError("Erreur lors du fetch de la note.");
            }
        }
        fetchNote();
    },[id])

    const handleUpdate = async (e) => { 
        e.preventDefault();
        const note = { titre, description };
        try {
            const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
                method: "PUT",
                body: JSON.stringify(note),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json();
            if (!response.ok) {
                setError(json.error || "Erreur lors de la mise à jour de la note.");
            } else {
                setTitre('');
                setDescription('');
                setError(null);
                navigate("/");
            }
        } catch (err) {
            setError("Erreur lors du fetch.");
        }
    }
  return (
      <div>
          <h1>Edit Note</h1>
          <form className='card p-4' method="post" onSubmit={handleUpdate}>
              <h3>Modifier une note</h3>
              <div className="form-group mb-3">
                  <label htmlFor="titre" className="form-label">Titre:</label>
                  <input type="text" name="titre" id="titre" placeholder='titre de la note' className="form-control" value={titre} onChange={(e) => setTitre(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea name="description" id="description" rows='5' className="form-control" placeholder='description de la note' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <button className="btn btn-warning mb-3 fw-bold">Modifier note</button>
              {error && <div className="alert alert-danger">{error}</div>}
        </form>
    </div>
  )
}

export default NoteEdit