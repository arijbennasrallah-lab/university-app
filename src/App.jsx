import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import img1 from "./assets/img.jpg";
import img2 from "./assets/OIP.webp";
import img3 from "./assets/image3.avif"
import img4 from "./assets/img4.avif"

const etudiants = [

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
    return (
        <>
            <div className="Container">
                <Header/>
                <Navbar/>
                {etudiants.map((etudiant, index) => (
                    <StudentCard 
                        key={index}
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