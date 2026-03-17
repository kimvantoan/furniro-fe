import { Trophy, ShieldCheck, PackageCheck, Headphones } from "lucide-react";

const FeatureBanner = () => {
  const features = [
    {
      icon: Trophy,
      title: "Chất lượng cao",
      subtitle: "Chế tác từ vật liệu cao cấp.",
    },
    {
      icon: ShieldCheck,
      title: "Bảo hành",
      subtitle: "Trên 2 năm",
    },
    {
      icon: PackageCheck,
      title: "Miễn phí vận chuyển",
      subtitle: "Trên 2 triệu đồng",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24 / 7",
      subtitle: "Hỗ trợ chuyên dụng",
    },
  ];
  return (
    <section className="w-full bg-[#f9f1e7] py-14 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="flex items-center gap-4 group">
                <Icon
                  size={42}
                  strokeWidth={1.3}
                  className="text-stone-800 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <div>
                  <p className="text-stone-900 font-bold text-[15px] leading-tight">
                    {feat.title}
                  </p>
                  <p className="text-stone-500 text-sm mt-0.5">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
