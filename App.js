

import NavBar from "./Components/NavBar";
import CodeForInterview from "./Components/CodeForInterview";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<CodeForInterview />}></Route>
        <Route exact path="/all" element={<AllUsers />} ></Route>
        <Route exact path="/add" element={<AddUser />} ></Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
