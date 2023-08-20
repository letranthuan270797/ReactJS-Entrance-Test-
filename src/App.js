import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Note the 'Routes' import
import LoginForm from './components/LoginForm';
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUpForm";
import store from "./components/Redux/store";
import Layout from "./components/Layouts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
