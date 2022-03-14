import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NavBar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/activities/*"
          element={
            <>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Routes>
                  <Route path="/" element={<ActivityDashboard />} />
                  <Route path=":id" element={<ActivityDetails />} />
                  <Route
                    path="/create"
                    element={<ActivityForm key={location.key} />}
                  />
                  <Route
                    path="/manage/:id"
                    element={<ActivityForm key={location.key} />}
                  />
                </Routes>
              </Container>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default observer(App);
