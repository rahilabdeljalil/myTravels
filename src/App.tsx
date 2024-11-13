import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "./App.css";
import Data from "./data.tsx";
console.log(Data);

function App() {
  let cards = Data.map((item) => {
    return <Cards 
     key={item.img}
     img={item.img}
     location={item.location}
     title={item.title}
     date={item.date}
     description={item.description} />;
  });
  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;
