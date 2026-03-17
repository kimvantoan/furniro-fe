import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Bảng trái — Hình ảnh thương hiệu */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#f5f0e8]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-16 right-16 w-48 h-48 border border-primary/30 rounded-full" />
        <div className="absolute top-24 right-24 w-32 h-32 border border-primary/20 rounded-full" />
        <div className="absolute bottom-32 left-12 w-24 h-24 bg-primary/10 rounded-full" />

        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          <div>
            <span className="text-2xl font-light tracking-[0.3em] text-[#2c2416] uppercase">
              AL Furnitre
            </span>
          </div>

          <div>
            <p className="text-[#9a8060] text-sm tracking-widest uppercase mb-6">
              Không gian tinh tế
            </p>
            <h2 className="text-6xl font-light text-[#2c2416] leading-tight mb-6">
              Không gian
              <br />
              đẹp,
              <br />
              <span className="italic text-primary">dành cho bạn.</span>
            </h2>
            <p className="text-[#7a6a52] text-base font-light leading-relaxed max-w-xs">
              Khám phá hơn 50 bộ sưu tập nội thất thủ công cao cấp được thiết kế
              cho cuộc sống hiện đại.
            </p>
          </div>

          <div className="flex gap-12">
            {[
              { num: "50+", label: "Bộ sưu tập" },
              { num: "2K+", label: "Sản phẩm" },
              { num: "98%", label: "Hài lòng" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-light text-[#2c2416]">{s.num}</p>
                <p className="text-xs tracking-widest text-[#9a8060] uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bảng phải — Form đăng nhập */}
      <LoginForm />
    </div>
  );
}
