import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerService from "./Components/CustomerService/CustomerService";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchCustomer = async () => {
  const res = await fetch("/customers.json");
  return res.json();
};
const customerPromise = fetchCustomer();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToProgress = (ticket) => {
    const isExist = inProgress.find((t) => t.id === ticket.id);
    if (!isExist) {
      setInProgress([...inProgress, ticket]);
      toast.success(`Ticket #${ticket.id} added to In Progress!`);
    } else {
      toast.warn("This ticket is already in progress.");
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.info("Ticket marked as Resolved!");
  };

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <Suspense fallback={<h3>Data is loading...</h3>}>
        <CustomerService
          customerPromise={customerPromise}
          inProgress={inProgress}
          resolved={resolved}
          handleAddToProgress={handleAddToProgress}
          handleComplete={handleComplete}
        />
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
