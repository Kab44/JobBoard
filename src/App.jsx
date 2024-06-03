import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Jobs from "./components/jobs/Jobs";

const JOBS = [
  {
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sydney",
  },
  {
    title: "Agent de Sécurité - Pantin",
    contractType: "CDI",
    country: "FRANCE",
    city: "Pantin",
  },
  {
    title: "Responsable d'Atelier (H/F)",
    contractType: "CDD",
    country: "FRANCE",
    city: "Paris",
  },
  {
    title: "Chef de Projets",
    contractType: "CDD",
    country: "FRANCE",
    city: "Paris",
  },
  {
    title: "Développeur React.js",
    contractType: "CDI",
    country: "FRANCE",
    city: "Paris",
  },
  {
    title: "Sales Associate Stockholm",
    contractType: "CDI",
    country: "Suède",
    city: "Stockholm",
  },
  {
    title: "Vendeur/se - Crans Montana",
    contractType: "CDI",
    country: "SUISSE",
    city: "Crans-Montana",
  },
  {
    title: "CRM & Data Quality Analyst",
    contractType: "CDI",
    country: "USA",
    city: "New-York",
  },
  {
    title: "Infirmier (H/F)",
    contractType: "CDI",
    country: "FRANCE",
    city: "Pantin",
  },
];

const CLASS_NAMES = ['red', 'green', 'yellow', 'blue', 'salmon']

function App() {
  const classNameSelector = (index) => {
    let realIndex = index;
    const length = CLASS_NAMES.length;
    while (realIndex >= length) {
      realIndex -= length;
    }
    return CLASS_NAMES[realIndex];
  };
  return (
    <>
      <Header title="The Job Board" />
      <Jobs list={JOBS.map((j, i) => ({...j, className: classNameSelector(i)}))} />
      <Footer text="Made with <strong>React</strong> at <strong>Le Reacteur</strong> By <strong>Kamil</strong>"></Footer>
    </>
  );
}

export default App;
