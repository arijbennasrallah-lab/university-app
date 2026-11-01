import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import img1 from "./assets/img.jpg";
import img2 from "./assets/OIP.webp";
import img3 from "./assets/image3.avif"
import img4 from "./assets/img4.avif"


const etudiantsInitial = [

    { 
        NomPrenom:"Arij Ben Nasrallah",
        Email :"ariijbenna@gmail.com",
        Telephone:"99 999 999",
        Filiere:"Genie logiciel et systeme d'information",
        Groupe:"GLSI 2",
        Ville:"Mahdia",
        image:img1
    },
    {
        NomPrenom: "Slim Boubaker",
        Email: "slim.boubaker@gmail.com",
        Telephone: "99 999 999",
        Filiere: "Genie logiciel",
        Groupe: "GLSI 2",
        Ville: "Mahdia",
        image: img2
    },
    {
        NomPrenom: "Sarra Trabelsi",
        Email: "sarra.trabelsi@gmail.com",
        Telephone: "22 345 678",
        Filiere: "Genie logiciel",
        Groupe: "GLSI 1",
        Ville: "Sousse",
        image: img3
    },
    {
        NomPrenom: "Mariem Khalfallah",
        Email: "mariem.khalfallah@gmail.com",
        Telephone: "27 567 890",
        Filiere: "Genie logiciel",
        Groupe: "GLSI 2",
        Ville: "Tunis",
        image: img4
    }
];
function App(){
  const [etudiants, setEtudiants] = useState(etudiantsInitial);
  const ajouterEtudiant = () => {
    const nouvelEtudiant = {
      NomPrenom: "Nouvel étudiant",
      Email: "nouveau@gmail.com",
      Telephone: "00 000 000",
      Filiere: "Genie logiciel",
      Groupe: "GLSI 2",
      Ville: "Tunis",
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  };

  const [filtre, setFiltre] = useState("");
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.Filiere.includes(filtre)
  );

  const supprimerEtudiant = (index) => {
    const nouvelleListe = etudiants.filter((etudiant, i) => i !== index);
    setEtudiants(nouvelleListe);
  };
  const modifierEtudiant = (index) => {
    const nouveauNom = prompt("Entrez le nouveau nom :");

    if (nouveauNom) {
        const nouvelleListe = [...etudiants];
        nouvelleListe[index].NomPrenom = nouveauNom;
        setEtudiants(nouvelleListe);
    }
  };
  return (
    <>
      <div className="Container">
        <Header/>
        <Navbar/>
        <button onClick={ajouterEtudiant}>
          Ajouter un étudiant
        </button>
        <select value={filtre} onChange={(e) => setFiltre(e.target.value)}>
          <option value="">Toutes les filières</option>
          <option value="Genie logiciel et systeme d'information">
          Genie logiciel et systeme d'information
          </option>
          <option value="Genie logiciel">Genie logiciel</option>
        </select>
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard 
            key={etudiants.indexOf(etudiant)}
            onSupprimer={() => supprimerEtudiant(etudiants.indexOf(etudiant))}
            onModifier={() => modifierEtudiant(etudiants.indexOf(etudiant))}
            NomPrenom={etudiant.NomPrenom}
            Email={etudiant.Email}
            Telephone={etudiant.Telephone}
            Groupe={etudiant.Groupe}
            Ville={etudiant.Ville}
            image={etudiant.image}
          />
        ))}

      </div>
      <Footer/>
    </>
  );
}
export default App;