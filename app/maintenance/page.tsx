import { useState, useEffect } from "react";

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    issue: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [requests, setRequests] = useState<any[]>([]); // state to hold fetched requests

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/maintenance');
      if (response.ok) {
        const data = await response.json();
        setRequests(data); // set state with fetched data
      }
    } catch (error) {
      console.error("Failed to fetch maintenance requests", error);
    }
  };

  useEffect(() => {
    fetchRequests(); // fetch data on load
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Submitting...");

    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatusMessage(result.message);
        setFormData({ name: "", email: "", unit: "", issue: "" }); // reset form
        fetchRequests(); // fetch updated data
      } else {
        const error = await response.json();
        setStatusMessage(error.message);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setStatusMessage("Failed to submit request.");
    }
  };

  // ...
