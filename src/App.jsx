import { Routes, Route } from "react-router-dom";
// pubic pages
import Login from "./pages/Login";
import Home from "./pages/Home"

import ProtectedRoute from "./components/ProtectedRoute";
// pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import Attendance from "./pages/admin/Attendance";
import Fees from "./pages/admin/Fees";
import Parents from "./pages/admin/Parents";
import Schools from "./pages/admin/Schools";
import Students from "./pages/admin/Students";
import Teachers from "./pages/admin/Teachers";
import ParentDashboard from "./pages/parent/ParentDashboard";
import ParentLayout from "./pages/parent/ParentLayout";
import GradeEntry from "./pages/teacher/GradeEntry";
import MarkAttendance from "./pages/teacher/MarkAttendance";
import TeacherDashbord from "./pages/teacher/TeacherDashboard";
import TeacherLayout from "./pages/teacher/TeacherLayout";

 



function App() {
  return (
    // public pages
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      
      
      
        <Route path="/admin" element={ <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>}
        />
       
        <Route index element={ <AdminDashboard/>} />
        <Route path="schools" element={<Schools/> } />
        <Route path="teachers" element={<Teachers/> } />
        <Route path="students" element={<Students />} />
        <Route path="parents" element={<Parents />} />
        <Route path="fees" element={<Fees />} />
        <Route path="attendance" element={<Attendance />} />
    
      <Route path="/teacher" element={<ProtectedRoute allowedRole="teacher">

        <TeacherLayout/>
      </ProtectedRoute>} />
      <Route index element={<TeacherDashbord />} />
      <Route path="attendance" element={<MarkAttendance />} />
      <Route path="grade" element={<GradeEntry />} />
      
      <Route path="/parent" element={<ProtectedRoute>
        <ParentLayout/>
      </ProtectedRoute>} />
      <Route index element={ <ParentDashboard/>} />
      </Routes>
    
  );
  
};

export default App;


