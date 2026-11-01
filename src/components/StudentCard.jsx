import { useState } from "react";
function StudentCard(props){
    const [afficher, setAfficher] = useState(false);
    return (
        <div className="fiche">
            <h1>Fiche Etudiant</h1>
            <img src = {props.image} alt="photo etudiant "/> 
            <button onClick={() => setAfficher(!afficher)}>
                {afficher ? "Masquer les informations" : "Afficher les informations"}
            </button>
            {afficher && <p>
                <strong>Nom & Prenom :</strong> {props.NomPrenom}<br></br>
                <strong>Email :</strong> {props.Email}<br></br>
                <strong>Telephone : </strong>{props.Telephone}<br></br>
                <strong>Filiere :</strong> {props.Filiere}<br></br>
                <strong>Annee d'etude :</strong> <br></br>
                <strong>Groupe :</strong> {props.Groupe}<br></br>
                <strong>Ville :</strong> {props.Ville}<br></br>
                
            </p>}

            <button onClick={props.onSupprimer}>
                Supprimer
            </button>
            <button onClick={props.onModifier}>
                Modifier
            </button>

        </div>

    );
}
export default StudentCard;