import { Check } from "lucide-react";
import RegisterForm from "./register-form";

const quyenLoi = [
  "Truy cập sớm các bộ sưu tập mới",
  "Giá ưu đãi dành riêng cho thành viên",
  "Miễn phí vận chuyển đơn hàng đầu tiên",
];

export default function RegisterPage() {
  return (
    <div className="flex">
      {/* Bảng trái — Form đăng ký */}
      <RegisterForm />

      {/* Bảng phải — Hình ảnh thương hiệu */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#2c2416] order-1 lg:order-2">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-20 left-16 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-16 w-56 h-56 border border-primary/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-primary/10 rounded-full" />
        <div className="absolute left-16 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          <div>
            <span className="text-2xl font-light tracking-[0.3em] text-[#f5f0e8] uppercase">
              AL Furnitre
            </span>
          </div>

          <div>
            <p className="text-primary text-xs tracking-widest uppercase mb-6">
              Quyền lợi thành viên
            </p>
            <h2 className="text-5xl font-light text-[#f5f0e8] leading-tight mb-8">
              Hơn cả
              <br />
              nội thất
              <br />
              <span className="italic text-primary">thông thường.</span>
            </h2>

            <div className="space-y-4">
              {quyenLoi.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-primary" />
                  </div>
                  <span className="text-[#c4b8a4] text-sm font-light tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Nhận xét khách hàng */}
          <div className="border-l-2 border-primary/40 pl-6">
            <p className="text-[#c4b8a4] text-sm font-light italic leading-relaxed mb-3">
              &ldquo;Chất lượng vượt xa sự mong đợi của tôi. Mỗi món đồ đều như
              được tạo ra riêng cho ngôi nhà của tôi.&rdquo;
            </p>
            <p className="text-primary text-xs tracking-widest uppercase">
              — Chị Minh Anh, Thành viên từ 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
