/** @format */

'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import Link from 'next/link';

export default function CookieBanner() {
	const {
		hasConsent,
		shouldShowBanner,
		acceptCookieConsent,
		rejectCookieConsent,
	} = useCookieConsent();

	// If we shouldn't show the banner, we render nothing.
	if (!shouldShowBanner) return null;

	return (
		<>
			{shouldShowBanner && (
				<div className='fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 pb-2 sm:pb-6 pointer-events-none'>
					<style>{`
            @keyframes bannerSlideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            .animate-banner-slide-up {
              animation: bannerSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>

					<div className='max-w-6xl mx-auto pointer-events-auto animate-banner-slide-up'>
						<div className='bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-4 py-3 md:px-6 md:py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-6 max-h-[40vh] overflow-y-auto'>
							<div className='flex-1 min-w-0'>
								<h3 className='text-white font-semibold text-sm sm:text-base mb-1'>
									We value your privacy
								</h3>
								<p className='text-white/70 text-xs sm:text-sm leading-relaxed max-w-3xl'>
									We use cookies to enhance your experience. Read our{' '}
									<Link
										href='/privacy-policy'
										className='text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors focus:outline-none focus:ring-1 focus:ring-teal-400/50 rounded'
									>
										Privacy Policy
									</Link>{' '}
									and{' '}
									<Link
										href='/terms-of-service'
										className='text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors focus:outline-none focus:ring-1 focus:ring-teal-400/50 rounded'
									>
										Terms of Service
									</Link>
									.
								</p>
							</div>

							<div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0 mt-1 lg:mt-0'>
								{/* Mobile: Full-width Primary on top, Desktop: Far right */}
								<button
									onClick={acceptCookieConsent}
									className='w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-xl shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all order-1 sm:order-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-[#0f172a] text-center cursor-pointer'
								>
									Accept All
								</button>

								{/* Mobile: Reject button beside Accept on desktop via sm:contents */}
								<div className='flex flex-row gap-2.5 w-full sm:w-auto order-2 sm:contents'>
									<button
										onClick={rejectCookieConsent}
										className='flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-medium text-white/90 border border-white/20 hover:bg-white/5 rounded-xl transition-all sm:order-2 focus:outline-none focus:ring-1 focus:ring-white/30 text-center cursor-pointer'
									>
										Reject All
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
