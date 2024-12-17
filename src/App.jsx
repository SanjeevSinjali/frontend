import {
  About,
  Contact,
  Employer,
  Home,
  Jobs,
  Login,
  Register,
  Profile,
  CreateJob,
} from "./pages";
import { Footer, JobDetails, Navbar, JobApplyForm } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideNavigation = ["/dashboard", "/profile", "/create-job"];

  const isNavigationHidden = hideNavigation.includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      {isNavigationHidden ? "" : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Employer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/job-details/:id/apply" element={<JobApplyForm />} />
      </Routes>

      {isNavigationHidden ? "" : <Footer />}
    </div>
  );
};

export default App;
