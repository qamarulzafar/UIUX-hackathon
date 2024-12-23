'use client';

import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "../Components/contexts/cart-context"; // Import useCart

export default function CheckoutForm() {
  const methods = useForm();
  const { cartItems } = useCart(); // Get cart items from context

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
   <FormProvider {...methods}>
      <div className="max-w-[1200px] md:mx-40 p-6">
      <div className="grid lg:grid-cols-2 gap-48">
        <div>
          <h2 className="text-2xl mb-6">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FormItem>
                  <FormLabel className="text-sm">First Name</FormLabel>
                  <FormControl>
                    <Input className="mt-1 border-gray-200" />
                  </FormControl>
                </FormItem>
              </div>
              <div>
                <FormItem>
                  <FormLabel className="text-sm">Last Name</FormLabel>
                  <FormControl>
                    <Input className="mt-1 border-gray-200" />
                  </FormControl>
                </FormItem>
              </div>
            </div>

            <FormItem>
              <FormLabel className="text-sm">Company Name (Optional)</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Country / Region</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger className="mt-1 border-gray-200">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Province</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger className="mt-1 border-gray-200">
                    <SelectValue placeholder="Select a province" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Western Province">
                    Western Province
                  </SelectItem>
                  <SelectItem value="Central Province">
                    Central Province
                  </SelectItem>
                  <SelectItem value="Southern Province">
                    Southern Province
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Street address</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Town / City</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">ZIP Code</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Phone</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Email Address</FormLabel>
              <FormControl>
                <Input className="mt-1 border-gray-200" />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Additional Information</FormLabel>
              <FormControl>
                <Textarea
                  className="mt-1 border-gray-200"
                  placeholder="Any additional information..."
                />
              </FormControl>
            </FormItem>
          </form>
        </div>

        <div>
          <h2 className="text-xl mb-4">Product</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <div className="text-gray-600">
                  {item.title} × {item.quantity}
                </div>
                <div>Rs. {item.price * item.quantity}</div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div>Subtotal</div>
              <div>Rs. {subtotal}</div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>Total</div>
              <div className="text-[#B88E2F]">Rs. {subtotal}</div>
            </div>

            <div className="pt-6">
              <RadioGroup defaultValue="bank" className="space-y-4">
                <div className="flex items-start">
                  <RadioGroupItem value="bank" id="bank" className="mt-1" />
                  <div className="ml-2">
                    <label htmlFor="bank" className="text-sm font-medium">
                      Direct Bank Transfer
                    </label>
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="cash" id="cash" />
                  <label
                    htmlFor="cash"
                    className="ml-2 text-sm font-medium"
                  >
                    Cash On Delivery
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="text-sm text-gray-500 pt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our{" "}
              <a href="#" className="text-black hover:underline">
                privacy policy
              </a>
              .
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-white text-black border border-black rounded-none hover:bg-gray-100"
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>
   </FormProvider>
  );
}
