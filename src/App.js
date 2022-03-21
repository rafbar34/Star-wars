
import { StarWarsInfo } from "../src/Components/StarWarsInterface/StarWarsInterface";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import {UserAuthContextProvider} from "./UserAuthContext/UserAuthContext"
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/"
            element={
              <ProtectedRoute>
                <StarWarsInfo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
