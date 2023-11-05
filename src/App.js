import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from './pages/homepage';
import Feed from "./pages/feed";
import { Navbar, Feed as FeedComponent } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:news" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
