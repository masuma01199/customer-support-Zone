import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerService from "./Components/CustomerService/CustomerService";
import Navbar from "./Components/Navbar/Navbar";

const fetchCustomer = async () => {
  const res = await fetch("/customers.json");
  return res.json();
};
const customerPromise = fetchCustomer();
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h3>Data is loading...</h3>}>
        <CustomerService customerPromise={customerPromise}></CustomerService>
      </Suspense>
    </>
  );
}

export default App;
