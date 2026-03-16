import { MapPin, Phone, Clock } from "lucide-react";
import Breadcrumb from "../product/[slug]/bread-crumb";
import ContactForm from "./contact-form";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["236 5th SE Avenue, New", "York NY10000, United", "States"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },
  {
    icon: Clock,
    title: "Working Time",
    lines: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="w-full max-w-4xl mx-auto px-6 py-16 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-stone-900 tracking-wide mb-3">
            Get In Touch With Us
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm mx-auto">
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row gap-14">
          {/* Left — Contact Info */}
          <div className="md:w-[260px] flex-shrink-0 space-y-10">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-stone-800 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-stone-900 font-semibold text-[15px] mb-1.5">
                    {title}
                  </p>
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-stone-500 text-sm leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-stone-200 self-stretch" />

          {/* Right — Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
