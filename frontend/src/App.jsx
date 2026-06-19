import { Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={user ? <HomePage  /> : <AuthPage setUser={setUser} />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        <Route path="/create" element={ user ? <CreatePage /> : <AuthPage setUser={setUser} /> } />
        <Route path="/note/:id" element={user ? <NoteDetailPage /> : <AuthPage setUser={setUser} />} />
      </Routes>
    </div>
  );
};
export default App;