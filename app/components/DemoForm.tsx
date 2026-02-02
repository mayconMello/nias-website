"use client";

import { useState } from "react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Obrigado! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", company: "" });
      } else {
        setMessage("❌ Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setMessage("❌ Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData({ ...formData, phone: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  return (
    <section id="demo" className="py-32 px-6 bg-zinc/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
            Pronto para <span className="text-nias-blue">acelerar</span>
            <br />
            sua análise de crédito?
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background border border-zinc/20 text-foreground focus:outline-none focus:border-nias-blue transition-colors"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Email corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background border border-zinc/20 text-foreground focus:outline-none focus:border-nias-blue transition-colors"
              placeholder="seu.email@empresa.com.br"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
              className="w-full px-4 py-3 rounded-lg bg-background border border-zinc/20 text-foreground focus:outline-none focus:border-nias-blue transition-colors"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Empresa *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background border border-zinc/20 text-foreground focus:outline-none focus:border-nias-blue transition-colors"
              placeholder="Nome da sua empresa"
            />
          </div>

          {/* <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 rounded-full bg-nias-blue text-foreground font-medium hover:bg-nias-blue/90 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Solicitar demonstração"}
          </button> */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar formulário"}
          </button>

          {message && (
            <p className="text-center text-sm mt-4">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
