/** @format */

'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const PARTNERS = [
	{
		title: 'Qualcomm',
		description:
			"Supported by Qualcomm's innovation ecosystem, enabling scalable AI, edge computing, and next-generation healthcare technology solutions.",
		logo: '/images/partners/qualcomm.png',
	},
	{
		title: 'NVIDIA Inception Program',
		description:
			'Member of NVIDIA Inception, accelerating AI innovation with access to advanced GPU technologies, technical expertise, and startup resources.',
		logo: '/images/partners/nvidia.png',
	},
	{
		title: 'AWS Startups',
		description:
			"Leveraging AWS's secure, scalable, and enterprise-grade cloud infrastructure to build reliable healthcare AI solutions.",
		logo: '/images/partners/aws.png',
	},
	{
		title: 'Google Cloud Startups Program',
		description:
			'Supported by Google Cloud for Startups, providing advanced cloud services, AI tools, and startup growth resources.',
		logo: '/images/partners/gcp.png',
	},
];

export default function Partners() {
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
			id='partners'
			className='relative overflow-hidden'
			style={{
				background: 'var(--navy-deep)',
				padding: '50px 0',
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

			<div className='relative z-10 max-w-6xl mx-auto px-6 lg:px-8'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='text-center mb-10'
				>
					<span
						className='inline-flex items-center gap-2 font-dm text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-5'
						style={{
							background: 'rgba(15,118,110,0.08)',
							border: '1px solid var(--brand-border)',
							color: 'var(--brand)',
						}}
					>
						Global Technology Partners
					</span>

					<h2
						className='font-syne font-bold leading-tight'
						style={{
							fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
							color: 'var(--text-primary)',
						}}
					>
						Partners
					</h2>

					<p
						className='font-dm text-base mt-4 max-w-xl mx-auto'
						style={{ color: 'var(--text-muted)' }}
					>
						Trusted by leading AI, cloud and innovation programs.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
				>
					{PARTNERS.map((item) => (
						<motion.div
							key={item.title}
							variants={cardVariants}
							className='flex flex-col h-full'
						>
							<motion.div
								whileHover={{
									y: -4,
									borderColor: 'rgba(15,118,110,0.4)',
									boxShadow: '0 0 30px rgba(15,118,110,0.15)',
								}}
								transition={{ duration: 0.25, ease: 'easeOut' }}
								className='flex flex-col rounded-2xl h-full cursor-default overflow-hidden'
								style={{
									background: 'var(--glass-bg)',
									border: '1px solid var(--glass-border)',
									boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
								}}
							>
								<div className='w-full h-[128px] sm:h-[140px] lg:h-[92px] shrink-0 overflow-hidden bg-[#d9d9d9]'>
									<img
										src={item.logo}
										alt={item.title}
										className='w-full h-full object-cover object-center'
									/>
								</div>

								<div
									className='flex flex-col flex-1 p-4 sm:p-5 text-left'
									style={{ background: 'var(--navy-card)' }}
								>
									<h3
										className='font-syne font-bold text-base sm:text-lg lg:text-base mb-2 tracking-tight'
										style={{ color: 'var(--text-primary)' }}
									>
										{item.title}
									</h3>
									<p
										className='font-dm text-sm sm:text-base lg:text-sm leading-relaxed'
										style={{ color: 'var(--text-muted)' }}
									>
										{item.description}
									</p>
								</div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
