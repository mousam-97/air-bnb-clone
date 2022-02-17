import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
// import image from "./images/image 12.png";
// import star from "../public/images/Star 1.png";
import data from "./data";



function App() {
  const cards = data.map(item => {
    return (<Card
      key={item.id}
      item ={item}

      />);
     

  });
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="card__list">
        {cards}
      </div>



    </div>
  );
}

export default App;
