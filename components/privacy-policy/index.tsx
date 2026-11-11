/** @format */

'use client';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Link from 'next/link';
import type { ReactNode } from 'react';

const NOTICE_ADDRESS = '16192 Coastal Highway Lewes, DE 19958';

const COOKIE_TABLE_HEADERS = [
	'Category',
	'What it does',
	'Can you turn it off?',
] as const;

const COOKIE_TABLE_ROWS = [
	[
		'Strictly necessary',
		'Makes the Website work and keeps it secure. For example, it stores your cookie choice so that we do not ask again on every page.',
		'No. The Website needs these to work properly.',
	],
	[
		'Analytics',
		'Helps us understand how visitors use the Website, such as which pages are viewed and how visitors move through the site.',
		'Yes. These are off until you accept them.',
	],
	[
		'Embedded content',
		'Some pages show videos hosted by other companies. Those companies may set their own cookies when you play a video.',
		'Yes, through your browser settings or by not playing embedded videos.',
	],
] as const;

const CALIFORNIA_TABLE_HEADERS = [
	'Category',
	'Examples',
	'Source',
	'Why we use it',
	'Who receives it',
	'Sold or shared?',
] as const;

const CALIFORNIA_TABLE_ROWS = [
	[
		'Identifiers',
		'Name, email address, phone number, IP address, online identifiers stored in cookies',
		'You, your device',
		'Reply to you, operate and secure the Website, and analytics with your consent',
		'Service providers',
		'No',
	],
	[
		'Contact and customer records',
		'Name, phone number, organization, job title, city and state',
		'You',
		'Reply to you and follow up on your inquiry',
		'Service providers',
		'No',
	],
	[
		'Professional information',
		'Organization or department and job title',
		'You',
		'Understand your inquiry and reply to you',
		'Service providers',
		'No',
	],
	[
		'Internet or other electronic activity',
		'Pages viewed, links clicked, time on page, referring page',
		'Your device, through cookies and similar technologies',
		'Operate, secure, and improve the Website',
		'Service providers',
		'No',
	],
	[
		'General location',
		'City or region suggested by your IP address, and the city and state you give us',
		'You, your device',
		'Understand where visitors come from and reply to you',
		'Service providers',
		'No',
	],
	[
		'Content of messages',
		'What you write in the contact form or in an email',
		'You',
		'Reply to you and keep records',
		'Service providers',
		'No',
	],
] as const;

export default function PrivacyPolicyContent() {
	return (
		<main
			className='min-h-screen flex flex-col relative overflow-x-hidden'
			style={{ background: 'var(--navy-deep)' }}
		>
			{/* BACKGROUND */}
			<div
				aria-hidden='true'
				className='dot-grid-bg absolute inset-0 pointer-events-none'
				style={{ opacity: 0.03 }}
			/>
			<div
				aria-hidden='true'
				style={{
					position: 'absolute',
					top: '-5%',
					right: '-10%',
					width: '70vw',
					height: '70vw',
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(15,118,110,0.12) 0%, rgba(15,118,110,0.03) 50%, transparent 70%)',
					filter: 'blur(40px)',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			<Nav />

			<div className='relative z-10 pt-[120px] sm:pt-[160px] pb-24 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto flex-1 flex flex-col'>
				{/* HEADER */}
				<div className='mb-8 border-b border-white/10 pb-8'>
					<h1
						className='font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4'
						style={{ color: 'var(--text-primary)' }}
					>
						Privacy Policy
					</h1>
					<p
						className='font-dm tracking-wider uppercase text-xs sm:text-sm font-semibold'
						style={{ color: 'var(--brand)' }}
					>
						Effective date: November 1, 2026
					</p>
					<p
						className='font-dm tracking-wider uppercase text-xs sm:text-sm font-semibold mt-2'
						style={{ color: 'var(--brand)' }}
					>
						Last updated: November 1, 2026
					</p>
				</div>

				<div className='flex-1 w-full space-y-12'>
					<div className='font-dm space-y-6 text-base text-white/70 leading-relaxed'>
						<p>
							Web address:{' '}
							<a
								href='https://docglasses.ai/privacy'
								className='text-teal-400 hover:underline'
							>
								https://docglasses.ai/privacy
							</a>
						</p>
					</div>

					<Section title='1. Scope and who we are'>
						<p>
							This Privacy Policy explains how Vision Health Holdings Inc, a
							Delaware corporation (the &quot;Company,&quot; &quot;we,&quot;
							&quot;us,&quot; or &quot;our&quot;), collects, uses, shares, and
							protects personal information through the website at docglasses.ai
							and any page that links to this Privacy Policy (the
							&quot;Website&quot;).
						</p>
						<p>
							The Company builds clinical documentation and artificial
							intelligence assistant technology for healthcare professionals and
							organizations. The Website gives general information about the
							Company and lets visitors contact us.
						</p>
						<p>
							This Privacy Policy covers the Website only. It does not cover any
							Company product or service, including any software application or
							platform. Information handled through our products is governed by
							separate written agreements and by the notices that apply to those
							products. Please also read our Terms of Service at{' '}
							<Link
								href='/terms'
								className='text-teal-400 hover:underline'
							>
								https://docglasses.ai/terms
							</Link>
							.
						</p>
						<p>
							This Privacy Policy also serves as our notice at collection for
							personal information collected through the Website.
						</p>
					</Section>

					<Section title='2. No patient health information through the Website'>
						<p>
							The Website is not designed to collect patient health information,
							and we do not ask for it. Please do not submit any information about
							a patient through the Website. This includes names, dates of birth,
							medical record numbers, diagnoses, treatment details, images, or
							anything else that could identify a patient or describe a
							patient&apos;s health.
						</p>
						<p>
							If we receive patient information through the Website by mistake, we
							will delete it once we become aware of it, unless the law requires
							us to keep it. We do not use the Website to collect consumer health
							data as defined in state consumer health privacy laws.
						</p>
					</Section>

					<Section title='3. Information we collect'>
						<SubSection title='3.1 Information you give us'>
							<p>
								When you fill out our contact form or email us, we collect the
								information you choose to provide. This may include:
							</p>
							<BulletList
								items={[
									'your full name;',
									'your organization or department and your job title;',
									'your work email address and phone number;',
									'your city and state; and',
									'the content of your message and any details you include in it.',
								]}
							/>
							<p>
								We also keep a record that you agreed to our Terms of Service and
								this Privacy Policy when you submitted the form.
							</p>
						</SubSection>

						<SubSection title='3.2 Information collected automatically'>
							<p>
								When you visit the Website, our servers and the tools described in
								Section 5 may collect certain information automatically, such as:
							</p>
							<BulletList
								items={[
									'your IP address and the approximate location it suggests, such as city or region;',
									'your browser type, device type, operating system, and screen size;',
									'the pages you view, the links you click, the time you spend on pages, and the page that sent you to the Website;',
									'dates and times of your visits.',
								]}
							/>
							<p>
								We collect analytics information only if you accept analytics
								cookies, as described in Section 5.
							</p>
							<p>
								We do not collect precise location data through the Website.
							</p>
						</SubSection>

						<SubSection title='3.3 Cookies and similar technologies'>
							<p>
								We use cookies and similar technologies, such as small scripts and
								local storage. Section 5 explains the types we use and your
								choices.
							</p>
						</SubSection>
					</Section>

					<Section title='4. How we use information'>
						<p>We use personal information to:</p>
						<BulletList
							items={[
								'read and reply to your messages and requests;',
								'follow up on business inquiries, such as a request for a presentation or a meeting;',
								'operate, maintain, and secure the Website, including detecting and preventing fraud, spam, and abuse;',
								'understand how visitors use the Website so that we can improve its content and design;',
								'remember your cookie choices;',
								'comply with the law, respond to lawful requests, and enforce our Terms of Service; and',
								'protect the rights, safety, and property of the Company, our visitors, and others.',
							]}
						/>
						<p>
							We do not use personal information collected through the Website to
							make decisions that produce legal or similarly significant effects
							about you.
						</p>
					</Section>

					<Section title='5. Cookies and analytics'>
						<SubSection title='5.1 Types of cookies we use'>
							<PolicyTable
								caption='Types of cookies used on the Website'
								headers={[...COOKIE_TABLE_HEADERS]}
								rows={COOKIE_TABLE_ROWS.map((row) => [...row])}
							/>
							<p>
								We do not use advertising cookies or advertising pixels on the
								Website.
							</p>
						</SubSection>

						<SubSection title='5.2 Your consent to analytics'>
							<p>
								When you first visit the Website, we ask whether you accept
								analytics cookies. Analytics cookies stay off unless you accept
								them. If you accept, we collect anonymous usage data, such as
								which pages are viewed and how features of the Website are used,
								to improve the Website. We never use analytics to collect patient
								information or the content of your messages.
							</p>
							<p>
								Your choice is saved for 30 days. You can change it at any time
								through the Cookie settings link in the Website footer.
							</p>
						</SubSection>

						<SubSection title='5.3 Other ways to control cookies'>
							<p>
								Most browsers let you block or delete cookies in their settings.
								If you block strictly necessary cookies, parts of the Website may
								not work. Some analytics providers also offer browser tools that
								let you opt out of their analytics on all websites.
							</p>
						</SubSection>

						<SubSection title='5.4 Global Privacy Control and opt out signals'>
							<p>
								We honor Global Privacy Control (GPC) and similar legally
								recognized opt out preference signals. We do not sell or share
								personal information, so these signals do not change how we handle
								your information for sale or sharing. Even so, when we detect a
								GPC signal from your browser, we treat it as a request to opt out
								of sale, sharing, and targeted advertising for that browser, and
								we do not set analytics cookies for that browser unless you choose
								to accept them through Cookie settings.
							</p>
						</SubSection>

						<SubSection title='5.5 Do Not Track'>
							<p>
								Some browsers send a &quot;Do Not Track&quot; signal. There is no
								common standard for how websites should respond to it, so the
								Website does not currently respond to Do Not Track signals. We do
								honor Global Privacy Control as described in Section 5.4.
							</p>
						</SubSection>
					</Section>

					<Section title='6. How we share information'>
						<p>We share personal information only as described below.</p>
						<p>
							<strong>Service providers.</strong> We use companies that help us
							host and run the Website, deliver email, store records, analyze
							Website use, and keep the Website secure. They may use personal
							information only to provide services to us and must protect it.
						</p>
						<p>
							<strong>Professional advisers.</strong> We may share information
							with our lawyers, accountants, and auditors when needed for their
							work for us.
						</p>
						<p>
							<strong>Legal compliance and protection.</strong> We may share
							information if we believe in good faith that the law requires it,
							for example to respond to a subpoena or court order, or if it is
							needed to protect the rights, safety, or property of the Company or
							others.
						</p>
						<p>
							<strong>Business transfers.</strong> If the Company is involved in
							a merger, acquisition, financing, reorganization, bankruptcy, or
							sale of assets, personal information may be transferred as part of
							that transaction. We will require the recipient to protect it in
							line with this Privacy Policy.
						</p>
						<p>
							<strong>With your direction.</strong> We may share information when
							you ask us to or agree that we may.
						</p>
						<p>
							We do not sell personal information. We do not share personal
							information for cross-context behavioral advertising, and we do not
							use it for targeted advertising. We have not done so in the past 12
							months. We do not use advertising cookies.
						</p>
					</Section>

					<Section title='7. California categories of personal information'>
						<p>
							The table below describes the personal information we have
							collected through the Website in the past 12 months, where it comes
							from, why we use it, and who receives it.
						</p>
						<PolicyTable
							caption='California categories of personal information collected through the Website'
							headers={[...CALIFORNIA_TABLE_HEADERS]}
							rows={CALIFORNIA_TABLE_ROWS.map((row) => [...row])}
						/>
						<p>
							We do not intend to collect sensitive personal information through
							the Website. We do not use or disclose sensitive personal
							information for purposes that would give you a right to limit its
							use under California law. We do not create profiles or inferences
							about visitors.
						</p>
					</Section>

					<Section title='8. How long we keep information'>
						<p>
							We keep personal information only as long as we need it for the
							purposes in this Privacy Policy, unless the law requires us to keep
							it longer.
						</p>
						<BulletList
							items={[
								'Contact form messages and emails: up to 24 months after our last communication with you.',
								'Analytics data: up to 14 months.',
								'Server and security logs: up to 12 months.',
								'Your cookie choice: 30 days.',
							]}
						/>
						<p>
							When we no longer need personal information, we delete it or make
							it de-identified.
						</p>
					</Section>

					<Section title='9. How we protect information'>
						<p>
							We use reasonable administrative, technical, and physical
							safeguards to protect personal information. For example, the Website
							uses encrypted connections, and we limit access to personal
							information to people who need it for their work. No method of
							sending or storing data is completely secure, so we cannot guarantee
							the security of information you send us. Please do not send
							sensitive information through the Website.
						</p>
					</Section>

					<Section title='10. Your privacy rights'>
						<SubSection title='10.1 California rights'>
							<p>
								If you live in California, you have the following rights, subject
								to some exceptions:
							</p>
							<p>
								<strong>Right to know.</strong> You can ask what personal
								information we have collected about you, the categories of
								sources, the purposes for collecting it, the categories of third
								parties we disclose it to, and the specific pieces of personal
								information we hold.
							</p>
							<p>
								<strong>Right to delete.</strong> You can ask us to delete
								personal information we collected from you.
							</p>
							<p>
								<strong>Right to correct.</strong> You can ask us to correct
								personal information that is inaccurate.
							</p>
							<p>
								<strong>Right to opt out of sale or sharing.</strong> We do not
								sell or share personal information, so there is nothing to opt
								out of. If you have a question about this, email us at{' '}
								<a
									href='mailto:privacy@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									privacy@docglasses.ai
								</a>
								. We also honor opt out preference signals such as Global Privacy
								Control, as described in Section 5.4.
							</p>
							<p>
								<strong>
									Right to limit use of sensitive personal information.
								</strong>{' '}
								We do not use sensitive personal information in ways that give
								rise to this right. If that changes, we will update this Privacy
								Policy and offer a way to limit its use.
							</p>
							<p>
								<strong>Right to non-discrimination.</strong> We will not treat
								you differently because you exercised a privacy right. For
								example, we will not deny you access to the Website or respond to
								you differently.
							</p>
						</SubSection>

						<SubSection title='10.2 Rights in other U.S. states'>
							<p>
								Residents of some other U.S. states have privacy rights under
								their state laws. Depending on where you live, these may include
								the right to:
							</p>
							<BulletList
								items={[
									'confirm whether we process your personal information and get access to it;',
									'correct inaccurate personal information;',
									'delete personal information;',
									'get a copy of your personal information in a portable format; and',
									'opt out of targeted advertising, the sale of personal information, and profiling that produces legal or similarly significant effects.',
								]}
							/>
							<p>
								We do not sell personal information, use it for targeted
								advertising, or use it for that kind of profiling. We will honor
								these rights for residents of states where they apply.
							</p>
						</SubSection>

						<SubSection title='10.3 How to make a request'>
							<p>
								To make a request, email us at{' '}
								<a
									href='mailto:privacy@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									privacy@docglasses.ai
								</a>{' '}
								with the subject line &quot;Privacy Request,&quot; or write to us
								at the address in Section 17. Please tell us which right you want
								to use and the state where you live.
							</p>
						</SubSection>

						<SubSection title='10.4 How we verify requests'>
							<p>
								To protect your information, we must confirm your identity before
								we act on a request to know, delete, or correct. We will ask you
								for information that matches what we already have, such as your
								name and the email address you used to contact us. We will use
								the information you give us for verification only for that
								purpose. We do not need to verify a request to opt out of sale or
								sharing, but we may deny it if we believe it is fraudulent.
							</p>
							<p>
								We will confirm that we received your request within 10 business
								days and respond within 45 calendar days. If we need more time,
								we will tell you why, and we may take up to 45 more days where the
								law allows.
							</p>
						</SubSection>

						<SubSection title='10.5 Authorized agents'>
							<p>
								You may have an authorized agent make a request for you. We may
								ask the agent to show written permission signed by you, and we may
								ask you to confirm your identity with us directly. This does not
								apply if the agent has a valid power of attorney under state law.
							</p>
						</SubSection>

						<SubSection title='10.6 Appeals'>
							<p>
								If we deny your request in whole or in part, you may appeal our
								decision. To appeal, reply to our decision or email{' '}
								<a
									href='mailto:privacy@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									privacy@docglasses.ai
								</a>{' '}
								with the subject line &quot;Privacy Appeal&quot; within a
								reasonable time. We will respond to your appeal in writing within
								the time the law requires, usually 45 or 60 days, and explain the
								reason for our decision. If we deny your appeal, you may contact
								the attorney general of your state.
							</p>
						</SubSection>
					</Section>

					<Section title='11. Children'>
						<p>
							The Website is meant for adults and for healthcare professionals
							and organizations. It is not directed to children under 16. We do
							not knowingly collect personal information from children under 13,
							and we do not knowingly sell or share personal information of anyone
							under 16. If you believe a child has given us personal information,
							please contact us at{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>{' '}
							and we will delete it.
						</p>
					</Section>

					<Section title='12. Visitors outside the United States'>
						<p>
							The Company is based in the United States, and the Website is
							intended for visitors in the United States. If you visit from
							another country, your information will be processed and stored in
							the United States or other places where we or our service providers
							operate. The privacy laws in those places may differ from the laws
							where you live. By using the Website, you understand that your
							information will be handled as described in this Privacy Policy.
						</p>
					</Section>

					<Section title='13. Links to other websites'>
						<p>
							The Website may link to websites, videos, and services run by other
							companies. This Privacy Policy does not apply to them. We encourage
							you to read their privacy policies before you give them any
							information.
						</p>
					</Section>

					<Section title='14. Email and other communications'>
						<p>
							If you contact us, we will use your contact details to reply. We
							will send marketing emails only if you ask for them or agree to
							receive them, and every marketing email will include a way to
							unsubscribe.
						</p>
					</Section>

					<Section title='15. Changes to this Privacy Policy'>
						<p>
							We may update this Privacy Policy from time to time. When we do, we
							will post the new version on this page and change the &quot;Last
							updated&quot; date. If we make a significant change, we will make
							reasonable efforts to point it out, for example with a notice on the
							Website. If a change would let us use personal information we
							already collected in a materially different way, we will ask for your
							consent where the law requires it.
						</p>
					</Section>

					<Section title='16. Accessibility'>
						<p>
							If you need this Privacy Policy in another format, please contact us
							at{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>
							.
						</p>
					</Section>

					<Section title='17. Contact us'>
						<p>
							If you have questions about this Privacy Policy or our privacy
							practices, please contact us:
						</p>
						<ul className='list-disc pl-5 space-y-3'>
							<li>
								<strong>Vision Health Holdings Inc</strong>
							</li>
							<li>
								<strong>Attention:</strong> Privacy Officer
							</li>
							<li>
								<strong>Address:</strong> {NOTICE_ADDRESS}
							</li>
							<li>
								<strong>Email:</strong>{' '}
								<a
									href='mailto:privacy@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									privacy@docglasses.ai
								</a>
							</li>
						</ul>
					</Section>
				</div>
			</div>

			<Footer />
		</main>
	);
}

function Section({
	id,
	title,
	children,
}: {
	id?: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<div
			id={id}
			className='border-b border-white/10 pb-10 last:border-0 last:pb-0 scroll-mt-32'
		>
			<h2
				className='font-syne text-xl md:text-2xl font-semibold mb-6'
				style={{ color: 'var(--text-primary)' }}
			>
				{title}
			</h2>
			<div className='font-dm space-y-6 text-base text-white/70 leading-relaxed'>
				{children}
			</div>
		</div>
	);
}

function SubSection({
	id,
	title,
	children,
}: {
	id?: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<div id={id} className='scroll-mt-32'>
			<h3
				className='font-syne text-lg md:text-xl font-semibold mt-6 mb-2'
				style={{ color: 'var(--text-primary)' }}
			>
				{title}
			</h3>
			<div className='space-y-4'>{children}</div>
		</div>
	);
}

function BulletList({ items }: { items: ReactNode[] }) {
	return (
		<ul className='list-disc pl-5 space-y-2'>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

function PolicyTable({
	caption,
	headers,
	rows,
}: {
	caption: string;
	headers: string[];
	rows: string[][];
}) {
	return (
		<div className='overflow-x-auto rounded-lg border border-white/10'>
			<table className='w-full min-w-[40rem] border-collapse text-left text-sm'>
				<caption className='sr-only'>{caption}</caption>
				<thead>
					<tr className='border-b border-white/10 bg-white/5'>
						{headers.map((header) => (
							<th
								key={header}
								scope='col'
								className='px-3 py-3 font-syne font-semibold text-white/90'
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr
							key={row[0]}
							className='border-b border-white/10 last:border-0 align-top'
						>
							{row.map((cell, cellIndex) => (
								<td
									key={`${row[0]}-${headers[cellIndex]}`}
									className='px-3 py-3 text-white/70'
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
