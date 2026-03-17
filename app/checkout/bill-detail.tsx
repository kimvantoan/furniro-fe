"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup, FieldLabel } from "@/components/ui/field";
import { formatPrice } from "@/utils/formatPrice";

export function BillingForm() {
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed with payment method:", paymentMethod);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Billing Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Thông tin người nhận
              </h1>
            </div>

            {/* Name Fields */}
            <FieldGroup>
              <FieldLabel htmlFor="name">Tên người nhận</FieldLabel>
              <Input
                className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
                id="name"
                placeholder=""
              />
            </FieldGroup>

            {/* Phone */}
            <FieldGroup>
              <FieldLabel htmlFor="phone">Số điện thoại</FieldLabel>
              <Input
                className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
                id="phone"
                type="tel"
                placeholder=""
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="additionalInfo">
                Địa chỉ nhận hàng
              </FieldLabel>
              <Textarea
                id="additionalInfo"
                className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm"
                rows={4}
              />
            </FieldGroup>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Đơn hàng</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Product Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium text-gray-900">Product</p>
                    <p className="text-sm text-gray-500">Subtotal</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">x 1</p>
                    <p className="text-sm text-gray-500">
                      {formatPrice(250000)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(250000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total</span>
                    <span className="text-lg font-bold text-amber-600">
                      {formatPrice(250000)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium text-gray-900">Phương thúc thanh toán</h3>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  {/* <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer">
                    <RadioGroupItem
                      value="bank-transfer"
                      id="bank-transfer"
                      className="mt-1"
                    />
                    <label
                      htmlFor="bank-transfer"
                      className="flex-1 cursor-pointer"
                    >
                      <p className="font-medium text-gray-900">
                        Direct Bank Transfer
                      </p>
                      <p className="text-sm text-gray-500">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.
                      </p>
                    </label>
                  </div> */}

                  <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer">
                    <RadioGroupItem
                      value="cash-on-delivery"
                      id="cash-on-delivery"
                      className="mt-1"
                    />
                    <label
                      htmlFor="cash-on-delivery"
                      className="flex-1 cursor-pointer"
                    >
                      <p className="font-medium text-gray-900">
                        Thanh toán khi nhận hàng
                      </p>
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Place Order Button */}
              <form onSubmit={handleSubmit}>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full py-6  font-medium border-gray-400 hover:bg-gray-100"
                >
                  Đặt hàng
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
