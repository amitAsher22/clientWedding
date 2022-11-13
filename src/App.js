import "./App.css";
import NavBar from "./components/navBar/Navbar";
import { Route, Routes } from "react-router-dom";

/// components
import Home from "./pages/HomePage/Home";
import SubNavBar from "./components/navBar/SubNavBar";
import EventsGardens from "./pages/celebratePlace/EventsGardens";
import EventHall from "./pages/celebratePlace/EventHall";
import BusinessEvents from "./pages/celebratePlace/BusinessEvents";
import EveningDress from "./pages/Bride&Groom/EveningDress";
import GroomSuit from "./pages/Bride&Groom/GroomSuit";
import WeddingDress from "./pages/Bride&Groom/WeddingDress";
import EventsPhotography from "./pages/Photographs/EventsPhotography";
import Stills from "./pages/Photographs/Stills";
import Video from "./pages/Photographs/Video";
import Dj from "./pages/music/Dj";
import ReceptionBands from "./pages/music/ReceptionBands";
import RecordingStudio from "./pages/music/RecordingStudio";
import Bar from "./pages/cateringAndBar/Bar";
import Catering from "./pages/cateringAndBar/Catering";
import SweetsBar from "./pages/cateringAndBar/SweetsBar";
import EventsGardensHall from "./pages/Deals/EventsGardensHall";
import WeddingDeals from "./pages/Deals/WeddingDeals";
import LiksPage from "./pages/Likes/LikesPage";
import Kamakesef from "./pages/UsefulTools/Kamakesef";
import QandA from "./pages/UsefulTools/QandA";
import CardById from "./components/cardById/CardById";
import CardsFilter from "./components/cardsFilter/CardsFilter";

function App() {
  return (
    <>
      <SubNavBar />
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LikesPage" element={<LiksPage />} />
          <Route path="/Supply/:idUser" element={<CardById />} />
          <Route path="/wedding" element={<CardsFilter />}>
            <Route path="EventsGardens" element={<EventsGardens />} />
            <Route path="EventHall" element={<EventHall />} />
            <Route path="BusinessEvents" element={<BusinessEvents />} />
            <Route path="EveningDress" element={<EveningDress />} />
            <Route path="GroomSuit" element={<GroomSuit />} />
            <Route path="WeddingDress" element={<WeddingDress />} />
            <Route path="EventsPhotography" element={<EventsPhotography />} />
            <Route path="Stills" element={<Stills />} />
            <Route path="Video" element={<Video />} />
            <Route path="Dj" element={<Dj />} />
            <Route path="ReceptionBands" element={<ReceptionBands />} />
            <Route path="RecordingStudio" element={<RecordingStudio />} />
            <Route path="Bar" element={<Bar />} />
            <Route path="Catering" element={<Catering />} />
            <Route path="SweetsBar" element={<SweetsBar />} />
            <Route path="EventsGardensHall" element={<EventsGardensHall />} />
            <Route path="WeddingDeals" element={<WeddingDeals />} />
            <Route path="Kamakesef" element={<Kamakesef />} />
            <Route path="QandA" element={<QandA />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
