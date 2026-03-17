import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'

const CartTotal = ({subtotal}: {subtotal: number}) => {
  return (
    <div className="w-full lg:w-[320px] bg-[#f9f1e7] px-8 py-10 flex-shrink-0">
    <h2 className="text-2xl font-bold text-stone-900 tracking-wide mb-8 text-center">
      Tổng giá
    </h2>

    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <span className="text-stone-700 font-semibold text-sm tracking-wide">
          Thành tiền
        </span>
        <span className="text-stone-400 text-sm">
          {formatPrice(subtotal)}
        </span>
      </div>

      <Separator className="bg-stone-200" />

      <div className="flex justify-between items-center">
        <span className="text-stone-700 font-semibold text-sm tracking-wide">
          Tổng giá
        </span>
        <span className="text-[#b88e2f] font-bold text-lg">
          {formatPrice(subtotal)}
        </span>
      </div>
    </div>

    <Button
      className="w-full mt-10 bg-transparent border-2 border-stone-900 text-stone-900 rounded-xl py-6 text-sm tracking-widest uppercase font-semibold
        hover:bg-stone-900 hover:text-white transition-all duration-300"
      variant="outline"
    >
      <Link href="/checkout">Thanh toán</Link>
    </Button>
  </div>
  )
}

export default CartTotal