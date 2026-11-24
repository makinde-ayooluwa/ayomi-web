import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome, MdArrowBack } from 'react-icons/md'

export default function NotFound() {
    return (
        <div className="min-h-screen flex w-full items-center justify-center bg-gray-50 dark:bg-gray-950 px-5 py-10">
            <div className="w-full text-center">

                {/* 404 Illustration */}
                <div className="relative mb-6">
                    <h1 className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-green-500/15 select-none">
                        404
                    </h1>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-green-500 flex items-center justify-center shadow-xl shadow-green-500/20 rotate-12">
                            <span className="text-5xl sm:text-6xl text-white font-bold -rotate-12">
                                ?
                            </span>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                        Oops! The page you're looking for doesn't exist, may have been moved, or is temporarily unavailable.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-green-500/20"
                    >
                        <MdHome size={20} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold transition-all duration-300"
                    >
                        <MdArrowBack size={20} />
                        Go Back
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-12 text-xs text-gray-400">
                    Error Code: 404 · Page Not Found
                </p>

            </div>
        </div>
    )
}
