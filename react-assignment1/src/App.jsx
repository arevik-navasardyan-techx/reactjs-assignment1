import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import AliceImage from "./assets/Alice.jpg";
import BobImage from "./assets/Bob.jpeg";
import MarkImage from "./assets/Mark.webp";

function App() {
  return (
    <>
      <ProfileCard name="Alice" title="Maneger" imageURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.photostudio308.com%2Fportfolio-item%2Fphoto-studio-308-professional-headshots-new-york-city-2022-ii%2F&psig=AOvVaw3Ej5TV5Yzx7fhsyrUmQQ3S&ust=1755058735659000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDSr7a1hI8DFQAAAAAdAAAAABAE" />
      <ProfileCard name="Bob" title="Engineer" imageURL={BobImage} />
      <ProfileCard name="Mark" title="Director" imageURL={MarkImage} />
    </>
  );
}

export default App;
