import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
// import image from "./images/image 12.png";
// import star from "../public/images/Star 1.png";
import data from "./data";

// hello world

// A new feature


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
      {/* Hello world man */}
      <div className="card__list">
        {cards}
      </div>
      {/* Another comment */}



    </div>
  );
}

export default App;
