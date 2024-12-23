    "use client"

    import Link from "next/link"

    export default function AuthForms() {
    return (
        <div className="container mx-auto my-20 w-full md:w-4/5 px-4 py-8">
        <div className="grid gap-x-48 md:grid-cols-2">
            {/* Login Form */}
            <div className="mb-8 md:mb-0">
            <h2 className="mb-6 text-[25px]  font-bold text-black">Log In</h2>
            <form className="space-y-4">
                <div className="space-y-2">
                <label 
                    htmlFor="email" 
                    className="block text-[14px] md:font-semibold font-sans text-black"
                >
                    Username or email address
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-[4px] border border-gray-200 px-3 py-2 text-base focus:border-gray-400 focus:outline-none"
                />
                </div>
                <div className="space-y-2">
                <label 
                    htmlFor="password" 
                    className="block text-[14px] md:font-semibold font-sans text-black"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    required
                    className="w-full rounded-[4px] border border-gray-200 px-3 py-2 text-base focus:border-gray-400 focus:outline-none"
                />
                </div>
                <div className="flex items-center space-x-2 pt-1">
                <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300"
                />
                <label
                    htmlFor="remember"
                    className="text-[14px] text-black"
                >
                    Remember me
                </label>
                </div>
                <div className="flex items-center space-x-4 pt-2">
                <button
                    type="submit"
                    className="rounded-[10px] border border-gray-700 bg-white px-12 py-2 text-[14px] font-normal text-black hover:border-gray-400"
                >
                    Log In
                </button>
                <Link
                    className="text-[14px] text-black hover:underline"
                    href="/forgot-password"
                >
                    Lost Your Password?
                </Link>
                </div>
            </form>
            </div>

            {/* Register Form */}
            <div>
            <h2 className="mb-6 text-[25px] font-bold text-black">Register</h2>
            <form className="space-y-4">
                <div className="space-y-2">
                <label 
                    htmlFor="register-email" 
                    className="block text-[14px] md:font-semibold font-sans text-black"
                >
                    Email address
                </label>
                <input
                    id="register-email"
                    type="email"
                    required
                    className="w-full rounded-[4px] border border-gray-200 px-3 py-2 text-base focus:border-gray-400 focus:outline-none"
                />
                </div>
                <p className="text-[14px] leading-relaxed text-black">
                A link to set a new password will be sent to your email address.
                </p>
                <p className="text-[14px] leading-relaxed text-black">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <Link 
                    className="text-black hover:underline" 
                    href="/privacy-policy"
                >
                    privacy policy
                </Link>
                .
                </p>
                <div className="pt-2">
                <button
                    type="submit"
                    className="rounded-[10px] border border-gray-600 bg-white px-12 py-2 text-[14px] font-normal text-black hover:border-gray-400"
                >
                    Register
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
    }

