import { Route, Routes } from "react-router-dom";
import Home from "./components/mainHomeCompo/Home";
import Search from "./components/mainHomeCompo/Search";
import SignIn from "./components/mainHomeCompo/SignIn";
import SignUp from "./components/mainHomeCompo/SignUp";
import MainPrivateRouter from "./components/privateRouters/MainPrivateRouter";
import Profile from "./components/mainHomeCompo/Profile";
import AgentSignIn from "./components/agentCompo/AgentSignIn";
import StaffDashboard from "./components/staffCompo/StaffDashboard";
import Dashboard from "./components/agentCompo/Dashboard";
import Listings from "./components/agentCompo/Listing";
import CreateListing from "./components/agentCompo/CreateListing";
import Listing from "./components/agentCompo/Listing"; 
import AgentSignUp from "./components/agentCompo/AgentSignUp";
import CreateListingPage from "./components/agentCompo/CreateListingPage";
import Contact from "./components/mainHomeCompo/Contact";
import ShowListing from "./components/agentCompo/ShowListing";

function App() {
  return (
    <>
      <Routes>
        <Route exacct path="/" element={<Home />} />
        <Route exacct path="/search" element={<Search />} />
        <Route exacct path="/listing" element={<Contact />} />
        <Route exacct path="/listing/:listingId" element={<Listings />} />
        <Route exacct path="/sign-in" element={<SignIn />} />
        <Route exacct path="/sign-up" element={<SignUp />} />
        <Route element={<MainPrivateRouter />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>

        {/* Agents */}
        <Route exacct path="agent-dashboard" element={<Dashboard />} />
        <Route exact path="/agent-sign-in" element={<AgentSignIn />} /> 
        <Route exact path="/agent-sign-up" element={<AgentSignUp />} />
        <Route exact path="/listing/:listingId" element={<Listing />} />
        <Route exact path="/create-lists" element={<CreateListing />} /> 
        <Route exact path="/apartment-lists" element={<CreateListingPage />} /> 
        <Route exact path="/apartment-lists" element={<ShowListing />} /> 
        <Route exact path="/create-listing" element={<CreateListing />} />

        {/* Staff  */}
        <Route exacct path="staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </>
  );
}

export default App;
