"use client";

import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-16">
      <div className="w-full max-w-md">
        <div className="lg:hidden mb-10 text-center">
          <span className="text-xl font-light tracking-[0.3em] text-[#2c2416] uppercase">
            AL Furnitre
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-light text-[#2c2416] mb-2">
            Đăng nhập vào
            <br />
            <span className="italic">tài khoản của bạn</span>
          </h1>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
              Địa chỉ Email
            </Label>
            <Input
              type="email"
              placeholder="example@email.com"
              className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
                Mật khẩu
              </Label>
              <Link
                href="/quen-mat-khau"
                className="text-xs text-primary hover:text-[#a8893e] transition-colors tracking-wide"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 pr-10 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-3 text-[#9a8060] hover:text-[#2c2416] transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2c2416] hover:bg-primary text-white rounded-none h-12 text-sm tracking-[0.2em] uppercase font-normal transition-all duration-300 group"
          >
            Đăng Nhập
            <ArrowRight
              size={14}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>

          <div className="relative">
            <Separator className="bg-[#e0d8cc]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-[#9a8060] tracking-widest uppercase">
              hoặc
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full border-[#e0d8cc] hover:border-primary hover:bg-[#faf8f4] text-[#2c2416] rounded-none h-12 text-sm tracking-wide font-normal transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Tiếp tục với Google
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-[#9a8060]">
          Chưa có tài khoản?{" "}
          <Link
            href="/register"
            className="text-primary hover:text-[#2c2416] transition-colors font-medium"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
