/** @format */

'use client';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Link from 'next/link';
import type { ReactNode } from 'react';

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
						Terms of Use
					</h1>
					<p
						className='font-dm tracking-wider uppercase text-xs sm:text-sm font-semibold'
						style={{ color: 'var(--brand)' }}
					>
						Last updated: April 14, 2026
					</p>
				</div>

				<div className='flex-1 w-full space-y-12'>
					<Section title='1. Introduction'>
						<p>
							These Terms of Use (“Terms”) govern access to and use of the
							DocGlasses website, applications, smart-device integrations,
							clinical-support services, Center of Excellence platform, patient
							applications, APIs, and related technology services collectively
							referred to as the “DocGlasses Platform” or “Services.”
						</p>
						<p>
							DocGlasses is operated by{' '}
							<strong>Vision Health Holdings Inc.</strong> (“DocGlasses”,
							“we”, “our”, or “us”).
						</p>
						<p>
							The DocGlasses Platform is an AI-enabled healthcare technology
							platform intended to support healthcare professionals, frontline
							healthcare workers, healthcare institutions, government healthcare
							programs, and patients.
						</p>
						<p>
							By accessing or using the Services, you agree to these Terms and
							our{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>
							.
						</p>
						<p>
							If you use DocGlasses on behalf of a hospital, government
							department, healthcare institution, organization, or other entity,
							you represent that you are authorized to use the Services on its
							behalf.
						</p>
					</Section>

					<Section title='2. Scope of DocGlasses'>
						<p>DocGlasses provides technology that may support:</p>
						<BulletList
							items={[
								'patient registration and encounter management;',
								'clinical documentation;',
								'AI-assisted history taking;',
								'AI-assisted triage;',
								'clinical decision support;',
								'differential-diagnosis support;',
								'referral workflows;',
								'connected diagnostic-device capture;',
								'medical report and prescription processing;',
								'consultation audio processing;',
								'smart-glasses workflows;',
								'tele-supervision and clinical escalation;',
								'patient health-record access;',
								'ABDM interoperability;',
								'clinical workflow analytics; and',
								'healthcare program monitoring.',
							]}
						/>
						<p>
							Specific features available to a user depend on the deployment,
							healthcare institution, user role, device configuration, and
							applicable agreements.
						</p>
					</Section>

					<Section title='3. DocGlasses Is a Technology Platform'>
						<p>
							DocGlasses is not a hospital, clinic, pharmacy, diagnostic
							laboratory, ambulance service, or independent medical practitioner.
						</p>
						<p>
							DocGlasses provides technology to assist authorized healthcare
							professionals and institutions.
						</p>
						<p>Except where expressly stated otherwise:</p>
						<BulletList
							items={[
								'medical care is provided by independent healthcare professionals or healthcare institutions;',
								'DocGlasses does not independently establish a doctor-patient relationship;',
								'DocGlasses does not independently prescribe medicines;',
								'DocGlasses does not independently make final diagnoses;',
								'DocGlasses does not independently determine treatment; and',
								'DocGlasses does not replace professional clinical judgment.',
							]}
						/>
						<p>
							Doctors and other appropriately authorized healthcare
							professionals remain responsible for clinical decisions and
							patient care.
						</p>
					</Section>

					<Section title='4. Artificial Intelligence and Clinical Decision Support'>
						<p>
							DocGlasses uses artificial intelligence and other computational
							systems to assist healthcare delivery.
						</p>
						<p>AI functionality may include:</p>
						<BulletList
							items={[
								'understanding clinical conversations;',
								'generating suggested triage questions;',
								'identifying potentially relevant symptoms or missing information;',
								'summarizing consultations;',
								'extracting information from medical documents;',
								'suggesting possible differential considerations;',
								'identifying clinical red flags;',
								'generating draft clinical documentation;',
								'generating draft referral documentation; and',
								'providing workflow recommendations.',
							]}
						/>

						<SubSection title='4.1 AI Outputs Are Assistive'>
							<p>
								AI-generated outputs are supportive recommendations and drafts.
							</p>
							<p>They are not substitutes for:</p>
							<BulletList
								items={[
									'clinical examination;',
									'professional medical judgment;',
									'diagnostic testing;',
									'applicable clinical guidelines; or',
									'emergency medical assessment.',
								]}
							/>
							<p>
								Authorized healthcare professionals must review clinically
								relevant AI output before relying on it.
							</p>
						</SubSection>

						<SubSection title='4.2 AI May Make Errors'>
							<p>
								Users acknowledge that artificial intelligence systems may:
							</p>
							<BulletList
								items={[
									'misunderstand speech;',
									'incorrectly transcribe conversations;',
									'omit important information;',
									'misinterpret medical documents;',
									'generate inaccurate recommendations;',
									'generate incomplete summaries; or',
									'produce information inconsistent with the clinical situation.',
								]}
							/>
							<p>
								Users must exercise appropriate professional judgment when
								reviewing AI-generated information.
							</p>
						</SubSection>

						<SubSection title='4.3 Human Oversight'>
							<p>
								Where DocGlasses is used to support diagnosis, treatment, triage,
								referral, or another clinically significant decision, final
								responsibility remains with the appropriately qualified
								healthcare professional.
							</p>
							<p>DocGlasses may require additional human review where:</p>
							<BulletList
								items={[
									'the AI confidence level is low;',
									'a potential emergency condition is identified;',
									'conflicting clinical information is detected; or',
									'the workflow has been classified as higher risk.',
								]}
							/>
						</SubSection>
					</Section>

					<Section title='5. Emergency Medical Situations'>
						<p>
							DocGlasses must not be relied upon as the sole method for
							identifying or managing a medical emergency.
						</p>
						<p>
							If a patient appears to require emergency medical attention, users
							must follow applicable emergency protocols and seek immediate
							professional medical assistance.
						</p>
						<p>Users must not delay:</p>
						<BulletList
							items={[
								'calling emergency services;',
								'transferring a patient;',
								'initiating emergency protocols;',
								'providing clinically indicated treatment; or',
								'seeking specialist support',
							]}
						/>
						<p>
							while waiting for DocGlasses, an AI recommendation, network
							connectivity, or a Center of Excellence response.
						</p>
					</Section>

					<Section title='6. Healthcare Professional Users'>
						<p>Healthcare professionals using DocGlasses represent that they:</p>
						<BulletList
							items={[
								'possess the qualifications, registrations, permissions, or authority required for their role;',
								'will use DocGlasses within their professional scope of practice;',
								'will comply with applicable medical and professional standards;',
								'will independently review clinically significant AI-generated outputs;',
								'will ensure documentation entered into the patient’s health record is reasonably accurate; and',
								'will not represent AI-generated output as independently verified medical fact without appropriate review.',
							]}
						/>
						<p>
							DocGlasses does not independently verify every user’s professional
							qualification unless such verification forms part of the
							applicable institutional deployment.
						</p>
					</Section>

					<Section title='7. ASHA Workers, ANMs and Other Frontline Healthcare Workers'>
						<p>
							DocGlasses may be used by ASHA workers, ANMs, Community Health
							Officers, and other frontline healthcare personnel.
						</p>
						<p>The Platform may guide these users through:</p>
						<BulletList
							items={[
								'structured patient intake;',
								'screening;',
								'protocol-based questions;',
								'diagnostic-device capture;',
								'risk identification;',
								'referral workflows; and',
								'escalation to qualified healthcare professionals.',
							]}
						/>
						<p>
							Such functionality does not expand a worker’s legally permitted
							clinical scope.
						</p>
						<p>
							Frontline workers must follow applicable government protocols,
							institutional policies, training requirements, and escalation
							rules.
						</p>
					</Section>

					<Section title='8. Institutional and Government Deployments'>
						<p>DocGlasses may be deployed by:</p>
						<BulletList
							items={[
								'State Governments;',
								'government health departments;',
								'public health programs;',
								'hospitals;',
								'PHCs;',
								'CHCs;',
								'medical colleges;',
								'district hospitals; and',
								'other healthcare organizations.',
							]}
						/>
						<p>
							Where DocGlasses is deployed under a separate master services
							agreement, government contract, tender, memorandum of
							understanding, data-processing agreement, business associate
							arrangement, or similar institutional agreement, that agreement
							will govern the institutional deployment.
						</p>
						<p>
							If there is a conflict between these public Terms and a signed
							institutional agreement, the signed institutional agreement will
							prevail for that deployment to the extent of the conflict.
						</p>
						<p>Institutions are responsible for:</p>
						<BulletList
							items={[
								'providing appropriate user authorization;',
								'defining permitted clinical workflows;',
								'training authorized users;',
								'configuring access according to staff roles; and',
								'ensuring use complies with applicable healthcare regulations and institutional policies.',
							]}
						/>
					</Section>

					<Section title='9. Smart Glasses and Wearable Devices'>
						<p>
							DocGlasses may integrate with Meta glasses or other approved
							wearable devices.
						</p>
						<p>These devices may enable:</p>
						<BulletList
							items={[
								'audio capture;',
								'clinical conversation processing;',
								'photographs;',
								'document capture;',
								'video capture;',
								'hands-free interaction; and',
								'remote clinical collaboration.',
							]}
						/>
						<p>
							Users must use recording capabilities only for approved healthcare
							purposes.
						</p>
						<p>
							Users must not use DocGlasses-enabled wearable devices for:
						</p>
						<BulletList
							items={[
								'covert surveillance;',
								'unauthorized recording;',
								'recording unrelated individuals;',
								'recording in prohibited areas;',
								'personal surveillance;',
								'harassment; or',
								'any unlawful purpose.',
							]}
						/>
						<p>
							Appropriate patient notice and consent must be obtained where
							required.
						</p>
					</Section>

					<Section title='10. Consultation Audio'>
						<p>
							DocGlasses may process consultation audio through supported smart
							glasses, mobile applications, tablets, or other approved devices.
						</p>
						<p>Audio may be used to:</p>
						<BulletList
							items={[
								'generate transcripts;',
								'understand clinical context;',
								'suggest relevant questions;',
								'create encounter summaries; and',
								'generate clinical documentation.',
							]}
						/>
						<p>
							Healthcare professionals and institutions are responsible for
							following applicable notice and consent requirements before
							activating recording or audio-processing functionality.
						</p>
						<p>
							Raw audio retention may vary by deployment configuration.
						</p>
					</Section>

					<Section title='11. Images and Video'>
						<p>
							DocGlasses may support capture or processing of clinical images or
							video including:
						</p>
						<BulletList
							items={[
								'prescriptions;',
								'laboratory reports;',
								'wounds;',
								'visible clinical findings;',
								'diagnostic-device screens;',
								'medical documents; and',
								'live clinical or tele-supervision video.',
							]}
						/>
						<p>
							Users should capture only information reasonably required for the
							healthcare workflow.
						</p>
						<p>
							Users must take reasonable steps to avoid capturing unrelated
							individuals or unnecessary personal information.
						</p>
					</Section>

					<Section title='12. Connected Medical Devices'>
						<p>DocGlasses may integrate with devices including:</p>
						<BulletList
							items={[
								'blood-pressure monitors;',
								'glucometers;',
								'ECG devices;',
								'pulse oximeters;',
								'thermometers;',
								'digital stethoscopes; and',
								'other approved diagnostic devices.',
							]}
						/>
						<p>
							DocGlasses may display, store, transmit, or analyze readings
							received from such devices.
						</p>
						<p>
							Unless DocGlasses itself manufactures the device, the underlying
							medical device remains subject to its manufacturer’s
							specifications, regulatory status, calibration requirements,
							warranties, and instructions for use.
						</p>
						<p>
							DocGlasses does not guarantee the accuracy of measurements generated
							by a third-party device. Users should verify clinically
							significant extracted information against the original source
							document where required.
						</p>
						<p>
							Healthcare professionals must verify clinically unexpected or
							implausible readings where appropriate.
						</p>
					</Section>

					<Section title='13. Medical Document Processing'>
						<p>DocGlasses may use AI systems to process:</p>
						<BulletList
							items={[
								'prescriptions;',
								'laboratory reports;',
								'discharge summaries;',
								'medical records;',
								'referral documents; and',
								'other clinical materials.',
							]}
						/>
						<p>Automated document extraction may contain errors.</p>
						<p>
							Users should verify clinically significant extracted information
							against the original source document where required.
						</p>
						<p>
							The original medical document remains the authoritative source
							where there is a discrepancy between the original and an
							AI-generated extraction.
						</p>
					</Section>

					<Section title='14. ABDM and ABHA Integration'>
						<p>
							DocGlasses may integrate with the Ayushman Bharat Digital Mission
							(“ABDM”).
						</p>
						<p>Depending on the deployment, DocGlasses may support:</p>
						<BulletList
							items={[
								'ABHA identification;',
								'care-context creation or linking;',
								'health-record creation;',
								'health-record exchange;',
								'consent-based access; and',
								'other approved ABDM workflows.',
							]}
						/>
						<p>
							Access to an ABHA identifier does not provide unrestricted access
							to a patient’s health records.
						</p>
						<p>
							All ABDM functionality must be used according to applicable ABDM
							requirements, consent mechanisms, institutional policies, and law.
						</p>
						<p>Users must not:</p>
						<BulletList
							items={[
								'impersonate another person;',
								'access another person’s ABHA-linked information without authorization;',
								'attempt to circumvent consent mechanisms; or',
								'misuse ABDM credentials or health records.',
							]}
						/>
					</Section>

					<Section title='15. Patient Application'>
						<p>
							DocGlasses may provide a patient-facing application or portal.
						</p>
						<p>Patients may use it to:</p>
						<BulletList
							items={[
								'view consultation summaries;',
								'access prescriptions;',
								'view medical reports;',
								'track referrals;',
								'view historical encounters;',
								'receive reminders;',
								'access follow-up information; and',
								'participate in consent-based record sharing.',
							]}
						/>
						<p>
							Information displayed in the patient application does not replace
							a medical consultation.
						</p>
						<p>
							Patients should contact a qualified healthcare professional for
							medical advice, diagnosis, treatment, or interpretation of
							clinically significant information.
						</p>
					</Section>

					<Section title='16. Center of Excellence Services'>
						<p>
							Certain DocGlasses deployments may include a Center of Excellence
							(“COE”) through which authorized healthcare professionals provide:
						</p>
						<BulletList
							items={[
								'case review;',
								'specialist support;',
								'clinical escalation;',
								'supervision;',
								'referral assistance; and',
								'quality monitoring.',
							]}
						/>
						<p>
							Availability of COE support is not guaranteed at all times unless
							otherwise specified in an institutional service-level agreement.
						</p>
						<p>
							Users must not delay urgent medical care while awaiting COE
							assistance.
						</p>
					</Section>

					<Section title='17. Accounts and Authentication'>
						<p>Certain Services require a registered user account.</p>
						<p>Users must:</p>
						<BulletList
							items={[
								'provide accurate registration information;',
								'maintain the confidentiality of credentials;',
								'use only accounts assigned to them;',
								'not share authentication credentials;',
								'immediately report suspected unauthorized access; and',
								'comply with applicable multi-factor authentication requirements.',
							]}
						/>
						<p>
							Institutional administrators may manage account creation,
							suspension, role assignment, and termination.
						</p>
						<p>
							Users are responsible for activities conducted through their
							account where such activities result from failure to reasonably
							protect their credentials.
						</p>
					</Section>

					<Section title='18. Role-Based Access'>
						<p>Access to DocGlasses may depend on user role.</p>
						<p>Roles may include:</p>
						<BulletList
							items={[
								'patient;',
								'ASHA worker;',
								'ANM;',
								'Community Health Officer;',
								'doctor;',
								'nurse;',
								'specialist;',
								'hospital administrator;',
								'COE clinician;',
								'program administrator; and',
								'system administrator.',
							]}
						/>
						<p>
							Users may access only information required for their authorized
							role.
						</p>
						<p>
							Attempting to access information outside an authorized scope is
							prohibited.
						</p>
					</Section>

					<Section title='19. User Responsibilities'>
						<p>Users must:</p>
						<BulletList
							items={[
								'provide reasonably accurate information;',
								'maintain appropriate confidentiality;',
								'use DocGlasses only for authorized purposes;',
								'follow clinical and institutional protocols;',
								'respect patient privacy;',
								'review clinically relevant AI-generated outputs;',
								'protect login credentials;',
								'maintain approved devices reasonably securely;',
								'report suspected security incidents;',
								'keep application credentials and login details safe; and',
								'not deliberately input false or misleading patient information.',
							]}
						/>
					</Section>

					<Section title='20. Prohibited Uses'>
						<p>You may not use DocGlasses to:</p>
						<BulletList
							items={[
								'violate any applicable law;',
								'impersonate another person;',
								'access health records without authorization;',
								'conduct unauthorized surveillance;',
								'record patients without required notice or authorization;',
								'harm or discriminate against another person;',
								'develop malware;',
								'circumvent security controls;',
								'extract credentials;',
								'perform unauthorized penetration testing;',
								'scrape or systematically extract protected information;',
								'reverse engineer restricted portions of the Platform except where legally permitted;',
								'train competing AI models using protected DocGlasses output or proprietary materials without authorization;',
								'use the Services to make fully autonomous clinical decisions where human oversight is required;',
								'intentionally submit harmful or malicious content; or',
								'interfere with the operation of the Services.',
							]}
						/>
					</Section>

					<Section title='21. Privacy and Personal Data'>
						<p>
							Use of personal data through DocGlasses is governed by the{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								DocGlasses Privacy Policy
							</Link>{' '}
							and, where applicable, agreements with the relevant healthcare
							institution or government authority.
						</p>
						<p>The Privacy Policy explains, among other things:</p>
						<BulletList
							items={[
								'categories of information processed;',
								'consultation audio processing;',
								'image and report processing;',
								'diagnostic-device information;',
								'artificial-intelligence processing;',
								'ABDM integration;',
								'data sharing;',
								'data retention;',
								'individual rights; and',
								'security practices.',
							]}
						/>
						<p>The Privacy Policy forms part of these Terms.</p>
					</Section>

					<Section title='22. Third-Party Artificial Intelligence Services'>
						<p>
							DocGlasses may use specialized third-party AI technologies.
						</p>
						<p>
							Depending on the deployment, these may include services from
							providers such as:
						</p>
						<BulletList
							items={[
								'Google / Gemini; and',
								'Anthropic / Claude.',
							]}
						/>
						<p>
							Other AI services may also be used. Such services may support
							functions including:
						</p>
						<BulletList
							items={[
								'consultation understanding;',
								'real-time triage-question generation;',
								'summarization;',
								'OCR;',
								'medical-document processing; and',
								'structured information extraction.',
							]}
						/>
						<p>
							The specific AI architecture may vary by deployment.
						</p>
						<p>
							Government or institutional installations may use different
							providers, private models, locally hosted models, or restricted
							AI processing based on contractual and security requirements.
						</p>
					</Section>

					<Section title='23. Third-Party Platforms and Services'>
						<p>DocGlasses may interact with third-party technologies including:</p>
						<BulletList
							items={[
								'smart-glasses platforms;',
								'mobile operating systems;',
								'cloud providers;',
								'diagnostic devices;',
								'laboratories;',
								'hospital information systems;',
								'government health systems;',
								'communications providers; and',
								'ABDM infrastructure.',
							]}
						/>
						<p>
							Third-party products may be governed by their own terms.
						</p>
						<p>
							DocGlasses is not responsible for failures or limitations of
							independent third-party services outside its reasonable control.
						</p>
					</Section>

					<Section title='24. Service Availability'>
						<p>
							We aim to provide reliable Services but do not guarantee
							uninterrupted availability.
						</p>
						<p>Service may be affected by:</p>
						<BulletList
							items={[
								'internet connectivity;',
								'mobile-network coverage;',
								'third-party APIs;',
								'cloud infrastructure;',
								'hardware failure;',
								'maintenance;',
								'cybersecurity incidents;',
								'emergency maintenance;',
								'government infrastructure; or',
								'circumstances beyond our reasonable control.',
							]}
						/>
						<p>
							DocGlasses may provide offline or degraded functionality for certain
							workflows, but such functionality may not be available for every
							Service.
						</p>
						<p>
							Clinical users should maintain appropriate fallback procedures.
						</p>
					</Section>

					<Section title='25. Service Updates'>
						<p>DocGlasses may:</p>
						<BulletList
							items={[
								'update the Platform;',
								'modify AI models;',
								'update clinical workflows;',
								'improve security;',
								'update device integrations;',
								'discontinue obsolete functionality; or',
								'introduce new features.',
							]}
						/>
						<p>
							Material changes affecting an institutional deployment may be
							governed by the applicable institutional agreement or
							change-management procedure.
						</p>
						<p>
							High-impact clinical AI changes may be subject to additional
							validation or governance before deployment.
						</p>
					</Section>

					<Section title='26. Clinical Protocols'>
						<p>DocGlasses may incorporate:</p>
						<BulletList
							items={[
								'government health protocols;',
								'institutional protocols;',
								'clinical pathways;',
								'public-health guidelines; and',
								'other approved healthcare guidance.',
							]}
						/>
						<p>Protocols may differ by:</p>
						<BulletList
							items={[
								'geography;',
								'institution;',
								'patient population;',
								'user role; and',
								'healthcare program.',
							]}
						/>
						<p>
							The presence of a protocol in DocGlasses does not eliminate the need
							for professional clinical judgment.
						</p>
						<p>
							Where institutional policies conflict with generic DocGlasses
							guidance, authorized institutional protocols should govern subject
							to applicable law.
						</p>
					</Section>

					<Section title='27. Intellectual Property'>
						<p>The DocGlasses Platform, including its:</p>
						<BulletList
							items={[
								'software;',
								'user interfaces;',
								'models developed by DocGlasses;',
								'workflows;',
								'algorithms;',
								'prompts;',
								'protocol engines;',
								'designs;',
								'documentation;',
								'trademarks;',
								'logos;',
								'analytics; and',
								'proprietary technology',
							]}
						/>
						<p>is owned by DocGlasses or its licensors.</p>
						<p>
							Subject to these Terms and applicable institutional agreements,
							users receive a limited, non-exclusive, non-transferable right to
							use the Services for authorized purposes.
						</p>
						<p>No ownership rights are transferred to users.</p>
					</Section>

					<Section title='28. User and Institutional Data'>
						<p>
							As between DocGlasses and the relevant patient, healthcare provider,
							institution, or government authority, ownership and control of
							clinical data will be determined by applicable law and the
							relevant institutional agreement.
						</p>
						<p>
							DocGlasses does not claim ownership of a patient’s underlying
							medical information merely because it is processed through the
							Platform.
						</p>
						<p>
							Users grant DocGlasses the limited rights necessary to process
							information for authorized provision, operation, security, and
							improvement of the Services, subject to applicable privacy
							requirements and contractual restrictions.
						</p>
					</Section>

					<Section title='29. Feedback'>
						<p>
							Users may provide suggestions, comments, or feedback about
							DocGlasses.
						</p>
						<p>
							Unless otherwise agreed, DocGlasses may use general product feedback
							to improve the Platform without an obligation to compensate the
							person providing the feedback.
						</p>
						<p>
							This does not grant DocGlasses ownership of patient health
							information.
						</p>
					</Section>

					<Section title='30. Security'>
						<p>
							DocGlasses implements reasonable technical and organizational
							safeguards appropriate to the nature of its Services.
						</p>
						<p>These may include:</p>
						<BulletList
							items={[
								'encryption;',
								'role-based access control;',
								'multifactor authentication;',
								'device controls;',
								'audit logging;',
								'access monitoring;',
								'vulnerability management;',
								'incident response;',
								'secure backups; and',
								'business-continuity controls.',
							]}
						/>
						<p>
							Users must immediately notify DocGlasses or their institutional
							administrator of suspected:
						</p>
						<BulletList
							items={[
								'unauthorized access;',
								'credential compromise;',
								'device loss;',
								'privacy breach; or',
								'cybersecurity incident.',
							]}
						/>
					</Section>

					<Section title='31. Suspension and Termination'>
						<p>
							DocGlasses or an authorized institutional administrator may suspend
							or terminate access where:
						</p>
						<BulletList
							items={[
								'these Terms are materially violated;',
								'unauthorized access is suspected;',
								'patient safety may be at risk;',
								'security may be compromised;',
								'required payments remain outstanding under an applicable commercial agreement;',
								'a user’s institutional authorization ends; or',
								'suspension is required by law or government authority.',
							]}
						/>
						<p>Where feasible, appropriate notice will be provided.</p>
						<p>
							Certain provisions of these Terms will survive termination,
							including provisions relating to confidentiality, intellectual
							property, liability, and dispute resolution.
						</p>
					</Section>

					<Section title='32. Disclaimer of Warranties'>
						<p>
							To the maximum extent permitted by applicable law, the Services
							are provided on an “as available” basis.
						</p>
						<p>DocGlasses does not warrant that:</p>
						<BulletList
							items={[
								'the Platform will always be uninterrupted;',
								'every transcription will be accurate;',
								'every AI output will be correct;',
								'every diagnostic-device transmission will be error-free;',
								'every third-party integration will always be available; or',
								'use of DocGlasses will guarantee a particular clinical outcome.',
							]}
						/>
						<p>
							Nothing in these Terms excludes obligations that cannot lawfully
							be excluded.
						</p>
					</Section>

					<Section title='33. Limitation of Liability'>
						<p>
							Nothing in these Terms is intended to exclude or limit liability
							where such exclusion or limitation is prohibited by applicable
							law.
						</p>
						<p>
							Subject to applicable law and any separate institutional
							agreement, DocGlasses will not be liable for indirect, incidental,
							special, exemplary, punitive, or consequential losses arising
							solely from use of the Platform.
						</p>
						<p>
							DocGlasses is not responsible for a healthcare professional’s
							independent clinical decision merely because DocGlasses technology
							was used during the encounter.
						</p>
						<p>
							However, these Terms do not waive liability arising from
							DocGlasses’s own obligations where applicable law does not permit
							such waiver.
						</p>
						<p>
							For institutional deployments, liability limitations should be
							governed by the applicable signed agreement.
						</p>
					</Section>

					<Section title='34. Indemnification'>
						<p>
							To the extent permitted by applicable law, users acting outside
							an institutional deployment agree to indemnify DocGlasses against
							third-party claims arising from:
						</p>
						<BulletList
							items={[
								'intentional misuse of the Platform;',
								'unauthorized access to patient information;',
								'unlawful recording;',
								'infringement of third-party rights; or',
								'material violation of these Terms.',
							]}
						/>
						<p>
							This provision does not apply where prohibited by applicable law.
						</p>
						<p>
							Institutional indemnification obligations, if any, will be
							governed by the applicable signed agreement.
						</p>
					</Section>

					<Section title='35. Government and Institutional Requirements'>
						<p>Nothing in these public Terms overrides:</p>
						<BulletList
							items={[
								'mandatory government procurement conditions;',
								'statutory healthcare obligations;',
								'applicable government data policies;',
								'legally binding tenders;',
								'institutional service agreements;',
								'data-processing agreements; or',
								'government cybersecurity requirements.',
							]}
						/>
						<p>
							Such requirements may impose stronger obligations than these
							Terms.
						</p>
					</Section>

					<Section title='36. Changes to These Terms'>
						<p>
							DocGlasses may update these Terms from time to time to reflect:
						</p>
						<BulletList
							items={[
								'new Services;',
								'changes in law;',
								'regulatory developments;',
								'security requirements;',
								'changes in technology; or',
								'changes in business operations.',
							]}
						/>
						<p>
							Material changes will be communicated through reasonable means.
						</p>
						<p>
							The current version will be published on the DocGlasses website with
							its effective date.
						</p>
						<p>
							Continued use after the effective date of updated Terms
							constitutes acceptance where permitted by law.
						</p>
					</Section>

					<Section title='37. Electronic Communications'>
						<p>
							Users may receive service-related electronic communications
							including:
						</p>
						<BulletList
							items={[
								'security notices;',
								'system alerts;',
								'account notifications;',
								'policy updates;',
								'appointment or follow-up reminders; and',
								'operational communications.',
							]}
						/>
						<p>
							Service-related communications may be necessary for use of
							DocGlasses.
						</p>
						<p>
							Marketing communications, where offered, will be subject to
							applicable consent and opt-out requirements.
						</p>
					</Section>

					<Section title='38. Governing Law'>
						<p>
							These Terms will be governed by the laws of India, without
							prejudice to mandatory rights or laws that apply to a particular
							user or government deployment.
						</p>
						<p>
							Institutional and government deployments may specify their own
							governing-law and dispute-resolution provisions in the applicable
							agreement.
						</p>
					</Section>

					<Section title='39. Dispute Resolution'>
						<p>
							Users should first attempt to resolve concerns by contacting
							DocGlasses.
						</p>
						<p>
							If a dispute cannot be resolved amicably, disputes relating to
							direct use of DocGlasses will be resolved according to the
							dispute-resolution mechanism and jurisdiction of courts of New
							Delhi, India.
						</p>
						<p>
							For government, hospital, or institutional deployments, the
							dispute-resolution provisions of the applicable signed agreement
							will prevail.
						</p>
					</Section>

					<Section title='40. Severability'>
						<p>
							If any provision of these Terms is held invalid or unenforceable,
							the remaining provisions will continue in effect to the maximum
							extent permitted by law.
						</p>
					</Section>

					<Section title='41. No Waiver'>
						<p>
							Failure by DocGlasses to enforce a provision of these Terms does not
							constitute a waiver of that provision or any other right.
						</p>
					</Section>

					<Section title='42. Assignment'>
						<p>
							DocGlasses may assign its rights or obligations as part of:
						</p>
						<BulletList
							items={[
								'a corporate restructuring;',
								'merger;',
								'acquisition;',
								'transfer of business; or',
								'other lawful corporate transaction,',
							]}
						/>
						<p>subject to applicable law and contractual obligations.</p>
						<p>
							Users may not transfer institutional access credentials or rights
							without authorization.
						</p>
					</Section>

					<Section title='43. Entire Agreement'>
						<p>
							For ordinary website and direct-user use, these Terms together
							with the{' '}
							<Link
								href='/privacy-policy'
								className='text-teal-400 hover:underline'
							>
								Privacy Policy
							</Link>{' '}
							constitute the agreement governing use of the DocGlasses Platform.
						</p>
						<p>
							For institutional deployments, these Terms should be read together
							with the applicable:
						</p>
						<BulletList
							items={[
								'master services agreement;',
								'government contract;',
								'statement of work;',
								'data-processing agreement;',
								'business associate or confidentiality agreement;',
								'service-level agreement; and',
								'other signed contractual documents.',
							]}
						/>
						<p>
							Where those documents conflict with these Terms, the signed
							institutional documents will prevail for that deployment.
						</p>
					</Section>

					<Section title='44. Contact Information'>
						<p>Questions concerning these Terms may be directed to:</p>
						<ul className='list-disc pl-5 space-y-3'>
							<li>
								<strong>Platform:</strong> DocGlasses
							</li>
							<li>
								<strong>Legal Entity:</strong> Vision Health Holdings Inc.
							</li>
							<li>
								<strong>Registered Address:</strong> 16192 Coastal Highway Lewes, DE 19958
							</li>
							<li>
								<strong>Legal Email:</strong>{' '}
								<a
									href='mailto:danish@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									danish@docglasses.ai
								</a>
							</li>
							<li>
								<strong>Privacy Email:</strong>{' '}
								<a
									href='mailto:danish@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									danish@docglasses.ai
								</a>
							</li>
							<li>
								<strong>Support Email:</strong>{' '}
								<a
									href='mailto:danish@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									danish@docglasses.ai
								</a>
							</li>
						</ul>
						<p>
							For questions concerning patient care or a medical record created
							by a specific hospital, PHC, CHC, doctor, or government program,
							users should also contact the relevant healthcare provider or
							institution.
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

