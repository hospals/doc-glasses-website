/** @format */

'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const COMPLIANCES = [
	{
		title: 'HIPAA',
		description: 'Health Insurance Portability and Accountability Act',
		logo: '/images/security/hippa.png',
	},
	{
		title: 'GDPR',
		description: 'General Data Protection Regulation',
		logo: '/images/security/gdpr.png',
	},
	{
		title: 'DPDP',
		description: 'Digital Personal Data Protection',
		logo: '/images/security/dpdp.png',
	},
];

export default function DataSecurity() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-50px' });

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.15, delayChildren: 0.1 },
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
		},
	};

	return (
		<section
			id='data-security'
			className='relative overflow-hidden'
			style={{
				background: 'var(--navy-mid)',
				padding: '50px 0',
				position: 'relative',
				overflow: 'hidden',
				borderTop: '1px solid var(--glass-border)',
			}}
		>
			<div
				aria-hidden='true'
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'radial-gradient(circle, rgba(15,118,110,0.06) 1px, transparent 1px)',
					backgroundSize: '28px 28px',
					pointerEvents: 'none',
				}}
			/>

			<div
				aria-hidden='true'
				style={{
					position: 'absolute',
					top: -100,
					right: -100,
					width: 500,
					height: 500,
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(15,118,110,0.07) 0%, transparent 70%)',
					pointerEvents: 'none',
				}}
			/>

			<div className='relative z-10 max-w-5xl mx-auto px-6 lg:px-8'>
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='text-center mb-16'
				>
					{/* Eyebrow */}
					<span
						className='inline-flex items-center gap-2 font-dm text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-5'
						style={{
							background: 'rgba(15,118,110,0.08)',
							border: '1px solid var(--brand-border)',
							color: 'var(--brand)',
						}}
					>
						Security & Compliance
					</span>

					<h2
						className='font-syne font-bold leading-tight'
						style={{
							fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
							color: 'var(--text-primary)',
						}}
					>
						World Class <span className='brand-gradient'>Data Security</span>
					</h2>

					<p
						className='font-dm text-base mt-4 max-w-xl mx-auto'
						style={{ color: 'var(--text-muted)' }}
					>
						Committed to the highest standards of data protection and privacy,
						ensuring your information remains safe globally.
					</p>
				</motion.div>

				{/* Logos/Badges */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='flex flex-wrap justify-center gap-6'
				>
					{COMPLIANCES.map((item) => (
						<motion.div
							key={item.title}
							variants={cardVariants}
							className='flex flex-col'
						>
							<motion.div
								whileHover={{
									y: -4,
									borderColor: 'rgba(15,118,110,0.4)',
									boxShadow: '0 0 30px rgba(15,118,110,0.15)',
								}}
								transition={{ duration: 0.25, ease: 'easeOut' }}
								className='flex flex-col items-center text-center p-8 rounded-2xl w-full sm:w-64 h-full cursor-default'
								style={{
									background: 'var(--glass-bg)',
									border: '1px solid var(--glass-border)',
									boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
								}}
							>
								<div
									className='mb-5 flex items-center justify-center rounded-full'
									style={{
										width: 64,
										height: 64,
										background:
											'linear-gradient(135deg, rgba(15,118,110,0.1), rgba(45,212,191,0.1))',
										color: 'var(--brand)',
										border: '1px solid rgba(15,118,110,0.2)',
									}}
								>
									<img
										src={item.logo}
										alt={item.title}
										className='w-24 h-24 object-contain'
									/>
								</div>
								<h3
									className='font-syne font-bold text-2xl mb-2 tracking-wide'
									style={{ color: 'var(--text-primary)' }}
								>
									{item.title}
								</h3>
								<p
									className='font-dm text-sm leading-relaxed'
									style={{ color: 'var(--text-muted)' }}
								>
									{item.description}
								</p>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
