/** @format */

'use client';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import type { ReactNode } from 'react';

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
						Last updated: April 14, 2026
					</p>
				</div>

				<div className='flex-1 w-full space-y-12'>
					<Section title='1. Introduction'>
						<p>
							DocGlasses is an AI-enabled healthcare technology platform designed
							to support healthcare professionals, frontline health workers,
							healthcare institutions, and patients with clinical documentation,
							assisted triage, health-record management, diagnostic-data
							capture, referral workflows, and continuity of care.
						</p>
						<p>
							DocGlasses is operated by Vision Health Holdings Inc.
							(“DocGlasses”, “we”, “our”, or “us”).
						</p>
						<p>
							Protecting the confidentiality, integrity, and privacy of health
							information is fundamental to the design and operation of
							DocGlasses.
						</p>
						<p>
							This Privacy Policy explains how personal data is collected, used,
							processed, shared, stored, and protected when individuals interact
							with:
						</p>
						<BulletList
							items={[
								'the DocGlasses website;',
								'DocGlasses Primary application;',
								'DocGlasses Capture application;',
								'DocGlasses Patient application;',
								'DocGlasses smart-glasses and connected-device workflows;',
								'DocGlasses Center of Excellence (“COE”) platform;',
								'integrations with healthcare institutions and government health systems; and',
								'related DocGlasses services.',
							]}
						/>
						<p>
							DocGlasses is designed to align with applicable Indian privacy and
							digital-health requirements, including the Digital Personal Data
							Protection Act, 2023 (“DPDP Act”), applicable provisions of the
							Digital Personal Data Protection Rules, 2025 as they come into
							force, and applicable Ayushman Bharat Digital Mission (“ABDM”)
							requirements.
						</p>
					</Section>

					<Section title='2. Our Role in Processing Health Data'>
						<p>
							DocGlasses may operate in different roles depending on the service
							being provided.
						</p>

						<SubSection title='2.1 Services Provided to Hospitals and Government Health Systems'>
							<p>
								Where DocGlasses is deployed by a hospital, Primary Health Centre
								(“PHC”), Community Health Centre (“CHC”), government department,
								State Health Authority, or other healthcare institution, that
								institution may determine the purposes for which patient
								information is processed.
							</p>
							<p>
								In such circumstances, the healthcare institution may act as the
								Data Fiduciary, and DocGlasses may process data on its behalf as a
								Data Processor, subject to contractual and legal requirements.
							</p>
							<p>
								Patients should also refer to the privacy notice issued by the
								relevant healthcare institution.
							</p>
						</SubSection>

						<SubSection title='2.2 Direct DocGlasses Services'>
							<p>
								Where DocGlasses directly determines why and how personal data is
								processed, for example in connection with a DocGlasses patient
								account, website account, support request, or other
								direct-to-user service, DocGlasses may act as the Data Fiduciary.
							</p>
						</SubSection>
					</Section>

					<Section title='3. Categories of Information We Process'>
						<p>
							Depending on the DocGlasses service being used, we may process the
							following categories of information.
						</p>

						<SubSection title='3.1 Identity and Demographic Information'>
							<p>This may include:</p>
							<BulletList
								items={[
									'name;',
									'age or date of birth;',
									'gender;',
									'mobile number;',
									'email address;',
									'address or geographic area;',
									'patient or hospital identifier;',
									'ABHA number or related ABDM identifier, where voluntarily provided or appropriately linked; and',
									'healthcare facility or healthcare-worker identifiers.',
								]}
							/>
						</SubSection>

						<SubSection
							id='health-and-clinical-data'
							title='3.2 Health and Clinical Information'
						>
							<p>DocGlasses may process information including:</p>
							<BulletList
								items={[
									'presenting complaints;',
									'symptoms;',
									'medical history;',
									'previous diagnoses;',
									'allergies;',
									'current and past medications;',
									'examination findings;',
									'clinical observations;',
									'provisional or confirmed diagnoses entered by healthcare professionals;',
									'prescriptions;',
									'referrals;',
									'follow-up plans;',
									'discharge information;',
									'laboratory results;',
									'diagnostic reports;',
									'clinical notes; and',
									'other information generated during healthcare delivery.',
								]}
							/>
							<p>
								Health information is treated as highly sensitive information
								and is subject to enhanced technical and organizational
								safeguards.
							</p>
						</SubSection>

						<SubSection title='3.3 Consultation Audio and Transcripts'>
							<p>
								DocGlasses may capture and process audio during a clinical
								consultation through:
							</p>
							<BulletList
								items={[
									'Meta or other supported smart glasses;',
									'a mobile phone;',
									'a tablet; or',
									'another approved clinical device.',
								]}
							/>
							<p>Audio may be processed to:</p>
							<BulletList
								items={[
									'transcribe a clinical conversation;',
									'identify relevant clinical information;',
									'suggest appropriate follow-up or triage questions;',
									'generate a structured consultation summary;',
									'generate draft clinical documentation; and',
									'support healthcare professionals during an encounter.',
								]}
							/>
							<p>
								Whether raw audio is retained after processing will depend on
								the applicable deployment configuration, healthcare-institution
								policy, legal requirements, and patient consent where required.
							</p>
							<p>
								The application or healthcare professional should provide
								appropriate notice when consultation audio is being captured.
							</p>
						</SubSection>

						<SubSection title='3.4 Images and Video'>
							<p>
								Where enabled, DocGlasses may process images or video captured
								through smart glasses, mobile devices, or other approved
								equipment.
							</p>
							<p>This may include images of:</p>
							<BulletList
								items={[
									'medical reports;',
									'prescriptions;',
									'wounds or clinically relevant physical findings;',
									'diagnostic-device displays; and',
									'other clinical documents or observations.',
								]}
							/>
							<p>
								Live video may also be used in approved telemedicine,
								remote-supervision, or clinical-escalation workflows.
							</p>
							<p>
								DocGlasses should not intentionally capture unrelated individuals
								or areas where there is a reasonable expectation of privacy.
							</p>
						</SubSection>

						<SubSection title='3.5 Diagnostic Device Data'>
							<p>
								DocGlasses may receive information from approved connected medical
								or wellness devices, including:
							</p>
							<BulletList
								items={[
									'blood pressure monitors;',
									'glucometers;',
									'pulse oximeters;',
									'thermometers;',
									'ECG devices;',
									'digital stethoscopes; and',
									'other compatible diagnostic devices.',
								]}
							/>
							<p>
								Device data may be associated with the relevant patient
								encounter.
							</p>
						</SubSection>

						<SubSection title='3.6 Uploaded Medical Documents'>
							<p>Users or healthcare professionals may upload:</p>
							<BulletList
								items={[
									'laboratory reports;',
									'prescriptions;',
									'imaging reports;',
									'previous medical records;',
									'discharge summaries;',
									'referral documents; and',
									'other clinical documents.',
								]}
							/>
							<p>
								DocGlasses may use document-processing and artificial-intelligence
								services to extract structured information from these documents.
							</p>
						</SubSection>

						<SubSection title='3.7 Technical and Security Information'>
							<p>
								We may collect limited technical information necessary to
								operate and secure the service, including:
							</p>
							<BulletList
								items={[
									'device type;',
									'application version;',
									'operating system;',
									'IP address;',
									'login events;',
									'timestamps;',
									'security logs;',
									'device identifiers;',
									'authentication events;',
									'API activity;',
									'crash information; and',
									'system-performance information.',
								]}
							/>
						</SubSection>

						<SubSection title='3.8 Location Information'>
							<p>
								Where required for an approved healthcare workflow, DocGlasses may
								process approximate or facility-level location information, for
								example to:
							</p>
							<BulletList
								items={[
									'assign an ASHA or healthcare worker to a service area;',
									'identify the facility providing care;',
									'coordinate referral or emergency workflows; or',
									'provide program-level analytics.',
								]}
							/>
							<p>
								Precise device location will only be collected where necessary
								for an enabled feature and subject to appropriate permissions.
							</p>
						</SubSection>
					</Section>

					<Section title='4. How We Collect Information'>
						<p>Information may be collected:</p>

						<SubSection title='Directly from patients'>
							<p>For example, when a patient:</p>
							<BulletList
								items={[
									'speaks during a consultation;',
									'enters information into the DocGlasses Patient application;',
									'uploads a medical document;',
									'provides consent;',
									'links an ABHA account; or',
									'contacts DocGlasses support.',
								]}
							/>
						</SubSection>

						<SubSection title='From healthcare professionals'>
							<p>
								Doctors, nurses, ASHA workers, ANMs, Community Health Officers,
								hospital staff, and other authorized healthcare professionals
								may enter or capture information during care delivery.
							</p>
						</SubSection>

						<SubSection title='From connected healthcare devices'>
							<p>
								Diagnostic equipment may transmit measurements directly into an
								active patient encounter.
							</p>
						</SubSection>

						<SubSection title='From healthcare institutions'>
							<p>
								Hospitals, PHCs, CHCs, government health programs, laboratories,
								and other healthcare entities may provide information as part of
								an authorized integration.
							</p>
						</SubSection>

						<SubSection title='Through ABDM'>
							<p>
								Where DocGlasses is integrated with ABDM, health information may
								be exchanged using applicable ABDM workflows, identifiers, and
								consent mechanisms.
							</p>
						</SubSection>
					</Section>

					<Section title='5. How We Use Personal and Health Information'>
						<p>
							We process information only for legitimate and specified purposes
							connected with providing and securing DocGlasses services.
						</p>
						<p>These purposes may include:</p>

						<SubSection title='5.1 Supporting Healthcare Delivery'>
							<p>To:</p>
							<BulletList
								items={[
									'create and manage patient encounters;',
									'assist healthcare professionals in collecting structured clinical information;',
									'support triage;',
									'identify missing clinical questions;',
									'create clinical summaries;',
									'support referrals;',
									'support follow-up care; and',
									'provide continuity between different levels of healthcare.',
								]}
							/>
							<p>
								DocGlasses provides clinical decision support. It does not replace
								the professional judgment of qualified healthcare practitioners.
							</p>
						</SubSection>

						<SubSection title='5.2 Clinical Documentation'>
							<p>Information may be processed to generate draft:</p>
							<BulletList
								items={[
									'consultation notes;',
									'SOAP notes;',
									'referral notes;',
									'clinical summaries;',
									'prescriptions where approved by the healthcare professional;',
									'discharge documentation; and',
									'longitudinal patient records.',
								]}
							/>
							<p>
								Healthcare professionals remain responsible for reviewing and
								approving clinical documentation where required.
							</p>
						</SubSection>

						<SubSection title='5.3 Artificial Intelligence-Assisted Triage'>
							<p>
								During supported consultations, DocGlasses may analyze clinical
								context to suggest:
							</p>
							<BulletList
								items={[
									'relevant follow-up questions;',
									'missing history;',
									'potential red flags;',
									'escalation triggers; and',
									'referral considerations.',
								]}
							/>
							<p>
								AI-generated information is advisory and is intended to
								augment, not replace, human clinical judgment.
							</p>
						</SubSection>

						<SubSection title='5.4 Processing Medical Reports'>
							<p>
								Artificial-intelligence and document-understanding systems may
								process medical documents to:
							</p>
							<BulletList
								items={[
									'identify document type;',
									'extract laboratory values;',
									'identify medications;',
									'identify diagnoses or clinical findings; and',
									'convert unstructured documents into structured data for healthcare-professional review.',
								]}
							/>
						</SubSection>

						<SubSection title='5.5 ABDM and Health-Record Interoperability'>
							<p>Where enabled, DocGlasses may support:</p>
							<BulletList
								items={[
									'ABHA identification;',
									'creation or linking of care contexts;',
									'consent-based exchange of health records;',
									'health-information-provider or health-information-user workflows; and',
									'other approved ABDM interoperability functions.',
								]}
							/>
							<p>
								ABHA participation is voluntary except where otherwise lawfully
								required by an authorized government program.
							</p>
						</SubSection>

						<SubSection title='5.6 Center of Excellence and Clinical Escalation'>
							<p>
								Authorized COE clinicians may review appropriately escalated
								cases for:
							</p>
							<BulletList
								items={[
									'specialist support;',
									'remote clinical guidance;',
									'quality assurance;',
									'referral management; and',
									'continuity of care.',
								]}
							/>
							<p>
								Access is restricted according to authorized roles and
								healthcare workflows.
							</p>
						</SubSection>

						<SubSection title='5.7 Security and Fraud Prevention'>
							<p>We may process information to:</p>
							<BulletList
								items={[
									'authenticate users and devices;',
									'detect unauthorized access;',
									'investigate security incidents;',
									'prevent misuse or fraud;',
									'maintain audit trails; and',
									'protect patients, healthcare professionals, institutions, and the DocGlasses platform.',
								]}
							/>
						</SubSection>

						<SubSection title='5.8 Service Improvement'>
							<p>
								We may use appropriately protected, aggregated, anonymized, or
								de-identified information to:
							</p>
							<BulletList
								items={[
									'assess system performance;',
									'improve workflows;',
									'identify technical errors;',
									'evaluate AI quality;',
									'monitor safety;',
									'measure program outcomes; and',
									'improve DocGlasses services.',
								]}
							/>
							<p>
								Identifiable patient health information will not be used for
								advertising.
							</p>
						</SubSection>
					</Section>

					<Section title='6. Artificial Intelligence and Automated Processing'>
						<p>
							Artificial intelligence is an important component of DocGlasses.
						</p>
						<p>
							Depending on the feature and deployment, AI may be used for:
						</p>
						<BulletList
							items={[
								'speech recognition;',
								'translation;',
								'consultation understanding;',
								'triage-question generation;',
								'clinical summarization;',
								'document extraction;',
								'OCR;',
								'report interpretation support;',
								'clinical-information structuring; and',
								'operational analytics.',
							]}
						/>
						<p>
							DocGlasses currently may use specialized third-party AI providers as
							part of these workflows, including but not limited to:
						</p>
						<BulletList
							items={[
								<>
									<strong>Google / Gemini / Google Cloud</strong> for supported
									real-time consultation, language, transcription, reasoning, and
									summarization workflows; and
								</>,
								<>
									<strong>Anthropic / Claude</strong> for supported document
									understanding, OCR, and medical-report processing workflows.
								</>,
							]}
						/>
						<p>
							Only information necessary for the applicable function should be
							transmitted to such providers.
						</p>
						<p>
							Where DocGlasses is deployed under an enterprise, hospital, or
							government agreement, use of external AI services may be
							restricted, replaced, locally hosted, or configured according to
							the institution’s approved deployment architecture.
						</p>
						<p>
							DocGlasses does not permit AI-generated clinical output to
							independently make final treatment decisions on behalf of
							healthcare professionals.
						</p>
						<p>
							Where AI-generated information may materially affect clinical
							care, appropriate human review is required.
						</p>
					</Section>

					<Section title='7. Use of Personal Data for AI Model Training'>
						<p>
							DocGlasses does not sell identifiable patient health information for
							AI training or advertising.
						</p>
						<p>
							DocGlasses will not use identifiable patient consultation data to
							train a generalized commercial AI model unless:
						</p>
						<BulletList
							items={[
								'such use is legally permitted;',
								'the purpose has been clearly disclosed;',
								'appropriate authorization or consent has been obtained where required; and',
								'applicable contractual, institutional, ethical, and privacy safeguards have been satisfied.',
							]}
						/>
						<p>
							Where data is used for quality evaluation, research, or
							improvement, DocGlasses will apply appropriate safeguards such as
							de-identification, anonymization, aggregation, access restriction,
							or other privacy-preserving techniques depending on the purpose
							and risk.
						</p>
					</Section>

					<Section title='8. Sharing of Information'>
						<p>We do not sell patient health information.</p>
						<p>
							We may share personal data only where necessary for legitimate
							healthcare, operational, security, or legal purposes.
						</p>

						<SubSection title='8.1 Healthcare Professionals and Institutions'>
							<p>Information may be shared with authorized:</p>
							<BulletList
								items={[
									'doctors;',
									'nurses;',
									'ASHA workers;',
									'ANMs;',
									'Community Health Officers;',
									'hospitals;',
									'PHCs;',
									'CHCs;',
									'diagnostic facilities;',
									'referral facilities; and',
									'authorized COE personnel',
								]}
							/>
							<p>
								where necessary to provide healthcare or support continuity of
								care.
							</p>
						</SubSection>

						<SubSection title='8.2 Government Health Authorities'>
							<p>
								Where DocGlasses is deployed as part of a government healthcare
								program, authorized data may be processed or made available to
								the relevant government healthcare authority according to
								applicable law, contractual arrangements, program requirements,
								and access controls.
							</p>
						</SubSection>

						<SubSection title='8.3 ABDM'>
							<p>
								Where a patient chooses to participate in ABDM-enabled
								workflows, records may be exchanged through ABDM in accordance
								with applicable consent and interoperability mechanisms.
							</p>
						</SubSection>

						<SubSection title='8.4 Technology Service Providers'>
							<p>
								We may engage service providers for functions such as:
							</p>
							<BulletList
								items={[
									'infrastructure hosting;',
									'communications;',
									'AI processing;',
									'document processing;',
									'security;',
									'monitoring;',
									'analytics; and',
									'technical support.',
								]}
							/>
							<p>
								Such providers are permitted to process information only for
								authorized purposes and are expected to protect it through
								appropriate contractual and technical safeguards.
							</p>
							<p>
								Depending on the deployment, these providers may include OpenAI
								/ Google Cloud / Gemini, Anthropic / Claude, cloud-infrastructure
								providers, communication providers, monitoring providers, and
								other approved subprocessors.
							</p>
						</SubSection>

						<SubSection title='8.5 Legal Requirements'>
							<p>
								Information may be disclosed when reasonably necessary to:
							</p>
							<BulletList
								items={[
									'comply with applicable law;',
									'comply with a lawful order from a court or competent authority;',
									'protect the safety of an individual;',
									'investigate fraud or security incidents; or',
									'establish, exercise, or defend legal rights.',
								]}
							/>
						</SubSection>
					</Section>

					<Section title='9. Cross-Border Processing'>
						<p>
							DocGlasses deployments for Indian public-health programs are
							intended to follow the infrastructure, security, localization, and
							data-management requirements agreed with the relevant government
							authority or healthcare institution.
						</p>
						<p>
							Certain third-party cloud or AI services may process information
							outside India depending on their service configuration.
						</p>
						<p>
							Where cross-border processing occurs, DocGlasses will apply
							applicable legal requirements and contractual safeguards and will
							limit such processing to what is necessary for the relevant
							service.
						</p>
						<p>
							Enterprise and government deployments may be configured to
							restrict processing to approved infrastructure or jurisdictions.
						</p>
					</Section>

					<Section title='10. ABDM and ABHA'>
						<p>
							DocGlasses may integrate with the Ayushman Bharat Digital Mission.
						</p>
						<p>Where such integration is enabled:</p>
						<BulletList
							items={[
								'an ABHA number may be used to identify or link a patient;',
								'health records may be linked to appropriate care contexts;',
								'records may be exchanged using approved ABDM standards;',
								'applicable patient consent mechanisms will be followed; and',
								'access to health information will be controlled according to applicable ABDM requirements.',
							]}
						/>
						<p>
							DocGlasses does not treat possession of an ABHA number as
							unrestricted authorization to access a person’s health records.
						</p>
					</Section>

					<Section title='11. Consent'>
						<p>
							Where consent is required, DocGlasses or the relevant healthcare
							institution will provide appropriate notice describing:
						</p>
						<BulletList
							items={[
								'what information is being collected;',
								'the purpose of collection;',
								'how the information will be used;',
								'relevant data sharing; and',
								'how consent may be withdrawn where applicable.',
							]}
						/>
						<p>
							Consent may be obtained digitally, verbally where legally and
							operationally appropriate, through an ABDM consent workflow, or by
							another approved method.
						</p>
						<p>
							Withdrawal of consent will not affect processing that was lawful
							before withdrawal or processing that is otherwise permitted or
							required under applicable law.
						</p>
					</Section>

					<Section title='12. Recording Through Smart Glasses'>
						<p>
							Where Meta glasses or another wearable device is used during a
							consultation:
						</p>
						<BulletList
							items={[
								'the wearable acts as a clinical data-capture interface for DocGlasses;',
								'audio, images, or video should only be captured for an approved healthcare purpose;',
								'appropriate notice should be provided to the patient;',
								'capture should be limited to information necessary for the clinical workflow; and',
								'access to captured information is restricted to authorized users and systems.',
							]}
						/>
						<p>
							Smart glasses must not be used through DocGlasses for covert
							surveillance or unrelated recording.
						</p>
					</Section>

					<Section title='13. Children’s Data'>
						<p>
							DocGlasses may process children’s health data when the child is
							receiving healthcare.
						</p>
						<p>
							Where applicable, processing of a child’s personal data will be
							undertaken through the child’s parent, lawful guardian, healthcare
							provider, or another mechanism permitted under applicable law.
						</p>
						<p>
							DocGlasses is not intended to allow children to independently create
							accounts or provide consent where parental or guardian
							authorization is legally required.
						</p>
						<p>Additional safeguards may apply to pediatric data.</p>
					</Section>

					<Section title='14. Security Measures'>
						<p>
							DocGlasses applies technical and organizational safeguards
							appropriate to the sensitivity of healthcare information.
						</p>
						<p>Depending on the deployment, these may include:</p>
						<BulletList
							items={[
								'encryption in transit;',
								'encryption at rest;',
								'role-based access controls;',
								'least-privilege access;',
								'multi-factor authentication for privileged users;',
								'secure API authentication;',
								'device registration and access controls;',
								'audit logging;',
								'security monitoring;',
								'vulnerability management;',
								'secure backups;',
								'incident-response procedures;',
								'data-loss-prevention measures; and',
								'business-continuity and disaster-recovery controls.',
							]}
						/>
						<p>
							No information system can guarantee absolute security. We
							therefore continuously review and improve security controls based
							on system risk and applicable requirements.
						</p>
					</Section>

					<Section title='15. Data Retention'>
						<p>
							DocGlasses retains personal data only for as long as necessary for:
						</p>
						<BulletList
							items={[
								'providing healthcare services;',
								'maintaining legally required medical records;',
								'fulfilling the requirements of the relevant healthcare institution or government health program;',
								'security and audit purposes;',
								'complying with law;',
								'resolving disputes; or',
								'another disclosed and lawful purpose.',
							]}
						/>
						<p>Retention periods may differ according to:</p>
						<BulletList
							items={[
								'type of information;',
								'healthcare institution;',
								'applicable medical-record requirements;',
								'government-program requirements;',
								'contractual terms; and',
								'whether DocGlasses acts as Data Fiduciary or Data Processor.',
							]}
						/>
						<p>
							Where DocGlasses processes information solely on behalf of a
							healthcare institution, deletion and retention may be controlled
							by that institution.
						</p>
						<p>
							Raw audio, video, or images should not be retained longer than
							necessary for the approved purpose unless retention is required by
							the applicable healthcare workflow or institution.
						</p>
						<p>
							Data that is securely anonymized such that it can no longer
							identify an individual may be retained for analytics, safety,
							statistical, research, or service-improvement purposes as
							permitted by law.
						</p>
					</Section>

					<Section title='16. Data Accuracy'>
						<p>
							Healthcare professionals and patients should provide information
							that is accurate and complete to the best of their knowledge.
						</p>
						<p>
							AI-generated transcriptions, document extraction, and summaries
							may occasionally contain errors.
						</p>
						<p>
							Healthcare professionals are responsible for reviewing clinically
							material AI-generated information before relying upon it for care.
						</p>
						<p>
							Users may request correction of inaccurate personal data in
							accordance with applicable law and healthcare-record requirements.
						</p>
					</Section>

					<Section title='17. Individual Rights'>
						<p>
							Subject to applicable law and the role DocGlasses performs in a
							particular deployment, individuals may have rights concerning
							their personal data, including the right to:
						</p>
						<BulletList
							items={[
								'obtain information about personal data being processed;',
								'request correction of inaccurate or incomplete personal data;',
								'request erasure of personal data where legally permitted;',
								'withdraw consent where processing is based on consent;',
								'raise a grievance regarding processing of personal data; and',
								'exercise other rights available under applicable law.',
							]}
						/>
						<p>
							Where DocGlasses processes information on behalf of a hospital,
							government health authority, or healthcare institution, we may
							direct the request to that organization as the responsible Data
							Fiduciary.
						</p>
						<p>
							Identity verification may be required before fulfilling a privacy
							request.
						</p>
					</Section>

					<Section title='18. Grievance Redressal'>
						<p>
							Questions, privacy requests, or grievances concerning DocGlasses may
							be submitted to:
						</p>
						<ul className='list-disc pl-5 space-y-3'>
							<li>
								<strong>Grievance Officer / Data Protection Contact:</strong>{' '}
								Grievance Officer
							</li>
							<li>
								<strong>Legal Entity:</strong> Vision Health Holdings Inc.
							</li>
							<li>
								<strong>Address:</strong> 16192 Coastal Highway Lewes, DE 19958
							</li>
							<li>
								<strong>Email:</strong>{' '}
								<a
									href='mailto:danish@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									danish@docglasses.ai
								</a>
							</li>
						</ul>
						<p>
							We will acknowledge and process grievances in accordance with
							applicable law and contractual obligations.
						</p>
						<p>
							Where a healthcare institution is the Data Fiduciary, users may
							also contact the grievance or privacy officer of that institution.
						</p>
					</Section>

					<Section title='19. Website Analytics and Cookies'>
						<p>
							The DocGlasses public website may use cookies and similar
							technologies for:
						</p>
						<BulletList
							items={[
								'essential website functionality;',
								'security;',
								'performance measurement; and',
								'analytics.',
							]}
						/>
						<p>
							Non-essential analytics or advertising technologies will be used
							subject to applicable consent requirements.
						</p>
						<p>
							Health information collected through DocGlasses clinical services
							will not be used to create advertising profiles.
						</p>
						<p>
							The clinical applications should not use third-party advertising
							trackers.
						</p>
					</Section>

					<Section title='20. Marketing'>
						<p>
							DocGlasses does not use patient clinical information for direct
							advertising.
						</p>
						<p>
							Where users separately subscribe to product communications,
							newsletters, or other marketing material, contact information may
							be used for those communications in accordance with applicable law
							and user preferences.
						</p>
						<p>
							Users may opt out of non-essential marketing communications at any
							time.
						</p>
					</Section>

					<Section title='21. Research, Public Health and Analytics'>
						<p>
							Subject to applicable law, institutional approvals, contractual
							restrictions, and appropriate privacy safeguards, aggregated,
							anonymized, or de-identified data may be used to:
						</p>
						<BulletList
							items={[
								'evaluate healthcare-program performance;',
								'assess referral patterns;',
								'assess access to healthcare;',
								'improve clinical workflows;',
								'identify population-level trends;',
								'improve AI-system safety and performance; and',
								'support approved research or public-health activities.',
							]}
						/>
						<p>
							Such processing will be governed according to the purpose, nature
							of the data, and applicable legal and ethical requirements.
						</p>
					</Section>

					<Section title='22. Security Incidents and Data Breaches'>
						<p>
							DocGlasses maintains processes for identifying, investigating,
							containing, and responding to suspected information-security
							incidents.
						</p>
						<p>
							Where a personal-data breach occurs, DocGlasses will notify the
							relevant Data Fiduciary, affected individuals, governmental
							authority, regulator, or other party when required by applicable
							law or contract.
						</p>
					</Section>

					<Section title='23. Third-Party Systems and Integrations'>
						<p>DocGlasses may integrate with systems operated by:</p>
						<BulletList
							items={[
								'healthcare institutions;',
								'ABDM;',
								'government health platforms;',
								'laboratories;',
								'diagnostic providers;',
								'pharmacies;',
								'telemedicine platforms; and',
								'other authorized healthcare systems.',
							]}
						/>
						<p>
							Information processed directly by those systems may also be
							governed by their respective privacy policies and legal
							obligations.
						</p>
						<p>
							DocGlasses is not responsible for independent processing carried out
							by third parties outside DocGlasses’s control.
						</p>
					</Section>

					<Section title='24. Changes to this Privacy Policy'>
						<p>We may update this Privacy Policy to reflect:</p>
						<BulletList
							items={[
								'changes in DocGlasses services;',
								'changes in technology;',
								'regulatory developments;',
								'security requirements; or',
								'changes to our data-processing practices.',
							]}
						/>
						<p>
							Material changes will be communicated through appropriate
							channels.
						</p>
						<p>
							The current version and its effective date will always be
							available on the DocGlasses website.
						</p>
					</Section>

					<Section title='25. Contact Us'>
						<p>
							For questions regarding this Privacy Policy or DocGlasses’s privacy
							practices, contact:
						</p>
						<ul className='list-disc pl-5 space-y-3'>
							<li>
								<strong>Platform:</strong> DocGlasses
							</li>
							<li>
								<strong>Legal entity:</strong> Vision Health Holdings Inc.
							</li>
							<li>
								<strong>Address:</strong> 16192 Coastal Highway Lewes, DE 19958
							</li>
							<li>
								<strong>Email:</strong>{' '}
								<a
									href='mailto:danish@docglasses.ai'
									className='text-teal-400 hover:underline'
								>
									danish@docglasses.ai
								</a>
							</li>
						</ul>
						<p>
							For clinical-record questions relating to care received at a
							hospital, PHC, CHC, or government health facility, patients should
							also contact the relevant healthcare institution.
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

