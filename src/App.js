import { Route, Routes } from "react-router-dom"; //will help define paths in url and which components to load- switch specifies only ONE at a time
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation"

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        
        <Route path='/favorites' element={<FavoritesPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
