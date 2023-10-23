import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./containers/Home";
import Registration from "./containers/Registration";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import ServiceProvider from "./containers/ServiceProvider";
import DemoSite from "./containers/DemoSite";

function App() {
  // useEffect(() => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const wallet = async () => {
  //     if (provider) {
  //       await provider.send("eth_requestAccount", []);
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       console.log(address);
  //       stopImpersonatingAccount(address);
  //       let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  //       const contract = new ethers.Contract(
  //         contractAddress,
  //         DigitalIdentityMangement.abi,
  //         signer
  //       );
  //       console.log(contract);
  //     } else {
  //       alert("Meta Mask is not Installed");
  //     }
  //   };
  // });
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/provider" element={<ServiceProvider />} />
        <Route path="/demo" element={<DemoSite />} />
      </Routes>
    </Router>
  );
}

export default App;
