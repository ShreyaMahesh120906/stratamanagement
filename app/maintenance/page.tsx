const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Request submitted successfully!");
        setFormData({ name: "", email: "", unit: "", issue: "" }); // Reset the form
        // Fetch the updated list of requests
        const updatedResponse = await fetch('/api/maintenance');
        const updatedData = await updatedResponse.json();
        setMaintenanceRequests(updatedData);
        console.log(updatedData); // Log the updated maintenance requests to check if they are correctly fetched
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request. Please try again.");
    }
};
