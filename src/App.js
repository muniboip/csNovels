import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/Styles/Header.css";
import "../src/Styles/Footer.css";
import "../src/Styles/Style.css";
import "../src/Styles/clientStyles.css";
// import '../../cannedsplam/src/App.css'
import "../src/App.css";
import "./Styles/ProfilePage.css";
// import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import Library from "./Pages/Library";
import Books from "./Pages/books";
import { ReadBookPage } from "./Pages/ReadBookPage";
// import ProfilePage from "./Pages/ProfilePage"
import ProfilePage from "./Pages/Profile/ProfilePage"
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    // <HomePage />
    // <SearchPage />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/books" element={<Books />} />
            <Route path="/ReadBookPage" element={<ReadBookPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/search">
          <SearchPage />
        </Route> */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
