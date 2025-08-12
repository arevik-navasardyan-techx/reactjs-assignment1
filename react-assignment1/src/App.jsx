import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
// import AliceImage from "./assets/Alice.jpg";
import BobImage from "./assets/Bob.jpeg";
import MarkImage from "./assets/Mark.webp";

function App() {
  return (
    <>
      <h1>Our Professionals</h1>
      <div className="card-container">
        <ProfileCard
          name="Alice"
          title="Maneger"
          imageURL="https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/professional-headshot-photography-linkedin-singapore-2.jpg"
        />
        <ProfileCard name="Bob" title="Engineer" imageURL={BobImage} />
        <ProfileCard name="Mark" title="Director" imageURL={MarkImage} />
      </div>
    </>
  );
}

export default App;
