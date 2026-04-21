/** @format */

'use client';

import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface TeamMember {
	name: string;
	title: string;
	company?: string;
	bio: string;
	photoUrl?: string;
	initials?: string;
	avatarStyle: 'brand-gradient' | 'navy-bordered';
	linkedin?: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TEAM: TeamMember[] = [
	{
		name: 'Danish Ahmed',
		title: 'Co-founder & CEO',
		// company: "DocGlasses / Healthtrip / HealthPaths.ai",
		// bio: 'Serial pioneer who built multiple industry-defining companies generating over $100 million in revenues.',
		bio: 'Serial entrepreneur with 2 prior exits. Led 2000 people team delivering $100m in revenue.',
		photoUrl: '/images/team/danish-ahmed.jpeg',
		avatarStyle: 'brand-gradient',
		linkedin: 'https://www.linkedin.com/in/danishyebhi',
	},
	{
		name: 'Ashok Gautam',
		title: 'CTO',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'AI expert who led technology at top media and community platforms with 800 million site visitors.',
		photoUrl: '/images/team/ashok-pundit.jpeg',
		avatarStyle: 'brand-gradient',
		linkedin: 'https://www.linkedin.com/in/ashok-gautam-0a6202387/',
	},
	{
		name: 'Satya Misra',
		title: 'Co-founder - Strategy',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'Stanford, 30 years in San Francisco leading tech sales and services.',
		photoUrl: '/images/team/satya_misra.jpeg',
		avatarStyle: 'brand-gradient',
		linkedin:
			'https://www.linkedin.com/in/satyamisra?utm_source=share_via&utm_content=profile&utm_medium=member_android',
	},
	{
		name: 'Lubna Siddiqui',
		title: 'Co-founder - Science',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'Research scientist pioneering Quantum Inspired algorithms to improve signal capture.',
		photoUrl: '/images/team/dr_lubna.jpeg',
		avatarStyle: 'brand-gradient',
	},
	{
		name: 'Rajwant Singh',
		title: 'Director - Technology',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'Strategic technology leader driving scalable infrastructure and engineering excellence.',
		photoUrl: '/images/team/rajwant.png',
		avatarStyle: 'brand-gradient',
		linkedin: 'https://www.linkedin.com/in/rajwant-singh-68b46564/',
	},
	{
		name: 'Jafar Iqbal',
		title: 'Technology Lead',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'Cloud architecture and full-stack veteran focused on high-performance healthcare systems.',
		photoUrl: '/images/team/jafar.png',
		avatarStyle: 'brand-gradient',
		linkedin: 'https://www.linkedin.com/in/mohd-jafar-iqbal-khan-8b833645/',
	},
	{
		name: 'Stuti Sharma',
		title: 'AI Lead',
		// company: "DocGlasses / HealthPaths.ai",
		bio: 'Leading AI research and implementation to transform medical diagnostics and patient care.',
		photoUrl: '/images/team/stuti.png',
		avatarStyle: 'brand-gradient',
		linkedin: 'https://www.linkedin.com/in/stuti-sharma-94057122b/',
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
	style: TeamMember['avatarStyle'];
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
function TeamCard({ member }: { member: TeamMember }) {
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
				padding: '28px 24px',
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
				{member.title}
			</p>

			{/* Company */}
			{member.company && (
				<p
					className='font-dm text-xs mt-0.5'
					style={{ color: 'var(--text-muted)' }}
				>
					{member.company}
				</p>
			)}
			{/* Bio */}
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
				{member.bio}
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
export default function Team() {
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
			id='team'
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
						Our Team
					</span>

					<h2
						className='font-syne font-bold leading-tight'
						style={{
							fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
							color: 'var(--text-primary)',
						}}
					>
						Built by a Global Healthcare <br className='hidden md:block' />
						<span className='brand-gradient'>Technology Team</span>
					</h2>

					<p
						className='font-dm text-base mt-4 max-w-xl mx-auto'
						style={{ color: 'var(--text-muted)' }}
					>
						Combining deep healthcare, technology, and entrepreneurial
						expertise.
					</p>
				</motion.div>
				<div className='flex justify-center'>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate={inView ? 'visible' : 'hidden'}
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl'
					>
						{TEAM.map((member) => (
							<motion.div
								key={member.name}
								variants={cardVariants}
								className='flex flex-col h-full'
							>
								<TeamCard member={member} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
