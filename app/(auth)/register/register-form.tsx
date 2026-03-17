"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import  { useState } from 'react'

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
  
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-16 order-2 lg:order-1">
    <div className="w-full max-w-md">
      <div className="lg:hidden mb-10 text-center">
        <span className="text-xl font-light tracking-[0.3em] text-[#2c2416] uppercase">
          AL Furnitre
        </span>
      </div>

      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-primary uppercase mb-3">
          Tham gia ngay hôm nay
        </p>
        <h1 className="text-4xl font-light text-[#2c2416] mb-2">
          Tạo tài khoản
          <br />
          <span className="italic">của bạn</span>
        </h1>
      </div>

      <form className="space-y-5">
        {/* Họ và tên */}
        <div className="space-y-2">
          <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
            Họ tên
          </Label>
          <Input
            type="text"
            placeholder="Nguyễn Văn A"
            className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
          />
        </div>

        {/* Email */}
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

        {/* Số điện thoại */}
        <div className="space-y-2">
          <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
            Số điện thoại
          </Label>
          <Input
            type="tel"
            placeholder="0912 345 678"
            className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
          />
        </div>

        {/* Mật khẩu */}
        <div className="space-y-2">
          <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
            Mật khẩu
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Tối thiểu 8 ký tự"
              className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 pr-10 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-3 text-primary hover:text-[#2c2416] transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Xác nhận mật khẩu */}
        <div className="space-y-2">
          <Label className="text-xs tracking-widest uppercase text-[#7a6a52] font-normal">
            Xác nhận mật khẩu
          </Label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              className="border-0 border-b border-[#e0d8cc] rounded-none bg-transparent px-0 py-3 pr-10 text-[#2c2416] placeholder:text-[#c4b8a4] focus-visible:ring-0 focus-visible:border-primary transition-colors text-base"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-0 top-3 text-primary hover:text-[#2c2416] transition-colors"
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Nút đăng ký */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-[#2c2416] text-white rounded-none h-12 text-sm tracking-[0.2em] uppercase font-normal transition-all duration-300 group"
        >
          Tạo Tài Khoản
          <ArrowRight
            size={14}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-primary">
        Đã có tài khoản?{" "}
        <Link
          href="/login"
          className="text-primary hover:text-[#2c2416] transition-colors font-medium"
        >
          Đăng nhập
        </Link>
      </p>
    </div>
  </div>
  )
}

export default RegisterForm