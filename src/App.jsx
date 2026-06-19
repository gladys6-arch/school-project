import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashbord";
import TeacherDashbord from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import ProtectRoute from "./pages/ProtectRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="adnimdashboard" element={<AdminDashboard />} />
        <Route path="teacherdashboard" element={ <TeacherDashbord/>} />
        <Route path="parentdasboard" element={ <ParentDashboard/>} />
        <Route path="protectroute" element={ <ProtectRoute/>} />
      </Routes>
    </>
  );
  
};

export default App;


