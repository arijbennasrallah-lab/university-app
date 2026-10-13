
import './App.css';
import  Image from './assets/IMG_3828.JPG';

function App() {
  const etudiant = {

    nom: "Ben Nasrallah ",
    prenom:"Arij ",
    email:"arij.ben.nasrallah@gmail.com ",
    telephone:"29597430"  ,
    Filière:"Genie Logiciel et systeme d'informatique",
    k:"Année d'étude",
    groupe:"GLSI 2D",
    Ville:"Mahdia",
    image:Image,

  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px"}}>
      <h1>
        fiche etudiant
      </h1>
      <img src={etudiant.image} alt="image etudiant" />
      <p> {etudiant.prenom}, </p>
      <p>  {etudiant.nom}, </p>
      <p> {etudiant.email}, </p>  
      <p> {etudiant.telephone},</p>
      <p> {etudiant.Filière},</p>
      <p> {etudiant.k}, </p>  
      <p>{etudiant.groupe},</p>  
      <p>{etudiant.Ville},</p>  
    </div>
  );
}

export default App;
