import React, { useState } from "react";

interface HostingServiceRequestFormProps {
  selectedPackage: string;
  onClose: () => void;
}

const HostingServiceRequestForm = 
({ selectedPackage, onClose }: HostingServiceRequestFormProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hostingRequirement, setHostingRequirement] = useState("");
  const [technicalSpecs, setTechnicalSpecs] = useState("");
  
  const hostingRequirements = ["Bandwidth", "Storage", "Databases", "Security", "Backup Services"];
  const technicalSpecifications = ["Linux OS", "Windows OS", "Shared Hosting", "VPS Hosting", "Dedicated Server"];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
    hostingRequirement: "",
    technicalSpecs: "",
  });

  // Email and phone validation
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/; // Basic validation for 10-digit phone number
    return re.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFormErrors({
      email: "",
      phone: "",
      hostingRequirement: "",
      technicalSpecs: "",
    });

    let valid = true;

    // Frontend validation for email, phone, and other fields
    if (!email || !validateEmail(email)) {
      setFormErrors((prev) => ({ ...prev, email: "Please enter a valid email." }));
      valid = false;
    }

    if (!phone || !validatePhone(phone)) {
      setFormErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number (10 digits)." }));
      valid = false;
    }

    if (!hostingRequirement) {
      setFormErrors((prev) => ({ ...prev, hostingRequirement: "Please select a hosting requirement." }));
      valid = false;
    }

    if (!technicalSpecs) {
      setFormErrors((prev) => ({ ...prev, technicalSpecs: "Please select a technical specification." }));
      valid = false;
    }

    if (!valid) {
      setLoading(false);
      return; // Stop form submission if there are validation errors
    }

    const formData = {
      selectedPackage,
      email,
      phone,
      hostingRequirement,
      technicalSpecs,
    };

    console.log("Sending formData:", formData);

    try {
      const response = await fetch("/api/forms/hostingservicerequestform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      console.log("Form submitted successfully!");
      setEmail("");
      setPhone(""); 
      setHostingRequirement("");
      setTechnicalSpecs(""); 
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Request Hosting Service</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 pb-12">
          <div>
            <label className="block font-semibold">Selected Package</label>
            <input type="text" value={selectedPackage} readOnly className="w-full border px-3 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
            {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
          </div>

          <div>
            <label className="block font-semibold">Hosting Requirement</label>
            <select
              value={hostingRequirement}
              onChange={(e) => setHostingRequirement(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select a Requirement</option>
              {hostingRequirements.map((req, index) => (
                <option key={index} value={req}>{req}</option>
              ))}
            </select>
            {formErrors.hostingRequirement && <p className="text-red-500 text-sm">{formErrors.hostingRequirement}</p>}
          </div>

          <div>
            <label className="block font-semibold">Technical Specification</label>
            <select
              value={technicalSpecs}
              onChange={(e) => setTechnicalSpecs(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select a Specification</option>
              {technicalSpecifications.map((spec, index) => (
                <option key={index} value={spec}>{spec}</option>
              ))}
            </select>
            {formErrors.technicalSpecs && <p className="text-red-500 text-sm">{formErrors.technicalSpecs}</p>}
          </div>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-900 text-white rounded-md">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HostingServiceRequestForm;
