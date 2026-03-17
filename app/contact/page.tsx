import { MapPin, Phone, Clock } from "lucide-react";
import Breadcrumb from "../product/[slug]/bread-crumb";
import ContactForm from "./contact-form";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    lines: ["236 5th SE Avenue, New", "York NY10000, United", "States"],
  },
  {
    icon: Phone,
    title: "Số điện thoại",
    lines: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },
  {
    icon: Clock,
    title: "Thời gian",
    lines: ["Thứ 2 - Thứ 6: 9:00 - 22:00", "Thứ 7 - Chủ nhật: 9:00 - 21:00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]}
      />
      <section className="w-full max-w-4xl mx-auto px-6 py-16 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-stone-900 tracking-wide mb-3">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm mx-auto">
            Để biết thêm thông tin về sản phẩm và dịch vụ của chúng tôi, vui
            lòng gửi email cho chúng tôi. Nhân viên của chúng tôi luôn sẵn sàng
            hỗ trợ bạn. Đừng ngần ngại!
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
