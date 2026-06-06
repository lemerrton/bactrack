"use client";

import { useState } from "react";
import Link from "next/link";

export default function PreOrder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="inline-block bg-label-white border border-warm-gray px-4 py-2 mb-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono">
              Confirmed
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            You&apos;re in.
          </h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
            Your bacctrack vault pre-order has been received. A confirmation
            email is on its way to{" "}
            <span className="text-black">{formData.email}</span>.
          </p>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-10">
            You won&apos;t be charged until we ship. Estimated delivery Q1 2027.
          </p>
          <Link
            href="/"
            className="inline-block text-[11px] tracking-[0.3em] uppercase border border-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl tracking-[-0.02em] font-medium text-black">
              bacctrack
            </span>
          </Link>
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
          >
            Back
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-label-white border border-warm-gray px-4 py-2 mb-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-mono">
              Pre-Order
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
            Reserve your vault
          </h1>
          <p className="text-sm text-gray-500 font-light">
            $149 USD &middot; No charge until shipping &middot; 100% refundable
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-label-white border border-warm-gray p-6 mb-10 flex items-center gap-6">
          <div className="w-20 h-20 bg-white border border-warm-gray flex items-center justify-center shrink-0">
            <div className="w-10 h-14 border border-gray-300 rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 border border-gray-200 rounded-full" />
            </div>
          </div>
          <div>
            <span className="text-sm font-light block">bacctrack Vault</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
              Vault + USB-C Cable + App Access + Free Shipping
            </span>
          </div>
          <span className="text-lg font-extralight ml-auto">$149</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono block mb-4">
              Contact Information
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-xs text-gray-500 font-light block mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-xs text-gray-500 font-light block mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="text-xs text-gray-500 font-light block mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-xs text-gray-500 font-light block mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                placeholder="(619) 555-0100"
              />
            </div>
          </div>

          {/* Shipping */}
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-mono block mb-4">
              Shipping Address
            </span>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="address"
                  className="text-xs text-gray-500 font-light block mb-2"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  placeholder="123 College Ave"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="text-xs text-gray-500 font-light block mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="San Diego"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="text-xs text-gray-500 font-light block mb-2"
                  >
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="CA"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="text-xs text-gray-500 font-light block mb-2"
                  >
                    ZIP *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors"
                    placeholder="92182"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 pt-8">
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-sm font-light">Total</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extralight">$149</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-mono">
                  USD
                </span>
              </div>
            </div>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 mb-4">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full text-[11px] tracking-[0.3em] uppercase bg-black text-white py-4 hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Processing..."
                : "Confirm Pre-Order — $149"}
            </button>

            <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400 font-mono text-center mt-4">
              No charge until shipping &middot; 100% refundable &middot;
              Estimated Q1 2027
            </p>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-base tracking-[-0.02em] font-medium text-black">
            bacctrack
          </span>
          <span className="text-[10px] tracking-[0.2em] text-gray-300 font-mono">
            &copy; 2026 bacctrack
          </span>
        </div>
      </footer>
    </div>
  );
}
