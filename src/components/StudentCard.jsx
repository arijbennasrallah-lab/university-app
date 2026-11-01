import img1 from "../assets/img.jpg";
function StudentCard(props){
    return (
        <div className="fiche">
            <h1>Fiche Etudiant</h1>
            <img src = {props.image} alt="photo etudiant "/> 
            <p>
                <strong>Nom & Prenom :</strong> {props.NomPrenom}<br></br>
                <strong>Email :</strong> {props.Email}<br></br>
                <strong>Telephone : </strong>{props.Telephone}<br></br>
                <strong>Filiere :</strong> {props.Filiere}<br></br>
                <strong>Annee d'etude :</strong> <br></br>
                <strong>Groupe :</strong> {props.Groupe}<br></br>
                <strong>Ville :</strong> {props.Ville}<br></br>
                
            </p>
 

        </div>
    );
}
export default StudentCard;