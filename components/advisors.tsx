/** @format */

'use client';

import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Advisors {
	name: string;
	designation: string;
	department?: string;
	hospital: string;
	photoUrl?: string;
	initials?: string;
	avatarStyle: 'brand-gradient' | 'navy-bordered';
	linkedin?: string;
}
/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const ADVISORS: Advisors[] = [
	{
		name: 'Dr. Imran Siddiqi',
		designation: 'Physician',
		department: 'Pathology/Hematopathology',
		hospital: 'University of Southern California',
		photoUrl: '/images/advisors/imran_siddiqui.jfif',
		avatarStyle: 'brand-gradient',
	},
	{
		name: 'Dr. Mohamed Hablas',
		designation: 'Regional Director',
		department: 'General Medicine',
		hospital: 'Saudi German Health',
		photoUrl: '/images/advisors/mohamed-hablas.jfif',
		avatarStyle: 'brand-gradient',
	},
	{
		name: 'Dr. Kamal Ahmad',
		designation: 'General Physician',
		department: 'Internal Medicine',
		hospital: 'Apollo Hospital',
		photoUrl: '/images/advisors/dr-kamal-ahmad.jpg',
		avatarStyle: 'brand-gradient',
	},
	// {
	// 	name: 'Dr. Hisham Hakim',
	// 	designation: 'Chairman',
	// 	department: 'Neurology',
	// 	hospital: 'American Spine Center',
	// 	// company: "DocGlasses / HealthPaths.ai",
	// 	bio: 'Cloud architecture and full-stack veteran focused on high-performance healthcare systems.',
	// 	photoUrl: '/images/advisors/hisham-hakim.jfif',
	// 	avatarStyle: 'brand-gradient',
	// },
	{
		name: 'Dr. Jeevan Aggarwal',
		designation: 'Director',
		department: 'Internal Medicine',
		hospital: 'Max Healthcare',
		photoUrl: '/images/advisors/dr_Jeevan.jpg',
		avatarStyle: 'brand-gradient',
	},
	{
		name: 'Tarun Malik',
		designation: 'Managing Partner',
		hospital: 'Ansan Holding',
		department: '',
		photoUrl: '/images/advisors/tarun-malik.jpeg',
		avatarStyle: 'brand-gradient',
	},
];

/* ─────────────────────────────────────────────
   LINKEDIN ICON SVG
───────────────────────────────────────────── */
function LinkedInIcon() {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' width='18' height='18'>
			<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
		</svg>
	);
}

/* ─────────────────────────────────────────────
   AVATAR (no photo)
───────────────────────────────────────────── */
function Avatar({
	initials,
	style,
}: {
	initials: string;
	style: Advisors['avatarStyle'];
}) {
	if (style === 'brand-gradient') {
		return (
			<div
				style={{
					width: 80,
					height: 80,
					borderRadius: '50%',
					background: 'linear-gradient(135deg, #0f766e, #2dd4bf)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexShrink: 0,
					boxShadow: '0 0 24px rgba(15,118,110,0.4)',
				}}
			>
				<span
					className='font-syne font-bold text-2xl'
					style={{ color: '#fff', letterSpacing: 1 }}
				>
					{initials}
				</span>
			</div>
		);
	}

	return (
		<div
			style={{
				width: 80,
				height: 80,
				borderRadius: '50%',
				background:
					'linear-gradient(135deg, var(--navy-mid), var(--navy-card))',
				border: '2px solid rgba(15,118,110,0.5)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexShrink: 0,
				boxShadow: '0 0 20px rgba(15,118,110,0.15)',
			}}
		>
			<span
				className='font-syne font-bold text-2xl'
				style={{ color: '#fff', letterSpacing: 1 }}
			>
				{initials}
			</span>
		</div>
	);
}

/* ─────────────────────────────────────────────
   TEAM CARD
───────────────────────────────────────────── */
function AdvisorsCard({ member }: { member: Advisors }) {
	return (
		<motion.div
			whileHover={{
				y: -4,
				borderColor: 'rgba(15,118,110,0.4)',
				boxShadow: '0 0 30px rgba(15,118,110,0.15)',
			}}
			transition={{ duration: 0.25, ease: 'easeOut' }}
			style={{
				background: 'var(--glass-bg)',
				border: '1px solid var(--glass-border)',
				borderRadius: 16,
				padding: '28px 16px',
				flex: 1,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
				cursor: 'default',
			}}
		>
			{/* Photo or Avatar */}
			<div
				style={{
					width: 80,
					height: 80,
					borderRadius: '50%',
					overflow: 'hidden',
					flexShrink: 0,
				}}
			>
				{member.photoUrl ? (
					member.photoUrl.endsWith('.svg') ? (
						// SVG: use native img tag (Next.js Image doesn't optimize SVGs)
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={member.photoUrl}
							alt={member.name}
							width={80}
							height={80}
							className='rounded-full object-cover'
							style={{ width: 80, height: 80 }}
						/>
					) : (
						<Image
							src={member.photoUrl}
							alt={member.name}
							width={80}
							height={80}
							className='rounded-full object-cover'
							style={{ width: 80, height: 80 }}
						/>
					)
				) : (
					<Avatar initials={member.initials!} style={member.avatarStyle} />
				)}
			</div>

			{/* Name */}
			<h3
				className='font-syne font-bold text-lg mt-4'
				style={{ color: 'var(--text-primary)' }}
			>
				{member.name}
			</h3>

			{/* Title */}
			<p className='font-dm text-sm mt-1' style={{ color: 'var(--brand)' }}>
				{member.designation}
			</p>

			{/* Company */}
			{member.department && (
				<p
					className='font-dm text-xs mt-1'
					style={{ color: 'var(--text-muted)' }}
				>
					{member.department}
				</p>
			)}
			<p
				className='font-dm text-sm mt-3 leading-relaxed'
				style={{
					color: 'var(--text-muted)',
					display: '-webkit-box',
					WebkitLineClamp: 3,
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
				}}
			>
				{member.hospital}
			</p>

			{/* LinkedIn */}
			{member.linkedin && (
				<a
					href={member.linkedin}
					target='_blank'
					rel='noopener noreferrer'
					className='mt-auto transition-colors duration-200'
					style={{ color: 'var(--text-muted)', paddingTop: '1.25rem' }}
					aria-label={`${member.name} on LinkedIn`}
					onMouseEnter={(e) =>
						((e.currentTarget as HTMLAnchorElement).style.color =
							'var(--brand)')
					}
					onMouseLeave={(e) =>
						((e.currentTarget as HTMLAnchorElement).style.color =
							'var(--text-muted)')
					}
				>
					<LinkedInIcon />
				</a>
			)}
		</motion.div>
	);
}

/* ─────────────────────────────────────────────
   TEAM SECTION — MAIN EXPORT
───────────────────────────────────────────── */
export default function Advisors() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-100px' });

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

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
		},
	};

	return (
		<section
			id='advisors'
			className='relative overflow-hidden'
			style={{ background: 'var(--navy-mid)', padding: '50px 0' }}
		>
			{/* Subtle background glow */}
			<div
				aria-hidden='true'
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '60vw',
					height: '60vw',
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(15,118,110,0.04) 0%, transparent 70%)',
					pointerEvents: 'none',
				}}
			/>

			<div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Header */}
				<motion.div
					ref={ref}
					variants={headerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
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
						Board of Advisors
					</span>

					<h2
						className='font-syne font-bold leading-tight'
						style={{
							fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
							color: 'var(--text-primary)',
						}}
					>
						Guided by Industry Leaders
						<br className='hidden md:block' />
						<span className='brand-gradient'> & Medical Experts</span>
					</h2>

					<p
						className='font-dm text-base mt-4 max-w-xl mx-auto'
						style={{ color: 'var(--text-muted)' }}
					>
						A diverse advisory board combining clinical excellence with global
						strategic insight.
					</p>
				</motion.div>

				{/* Cards grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'
				>
					{ADVISORS.map((member) => (
						<motion.div
							key={member.name}
							variants={cardVariants}
							className='flex flex-col'
						>
							<AdvisorsCard member={member} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
