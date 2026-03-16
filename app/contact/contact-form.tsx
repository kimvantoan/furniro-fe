"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    console.log("Submitted:", form);
  };
  return (
    <div className="flex-1 space-y-6">
      <div>
        <label className="block text-stone-800 font-semibold text-sm mb-2">
          Your name
        </label>
        <Input
          name="name"
          placeholder="Abc"
          value={form.name}
          onChange={handleChange}
          className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
        />
      </div>

      <div>
        <label className="block text-stone-800 font-semibold text-sm mb-2">
          Email address
        </label>
        <Input
          name="email"
          type="email"
          placeholder="Abc@def.com"
          value={form.email}
          onChange={handleChange}
          className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-[#b88e2f] text-sm py-5"
        />
      </div>

      <div>
        <label className="block text-stone-800 font-semibold text-sm mb-2">
          Subject
        </label>
        <Input
          name="subject"
          placeholder="This is an optional"
          value={form.subject}
          onChange={handleChange}
          className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-[#b88e2f] text-sm py-5"
        />
      </div>

      <div>
        <label className="block text-stone-800 font-semibold text-sm mb-2">
          Message
        </label>
        <Textarea
          name="message"
          placeholder="Hi! I'd like to ask about"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-[#b88e2f] text-sm resize-none"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="bg-[#b88e2f] hover:bg-[#9a7528] text-white px-10 py-5 rounded-md text-sm font-semibold tracking-wide transition-colors duration-200"
      >
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
