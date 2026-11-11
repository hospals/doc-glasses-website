/** @format */

'use client';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Link from 'next/link';
import type { ReactNode } from 'react';

const NOTICE_ADDRESS = '16192 Coastal Highway Lewes, DE 19958';

export default function TermsOfServiceContent() {
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
						Terms of Service
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
							These Terms of Service (the &quot;Terms&quot;) set the rules for
							using the website at docglasses.ai and any page that links to these
							Terms (the &quot;Website&quot;). The Website is operated by Vision
							Health Holdings Inc, a Delaware corporation (the
							&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
							&quot;our&quot;). In these Terms, &quot;you&quot; means the person
							using the Website. If you use the Website for an organization,
							&quot;you&quot; also means that organization.
						</p>
						<p>
							Please read these Terms with our{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>
							. The Privacy Policy explains how we handle personal information
							collected through the Website.
						</p>
					</div>

					<Section title='1. Accepting these Terms'>
						<p>
							By visiting or using the Website, you agree to these Terms. If you
							do not agree, please do not use the Website.
						</p>
						<p>
							You must be at least 18 years old to use the Website. If you use
							the Website for an organization, you confirm that you have
							authority to accept these Terms for it.
						</p>
					</Section>

					<Section title='2. Who we are and what the Website is'>
						<p>
							The Company builds clinical documentation and artificial
							intelligence assistant technology for healthcare professionals and
							organizations. The Website is an informational site. It describes
							the Company, lets you learn about our work, and lets you contact
							us.
						</p>
						<p>The Website is not a healthcare service. In particular:</p>
						<BulletList
							items={[
								'Nothing on the Website is medical advice, diagnosis, or treatment.',
								'Using the Website does not create a clinician and patient relationship with us or with anyone else.',
								'The Website is not for emergencies. If you or someone else may have a medical emergency, call 911 or your local emergency number right away.',
							]}
						/>
					</Section>

					<Section title='3. Changes to the Website and to these Terms'>
						<p>
							We may change, pause, or remove any part of the Website at any
							time. We do not promise that any content or feature will stay
							available.
						</p>
						<p>
							We may update these Terms from time to time. When we do, we will
							post the new version on this page and change the &quot;Last
							updated&quot; date. If a change is significant, we will also make
							reasonable efforts to point it out, for example with a notice on
							the Website. Changes apply from the date they are posted and do
							not apply to any dispute that arose before that date. If you keep
							using the Website after a change is posted, you accept the updated
							Terms.
						</p>
					</Section>

					<Section title='4. How you may use the Website'>
						<p>
							You may use the Website for lawful, personal, or internal business
							purposes, such as learning about the Company or getting in touch
							with us.
						</p>
						<p>When you use the Website, you agree that you will not:</p>
						<BulletList
							items={[
								'break any law or regulation, or help anyone else do so;',
								'try to gain unauthorized access to the Website, our systems, or any account, or test for weaknesses without our written permission;',
								'interfere with or disrupt the Website, for example by sending malware, overloading our servers, or getting around security features;',
								'use bots, scrapers, or other automated tools to collect content or data from the Website, except for standard search engine indexing that follows our robots.txt file;',
								'copy, sell, or reuse Website content in ways these Terms do not allow;',
								'use Website content to train, test, or improve any artificial intelligence or machine learning model without our written permission;',
								'pretend to be another person or organization, or misstate your connection with anyone;',
								'send spam, chain messages, or other unsolicited promotions through the Website; or',
								'submit anything that is unlawful, harmful, threatening, abusive, defamatory, or that violates someone else\'s rights.',
							]}
						/>
					</Section>

					<Section title='5. Intellectual property and your limited license'>
						<p>
							The Website and its content belong to Vision Health Holdings Inc.
							or to the people who licensed it to us. This includes text,
							graphics, logos, images, video, page design, and software. These
							materials are protected by copyright, trademark, and other laws.
						</p>
						<p>
							We give you a limited, personal, non-exclusive, non-transferable,
							and revocable license to view and use the Website for the purposes
							allowed in Section 4. You may print or save a reasonable number of
							pages for your own reference, as long as you keep all copyright
							and other notices.
						</p>
						<p>
							This license does not let you modify, republish, distribute, sell,
							or create derivative works from the Website. All rights we do not
							expressly grant to you are reserved. The DocGlasses name and logo,
							and any related names and marks, are trademarks of Vision Health
							Holdings Inc. You may not use them without our written permission.
						</p>
					</Section>

					<Section title='6. Feedback and submissions'>
						<p>
							If you send us ideas, suggestions, or other feedback about the
							Company or the Website (&quot;Feedback&quot;), you agree that we
							may use that Feedback for any purpose without paying you or giving
							you credit. We are not required to use any Feedback or to keep it
							confidential.
						</p>
						<p>
							Please do not send us confidential information or unsolicited
							business proposals through the Website. If you want to share
							confidential information, ask us first so that we can agree on
							appropriate terms in writing.
						</p>
					</Section>

					<Section title='7. Information you send through contact forms'>
						<p>
							The Website may include contact forms and email links. When you
							send us a message, you are responsible for what it says. You
							confirm that the information is accurate and that you have the
							right to share it.
						</p>
						<p>
							You keep any rights you have in your message. You give us
							permission to store, use, and copy it as needed to read it, reply
							to you, keep records, and operate the Website. We handle personal
							information in your message as described in our{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>
							.
						</p>
					</Section>

					<Section title='8. No patient information'>
						<p>
							The Website is not designed to receive patient health information.
							Please do not submit any information about a patient through the
							Website. This includes names, dates of birth, medical record
							numbers, diagnoses, treatment details, images, or any other
							information that could identify a patient or describe a
							patient&apos;s health.
						</p>
						<p>
							If you are a healthcare professional or organization and want to
							discuss a specific need, please describe it in general terms only.
							If we receive patient information through the Website by mistake,
							we may delete it.
						</p>
					</Section>

					<Section title='9. No medical, legal, or professional advice'>
						<p>
							Website content is for general information only. It is not medical,
							legal, regulatory, financial, or other professional advice. Do not
							rely on the Website to make clinical or business decisions. Always
							ask a qualified professional for advice about your situation.
						</p>
						<p>
							Any description of our technology on the Website is a general
							overview. It is not a promise about how any product works, what it
							can do, or whether it is available.
						</p>
					</Section>

					<Section title='10. Separate agreements for our products'>
						<p>
							These Terms cover the Website only. Use of any Company product or
							service, including any software application, platform, or related
							service, is governed by a separate written agreement between the
							Company and the customer or user. If these Terms conflict with that
							agreement, that agreement controls for the use of the product or
							service.
						</p>
						<p>
							Opening a product through a link on the Website does not make these
							Terms the terms for that product.
						</p>
					</Section>

					<Section title='11. Links to other websites'>
						<p>
							The Website may link to websites, videos, or services run by other
							companies. We include these links for convenience only. We do not
							control those sites, and a link does not mean we endorse them. Your
							use of another site is governed by that site&apos;s own terms and
							privacy policy.
						</p>
					</Section>

					<Section title='12. Disclaimers'>
						<p>
							THE WEBSITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND
							&quot;AS AVAILABLE.&quot; TO THE FULLEST EXTENT ALLOWED BY LAW, THE
							COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS,
							IMPLIED, OR STATUTORY. THIS INCLUDES ANY WARRANTY OF
							MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
							NON-INFRINGEMENT, ACCURACY, OR COMPLETENESS.
						</p>
						<p>
							WE DO NOT PROMISE THAT THE WEBSITE WILL BE UNINTERRUPTED, SECURE,
							OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL CODE, OR THAT ANY
							CONTENT IS CURRENT OR CORRECT.
						</p>
						<p>
							Some places do not allow certain warranties to be excluded. In
							those places, some of these exclusions may not apply to you.
						</p>
					</Section>

					<Section title='13. Limitation of liability'>
						<p>
							TO THE FULLEST EXTENT ALLOWED BY LAW, THE COMPANY AND ITS
							AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS
							WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
							CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
							PROFITS, REVENUE, DATA, OR GOODWILL, THAT ARISE FROM OR RELATE TO
							THE WEBSITE OR THESE TERMS. THIS APPLIES EVEN IF WE WERE TOLD SUCH
							DAMAGES WERE POSSIBLE.
						</p>
						<p>
							TO THE FULLEST EXTENT ALLOWED BY LAW, OUR TOTAL LIABILITY FOR ALL
							CLAIMS THAT ARISE FROM OR RELATE TO THE WEBSITE OR THESE TERMS WILL
							NOT BE MORE THAN ONE HUNDRED U.S. DOLLARS (US $100).
						</p>
						<p>
							These limits do not apply to liability that cannot be limited under
							applicable law, such as liability for fraud, gross negligence, or
							willful misconduct. These limits apply to the Website only. Any
							liability terms for a Company product or service are set by the
							separate agreement described in Section 10.
						</p>
					</Section>

					<Section title='14. Indemnification'>
						<p>
							To the extent allowed by law, you agree to defend, indemnify, and
							hold harmless Vision Health Holdings Inc. and its affiliates,
							officers, directors, employees, and agents from any third-party
							claim, loss, liability, or expense (including reasonable
							attorneys&apos; fees) that arises from your misuse of the Website,
							your breach of these Terms, or your violation of any law or the
							rights of another person. We will tell you about any such claim and
							may choose to take part in the defense with our own lawyers.
						</p>
					</Section>

					<Section title='15. Suspension and termination'>
						<p>
							We may suspend or end your access to all or part of the Website at
							any time, without notice, if we reasonably believe you have broken
							these Terms, created a risk for us or others, or if the law
							requires it. You may stop using the Website at any time.
						</p>
						<p>
							Sections 5 through 9 and 12 through 22 continue to apply after your
							access ends.
						</p>
					</Section>

					<Section title='16. Governing law and venue'>
						<p>
							These Terms are governed by the laws of the State of Delaware,
							without regard to its conflict of law rules. Subject to Section 17,
							any lawsuit that arises from or relates to these Terms or the
							Website must be filed only in the state or federal courts located
							in the State of Delaware. You and the Company agree to the personal
							jurisdiction of those courts.
						</p>
					</Section>

					<Section title='17. Resolving disputes'>
						<p>
							If you have a concern about the Website, please contact us first at{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>
							. Most issues can be resolved quickly this way. Before either of us
							starts a formal proceeding, the party with the concern will send
							the other a written description of the issue. We will then both try
							in good faith to resolve it for at least 30 days.
						</p>
						<p>
							If the issue is not resolved within that time, either of us may
							bring a claim as described in Section 16.
						</p>
						<p>
							Either of us may ask a court for a temporary or emergency order to
							protect intellectual property or to stop unauthorized access to the
							Website. Any claim you have about the Website must be brought
							within one year after it arises, to the extent the law allows this
							time limit.
						</p>
					</Section>

					<Section title='18. Copyright complaints'>
						<p>
							We respect the rights of copyright owners. If you believe content
							on the Website infringes your copyright, please send a written
							notice to our designated copyright agent. Your notice should
							include:
						</p>
						<BulletList
							items={[
								'your physical or electronic signature;',
								'a description of the copyrighted work you believe was infringed;',
								'a description of where the material is located on the Website, such as the page address;',
								'your name, address, telephone number, and email address;',
								'a statement that you believe in good faith that the use is not authorized by the copyright owner, its agent, or the law; and',
								'a statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or are authorized to act for the owner.',
							]}
						/>
						<p>
							Designated copyright agent: Copyright Agent, Vision Health Holdings
							Inc, {NOTICE_ADDRESS},{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>
							.
						</p>
						<p>
							We may remove material that we believe in good faith infringes
							another person&apos;s rights.
						</p>
					</Section>

					<Section title='19. Events beyond our control'>
						<p>
							We are not responsible for any delay or failure to operate the
							Website that is caused by events beyond our reasonable control.
							Examples include natural disasters, fire, flood, pandemics, war,
							terrorism, civil unrest, labor disputes, government action, power
							or internet outages, and failures of third-party hosting or
							communications services.
						</p>
					</Section>

					<Section title='20. Severability and waiver'>
						<p>
							If a court finds any part of these Terms unenforceable, that part
							will be enforced to the greatest extent allowed, and the rest of
							these Terms will stay in effect. If we do not enforce a part of
							these Terms at a given time, that does not waive our right to
							enforce it later.
						</p>
					</Section>

					<Section title='21. Entire agreement and assignment'>
						<p>
							These Terms and our{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>{' '}
							are the entire agreement between you and the Company about the
							Website. They replace any earlier understanding about the Website.
							They do not replace any separate written agreement for a Company
							product or service, as described in Section 10.
						</p>
						<p>
							You may not transfer your rights or duties under these Terms without
							our written consent. We may transfer ours, for example as part of a
							merger, acquisition, or sale of assets. Section headings are for
							convenience only and do not change the meaning of these Terms.
						</p>
					</Section>

					<Section title='22. Notice to California users'>
						<p>
							Under California Civil Code Section 1789.3, California users are
							entitled to the following notice. The Website is provided by Vision
							Health Holdings Inc, {NOTICE_ADDRESS}. We do not charge any fee to
							use the Website. If you have a complaint or question about the
							Website, please contact us at{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>
							. You may also contact the Complaint Assistance Unit of the
							Division of Consumer Services of the California Department of
							Consumer Affairs in writing at 1625 North Market Boulevard, Suite N
							112, Sacramento, California 95834, or by telephone at (800)
							952-5210.
						</p>
					</Section>

					<Section title='23. Contact us'>
						<p>
							If you have questions about these Terms, please contact us:
						</p>
						<ul className='list-disc pl-5 space-y-3'>
							<li>
								<strong>Vision Health Holdings Inc</strong>
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
						<p>
							For questions about personal information, please email{' '}
							<a
								href='mailto:privacy@docglasses.ai'
								className='text-teal-400 hover:underline'
							>
								privacy@docglasses.ai
							</a>{' '}
							or see our{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>
							.
						</p>
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

function BulletList({ items }: { items: ReactNode[] }) {
	return (
		<ul className='list-disc pl-5 space-y-2'>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}
