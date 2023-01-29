import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Auth from "./pages/Auth/Auth";
// import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Messages from "./pages/MessagePage/MessagePage";
import Profile from "./pages/ProfilePage/ProfilePage";
import Chat from "./pages/Chat/Chat";
import Friends from "./pages/FriendsPage/FriendsPage"
import FollowersUsers from "./components/FriendsPageContents/FollowersUsers";
import Users from "./components/FriendsPageContents/Users";
import FollowingUsers from "./components/FriendsPageContents/FollowingUsers";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App" >
      <div className="blur" style={{ top: "-18%", right: "0", position: 'fixed' }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem", position: 'fixed' }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/Friends"
          element={user ? <Friends /> : <Navigate to="../auth" />}
        >
          <Route path="" element={<FollowingUsers />} />
          <Route path="followers" element={<FollowersUsers />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

    </div>
  );
}

export default App;