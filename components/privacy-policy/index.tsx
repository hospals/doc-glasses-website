"use client";

import React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PrivacyPolicyContent() {
  return (
    <main 
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      style={{ background: "var(--navy-deep)" }}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="dot-grid-bg absolute inset-0 pointer-events-none"
        style={{ opacity: 0.03 }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          right: "-10%",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,118,110,0.12) 0%, rgba(15,118,110,0.03) 50%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Nav />

      <div className="relative z-10 pt-[120px] sm:pt-[160px] pb-24 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto flex-1 flex flex-col">

        {/* HEADER */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <h1 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <p className="font-dm tracking-wider uppercase text-xs sm:text-sm font-semibold" style={{ color: "var(--brand)" }}>
            Last updated: April 14, 2026
          </p>
        </div>

        <div className="flex-1 w-full space-y-12">
          
          <Section title="Introduction">
            <p>
              DocGlasses (“DocGlasses”, “we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This policy describes DocGlasses practices regarding personally identifiable information or personal data (“personal information/ PI”). This policy applies to our websites, applications, email, voice calls and text messages, and social media accounts (the “Platforms”). When you use the Platforms, you agree to the terms in this policy.
            </p>
          </Section>

          <Section title="Purpose of this Privacy Policy">
            <p>
              This privacy policy aims to give you information on how DocGlasses collects and processes your PI, including any PI you may provide through the Platforms when you purchase a product or service or sign up for our newsletter.
            </p>
            <p>
              You must read this privacy policy together with any other privacy policy, notice or fair processing policy we may provide on specific occasions when we are collecting or processing PI about you so that you are fully aware of how and why we are using your PI. This privacy policy supplements other notices and privacy policies and is not intended to override them.
            </p>
          </Section>

          <Section title="Contact Details">
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Full name of legal entity:</strong> Vision Health Holdings Inc.</li>
              <li><strong>EIN:</strong> 35-2955047</li>
              <li><strong>Address:</strong> 16192 Coastal Highway Lewes, DE 19958</li>
              <li><strong>Email address:</strong> danish@docglasses.ai</li>
            </ul>
          </Section>

          <Section title="Policy Amendments">
            <p>
              We keep our privacy policy under regular review, updating it at least once every 12 months. DocGlasses might make minor amendments to this Privacy Policy, which shall not adversely affect your privacy, except if laws set otherwise.
            </p>
            <p>
              In case of material changes, DocGlasses will publish such amendments and the amended policy on our website and, as far as possible, notify you either by email or by pop-up windows when you use our platforms next time.
            </p>
            <p>
              Amendments shall enter into force on the Effective Date. The actual version of the Privacy policy is published on our website.
            </p>
          </Section>

          <Section title="Data Accuracy">
            <p>
              When you give us PI, you are telling us, that the information is true, accurate, complete, and current. You are also telling us, that you have the authorization to provide it to us. The PI we hold about you must be accurate and current. Please keep us informed, if your PI changes during your relationship with us.
            </p>
          </Section>

          <Section title="The Categories of Personal Information We Collect">
            <p>We may collect, use, store and transfer different kinds of PI about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Identifiers or Identity Data</strong> such as a first/middle/last name, alias, postal address, unique personal identifier (cookie), date of birth, online identifier Internet Protocol address, or other similar identifiers.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Commercial Information</strong>, requested price quotes, products or services purchased, purchasing or consuming histories or tendencies, as well as Financial Data (bank account and payment card details) and Transaction Data (details about payments to and from you and other details of products and services you have purchased from us).</li>
              <li><strong>Network Activity Information</strong>, including, but not limited to Technical Data (login data, browser type and version, browsing history, search history, time zone setting and location, browser plug-in types and versions, operating system and Platform, and other technology on the devices you use to access our Platforms), and information regarding your interaction with our platforms (Usage Data).</li>
              <li><strong>Geolocation data</strong> (country, state or city).</li>
              <li><strong>Audio</strong> (e.g., call records) and <strong>Electronic</strong> (e.g., email threads) information.</li>
              <li><strong>Inferences</strong> (conclusions) drawn from any of the PI collected by DocGlasses, including, but not limited to Profile Data (your preferences, characteristics, psychological trends, behaviour, attitudes, intelligence, feedback and survey responses) and Marketing Data (your preferences in receiving marketing from us and our partners and your communication preferences).</li>
            </ul>
            <p className="mt-4">
              We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your PI, but is not considered PI in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Network Activity Information to calculate the percentage of users accessing a specific Platform feature. However, if we combine or connect Aggregated Data with your PI, so that it can directly or indirectly identify you, we treat the combined data as PI which will be used in accordance with this privacy policy.
            </p>
            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Customer support</h3>
            <p>
              If you choose to contact our customer support services we will collect any inquiries, complaints or other information that you may submit to our support team. We do not collect any Special Categories of PI about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
            </p>
          </Section>

          <Section title="Children">
            <p>
              DocGlasses does not knowingly collect PI from minors, except if the minor is one of the travelers for medical tourism or is accompanied by an adult. If we become aware that a minor is attempting to submit PI, we will remove this information from our records. If you are the parent/legal guardian of a minor who has provided us with PI, please contact us so we can delete it.
            </p>
          </Section>

          <Section title="If You Fail to Provide Personal Information">
            <p>
              Where we collect PI required by law or under the terms of a contract, and you fail to provide that PI when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us, but we will notify you if this is the case at the time.
            </p>
          </Section>

          <Section title="How We Collect Your Personal Information">
            <p>We use different methods to collect PI from and about you including through:</p>
            
            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>PI you give to us</h3>
            <p>
              We collect your PI directly from you (using live chat, online forms or via voice call/messenger). Any contact data (emails, phones etc.) provided by you throughout any interaction will be treated as your personal contacts and saved in your profile for future communications unless specifically requested not to be stored (one-time communication only). For example, when you provide us with your PI by requesting a quote, registering or booking medical travels, contacting our customer support. This includes PI you provide when you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>apply for our products or services;</li>
              <li>subscribe to our service or publications; request marketing to be sent to you; give us feedback or contact us.</li>
            </ul>
            <p className="mt-4">
              When we chat with you (e.g., WhatsApp, Facebook, regular SMS etc.) the chat might be accidentally closed/ removed, there might be interruptions, slow internet connection etc. We may contact you later via automated phone and text messages or email (if available) in order to restore our communication started within the chat. No purchase necessary.
            </p>
            <p className="mt-4">
              One of the main collection methods are VOICE CALLS. We have vested interest to ensure you have chosen the best possible option. Voice calls are an exclusive opportunity to provide you with immediate customer support and disclose additional product features, you might not notice on the website. Usually, we call back on your request. Sometimes there might be unfinished conversations regarding current consultation or booking of flights/accommodation (misunderstanding in live chat, email system error, poor internet connection etc.), which require immediate response. We don’t make unwanted telemarketing robocalls or any annoying advertising campaigns. You can opt-out this communication any time by contacting us via filling the contact us form.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>PI we collect passively:</h3>
            <p>
              We also collect your PI passively. For example, we collect information about you over time and across different websites when you visit our platform. We also use tracking tools like cookies and beacons. As you interact with our platforms, we automatically collect Network Activity Information about your equipment, browsing actions, and patterns. We collect this PI using cookies and other similar technologies. For additional information, please refer to our Cookie Policy. Platform features may make use of your device attributes and settings that will allow us to determine your physical location (country, state). Such technologies may include IP address mapping or other technologies. We use this information to enhance and personalize your experience and provide you with offers and services that may be of interest to you. DocGlasses does not have control over your device settings, but we do recommend enabling location services on your device so you can take advantage of the location based features and functionality offered.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>PI we receive from service providers:</h3>
            <p>
              We collect your PI using service providers. This can include when you log in using a service provider platform, such as Facebook & Google. In addition, we also integrate service providers' software that collects information about users for security reasons.
            </p>
          </Section>

          <Section title="For What Purpose We Use Your Personal Information">
            <h3 className="font-semibold mt-4 mb-2" style={{ color: "var(--text-primary)" }}>Improving our services</h3>
            <p>
              To provide you and improve our Platforms and services, to better understand the users of our Platforms and services, and to protect our property and to prevent damage to them.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Regular customers</h3>
            <p>
              If you have ever requested a price quote or purchased our services, we treat you as the Regular (loyal) Customer. Regular Customers have plenty of benefits:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>become experts of using our services;</li>
              <li>receive the most relevant price quotes.</li>
            </ul>
            <p className="mt-4">
              According to our policy, we may contact you as a Regular Customer via email/phone saved within previous requests and transactions. Such cases may be, for example, when you accidentally provided the wrong email/phone or when you cannot be reached via email/phone left in the last request/ purchase. If you want to opt-out, please contact us. Bookings We and our Hospitals, Doctors & travel partners use your PI to process your bookings and store your itinerary, medical and consultation information where applicable.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Marketing activities</h3>
            <p>We use your information for marketing purposes. These activities may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-3">
              <li>
                To send you marketing emails and/or text messages from DocGlasses address regarding our services or those of our partners, if you have opted-in to receive emails and/or text messages from us or have transacted with us, and as permitted by law. You can easily unsubscribe from these marketing communications at any time by clicking on the “Unsubscribe” link included in the newsletter or by texting STOP via SMS.
              </li>
              <li>
                To display more relevant advertising and recommendations, or suppress advertising and content that you might find irrelevant. This advertising might be shown to you on our Platforms as well as third party platforms (including Google and social media sites like Facebook) and include information or offers that we, or our business partners’, believe you will find interesting. Individualized advertising may be based on information collected through cookies or other tracking technologies. You can opt out from Google and Facebook ad personalisation any time.
              </li>
              <li>If you choose to participate in promotional activities, relevant information may be used to administer these promotions.</li>
              <li>
                If you participate in our Referral Program and forward an email with a referral code to your friends, we presume that you will respect any objections received from your friends regarding their email processing for marketing purposes. If you keep ignoring your friends' objections and dont't report it to us, we disclaim all responsibility that may be imposed on us as an advertiser. DocGlasses will not unsubscribe friends' email addresses if it was not specifically requested by them.
              </li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>To communicate with you, including as follows:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To send booking confirmations;</li>
              <li>To send doctor’s appointments or schedule changes as communicated by the healthcare provider or hospital.</li>
              <li>To send alerts and notifications you have subscribed to, including to your mobile device;</li>
              <li>To solicit reviews;</li>
              <li>To update you regarding itineraries/packages processed by our service;</li>
              <li>To communicate with you if you have contacted DocGlasses customer support;</li>
              <li>To send you information servicing and administrative emails;</li>
              <li>To send you information about services, offered by DocGlasses or our business partners, that we believe you would be interested in;</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Legal purposes</h3>
            <p>
              In certain cases we may need to use your information to handle and resolve legal disputes, for regulatory investigations and compliance or to enforce the terms of use of the service.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Performance of a contract</h3>
            <p>
              The use of your PI may be necessary to perform the services and provide you products that you have requested from us. For example, if you make a booking on our Platform, we need to collect PI from you to complete the booking.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Consent</h3>
            <p>
              We may rely on your consent to use your PI for certain direct marketing purposes. You can withdraw your consent anytime by contacting us.
            </p>
          </Section>

          <Section title="Change of Purpose">
            <p>
              We will only use your PI for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to receive an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.
            </p>
          </Section>

          <Section title="Your Choices">
            <p>
              As a customer-oriented business, we respect and value your expectations. As a result, you can make announcements and queries at any time regarding your concerns in privacy matters.
            </p>
            <p>
              Each of our marketing email has an opt-out button and you can unsubscribe from such communication at any time. You cannot unsubscribe from servicing emails and administrative messages.
            </p>
          </Section>

          <Section title="Consent to Share Information">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                I authorize the doctors introduced by DocGlasses to assess my medical history and offer healthcare services on an 'as is' and 'as available' basis, which may include the administration of necessary drugs. I understand that healthcare services will be delivered through telephonic or Internet consultations with the doctors, and physical examinations will not be conducted.
              </li>
              <li>
                I acknowledge that any diagnosis based on telephonic consultation will be preliminary, and I agree to consult another doctor either as directed by the consulting doctor or a doctor of my choice for further treatment.
              </li>
              <li>
                During the course of the treatment, I will disclose sensitive PI ('PI') to the Company, which includes but is not limited to (i) physical, physiological, and mental health condition, symptoms, and history; (ii) medical test results; (iii) medical records and history; and (iv) biometric information. The Company may store, use, and disclose this information to the doctors solely for the purpose of treatment. The Company undertakes not to publish or disclose the PI to any third person or body corporate without my express written consent, except when mandated by law.
              </li>
              <li>
                I reserve the right to review the medical history and related records provided by me to the Company and request corrections or amendments to any inaccurate or deficient information. I understand that the Company is not responsible for the authenticity of the PI provided by me.
              </li>
              <li>
                I agree that the Company's liability is limited to the professional services it renders, and the Company does not make any guarantees, representations, endorsements, or implied or express warranties regarding the services provided by any doctor engaged by it.
              </li>
            </ul>
          </Section>

          <Section title="How We Share Your Personal Information">
            <h3 className="font-semibold mt-4 mb-2" style={{ color: "var(--text-primary)" }}>Corporate affiliates and change of control</h3>
            <p>
              We may share your PI with our corporate affiliates, and if DocGlasses itself (or part of its business) is sold or otherwise changes control, owners would have access to your PI for the uses set out herein.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Service providers</h3>
            <p>
              We may share your PI with suppliers who perform services on our behalf and have agreed in writing to protect and not further disclose your information. We utilize the services of Amazon AWS, Enablex and Gupshup as our data storage & communication partner, responsible for providing services such as web and mobile application host provider, SMS, phone numbers and recording data. We have a formal agreement in place with these providers to ensure compliance with data protection regulations. Amazon AWS, Enablex and Gupshup are committed to maintaining the confidentiality, security, and integrity of the data provided. By using our services, you acknowledge and agree that AWS, Enablex and Gupshup may collect, process, and store your communication-related data in accordance with the terms outlined in our agreement with them.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Payment service providers, Hospitals and travel vendors</h3>
            <p>
              If you book through the platforms, we may share your PI with the payment service providers, acquirer banks, and the travel vendors you have booked with. This can include online travel agencies, hotels, airlines, hospitals, Registered Doctors Clinics, car rental companies, and travel insurance providers. These third parties will process your PI as data controllers in accordance with their own privacy policies. If you contact our customer support, they may need to share information about your request with the relevant vendor in order to assist you.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Business partners</h3>
            <p>
              We may share your PI with various business partners. Some of these business partners may use your PI for fraud detection, including but not limited to Identifiers, Contact Data, and Network Activity Information, as well as to detect, prevent, or otherwise address fraud, security, or technical issues. We may also share your PI to ask our partner to create surveys, forms, applications, or questionnaires, so we know the degree of your satisfaction with our services. Some of these business partners may use your PI for online behavioral advertising purposes or to offer you services or products that we believe you may be interested in. We may also share your information as otherwise described to you at the time of collection. We may also share anonymous aggregated usage information with partners.
            </p>
            <p className="mt-4">
              We enter into confidentiality and PI processing terms with partners to ensure they comply with high levels of confidentiality and best practices in privacy and security standards and we regularly review these standards and practices.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Health Packages shared by you</h3>
            <p>
              If you use or have itineraries/quotes as part of our Service, you can send or grant access to your itinerary/quotes to anyone you choose. Your itinerary/quote may contain enough details (for example, disease information and hospital reference codes) to allow the recipient to cancel or modify your booking etc. You should only share your itinerary/quotes with people you trust. If you choose to display your itinerary/quote on publicly-viewable web pages (Facebook, for instance), that information may be collected and used by others.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Information shared in public</h3>
            <p>
              If you provide us with a review of your experience, you authorize us to publish it on all our platforms under the screen name you provided. You also authorize us to aggregate it with other reviews.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Authorities</h3>
            <p>
              We may disclose PI if required by law, for example to law enforcement or other authorities. This includes court orders, subpoenas, orders arising from legal processes, and administrative or criminal investigations. We may also disclose your PI if the disclosure is necessary for the prevention, detection, or prosecution of criminal acts or to prevent other damage, or in response to a legal action or to enforce our rights and claims. Additionally, We may also share anonymous aggregated usage information with others.
            </p>
            <p className="mt-4">
              All the above categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties.
            </p>
          </Section>

          <Section title="How We Store and Protect Your Personal Information">
            <p>
              Our servers and data centers are located in the U.S., and our service providers may be located there and in other countries. By providing us with PI, you agree that your PI may be transferred to and stored in these countries. These countries may have different and/or less stringent privacy/data protection and data security rules than those of your own country. As a result, your PI may be subject to access requests from governments, courts, or law enforcement in those countries according to laws in those countries. Subject to the applicable laws of such countries, we will provide the necessary safeguards to maintain protections of your PI, for example, by obtaining from the PI recipients contractual commitments based on the EU model clauses.
            </p>
            <p>
              DocGlasses has a security program intended to keep the PI stored in our systems protected from unauthorized access and misuse. Our systems are configured with data encryption or scrambling technologies, and firewalls constructed to industry standards. We also use Secure Socket Layer (SSL) technology that protects the PI you send over the Internet. Personal information may only be accessed by persons within our organization or our service providers to carry out the uses indicated in this Privacy Policy.
            </p>
            <p>
              We have put in place appropriate security measures to prevent your PI from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your PI to those employees, agents, contractors, and other service providers who have a business need to know. They will only process your PI on our instructions and are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected PI breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
          </Section>

          <Section title="Retention Periods">
            <p>
              We will only retain your PI for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. We may retain your PI for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
            <p>
              To determine the appropriate retention period for PI, we consider the amount, nature, and sensitivity of the PI, the potential risk of harm from unauthorized use or disclosure of your PI, the purposes for which we process your PI and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting, or other requirements.
            </p>
          </Section>

          <Section title="Other Websites">
            <p>If you click through to third-party websites or other platforms, DocGlasses’s privacy policy does not apply.</p>
          </Section>

          <Section title="Requests and Complaints">
            <p>Under certain circumstances set by applicable law, you are entitled to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li>
                <strong>Request access to your PI</strong> (commonly known as a “data subject access request”). This enables you to receive a copy of the PI we hold about you and to check correctness and integrity of PI. The disclosure might be limited to the 12-month period preceding the receipt of verifiable request. You may also request us to furnish you with:
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>the categories of sources from which PI is collected;</li>
                  <li>the business or commercial purposes for collecting of PI;</li>
                  <li>the categories of third parties with whom we share your PI;</li>
                  <li>the categories of PI we have disclosed for a business purpose.</li>
                </ul>
              </li>
              <li>
                <strong>Request correction</strong> of the PI that we hold about you. This enables you to request any incomplete or inaccurate PI to be corrected, though we may need to verify the accuracy of the new PI you provide to us.
              </li>
              <li>
                <strong>Request to delete</strong> You are able to submit a verifiable request and ask us to delete your PI. Please be aware that there are some cases (such as to comply with law requirements; to perform a transaction initiated by you; to exercise or defend our legal claims; to comply with an official request submitted by local, state, or federal authorities; cooperation with law enforcement concerning activities that may violate the law; to detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity; to prevent from adversely effecting the rights and freedoms of other customers, including passengers, payment card holders; to debug to identify and repair errors that impair existing intended functionality; solely for internal analytical, risk management, quality assurance, training, and statistical purposes, applying additional safeguards to prevent any undue impact on customer's person (functional separation); to ensure integrity of archiving and backup systems) when we might reject your request.
              </li>
              <li>
                <strong>Request to opt out from PI sales/sharing</strong>: Such requests shall be submitted through sending an email to dpo@docglasses.com.
              </li>
            </ul>
            <p className="mt-4">
              Due to the remote nature of our services, it is important for us to keep communicating through the same email (Verified Email), which was used by you to request a price quote or purchase medical trip and other related services. The Verified Email is the key communication channel for us, so we can give quick answers and not divulge your data to any malicious person.
            </p>
            <p>
              You might also submit a request through a voice call, but we must still use the Verified Email to reply, due to law requirements and in order to protect our legal claims. If you submit your request through an authorized agent or by using a third-party service, we will ask for additional verification by contacting you via Verified Email.
            </p>
          </Section>

          <Section title="Nondiscrimination">
            <p>
              We shall not discriminate against you (deny services, charge different prices, provide different levels of quality) because you exercised any of the rights set herein. This right might be limited if the difference in prices or levels of quality is reasonably related to the value provided to you by your PI.
            </p>
            <p>
              We might obtain your opt-in consent and provide you with financial incentives so that you agree to provide additional PI or not refrain from requesting the deletion of your PI.
            </p>
          </Section>

          <Section title="Fees and Denials">
            <p>
              You will not have to pay a fee to access your PI (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive (more than twice in a 12-month period), or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
            </p>
            <p>
              We might also refuse to act on your request when we are not in a position to identify you and verify your request, or if the requested fee was not paid.
            </p>
            <p>
              We may need to request specific information from you to help us confirm your identity and ensure your right to access your PI (or to exercise any of your other rights). This is a security measure to ensure that PI is not disclosed to any person who has no right to receive it. We may also contact you (via email, phone, or messenger) to ask you for further information in relation to your request to speed up our response.
            </p>
            <p>
              Due to legal limitations, we might deny your request to know if you are asking us to disclose high-risk data (e.g., passport number, identification number such as Aadhaar or SSN, driver's license number, financial account data, passwords, etc.). In such cases, we will inform you that we have collected such types of information, unless prohibited from doing so by law.
            </p>
          </Section>

          <Section title="Terms & Contacts">
            <p>
              We try to respond to all legitimate requests within one month. Occasionally, it could take us longer than a month if your request is particularly complex or if you have made a number of requests. In this case, we will notify you and keep you updated. The maximum response time shall not exceed 90 days.
            </p>
            <p>
              You can submit your complaint/ request to DPO email.
            </p>
          </Section>

          <Section title="How DocGlasses Responds to “Do Not Track” Signals">
            <p>
              Some browsers have a “Do Not Track” feature that lets you tell websites that you do not want to have your online activities tracked. These features are not yet uniform, so we are not currently set up to respond to those signals.
            </p>
          </Section>

          <Section title="Cookie Policy">
            <p>
              Cookies is a small piece of data sent from Platform and stored on your device (computer, smartphone etc.) by your web browser while you are browsing our Platforms and sometimes down the line . Without Cookies it would be impossible to provide you information and services you are requesting through the Internet. Cookies remember stateful information (such as items added in the shopping cart in an online store) or record your browsing activity. They can also be used to remember arbitrary pieces of information that the user previously entered into form fields such as names, addresses, passwords and billing addresses.
            </p>
            <p>
              By using the Platforms, you agree to the use of any of the cookies and tracking tools mentioned in this policy, unless you opted out (available only for some cookie types). Additional information about cookie purposes can be found here or you can send a request to us.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Categories of Cookies Used</h3>
            <h4 className="font-medium mt-4 mb-2 text-white/80">Technical and strictly necessary Cookies</h4>
            <p>
              In most cases our Platforms use cookies in order to ensure technical feasibility to connect our Platform with your device and provide services requested by you. This cookies is integrated by default into our Platforms.
            </p>
            <p>
              In case, you try to block/ turn off any of such cookies you might not receive some essential part of services, requested by you. Some examples of such cookies are:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>User input cookies (session-id), e.g. when you are filling online form (package buying, making payment etc.).</li>
              <li>Authentication cookies, used for authenticated services, e.g., when You are logging into your online account within any of information systems integrated with our Platform.</li>
              <li>Security cookies used to detect authentication abuses and prevent malicious attacks.</li>
              <li>Multimedia content player session cookies, such as flash player cookies.</li>
              <li>Load balancing session cookies (faster processing of your requests).</li>
              <li>Third party social plug-in content sharing cookies.</li>
            </ul>

            <h4 className="font-medium mt-6 mb-2 text-white/80">Functionality and Preferences Cookies</h4>
            <p>
              Such cookies help us optimize and make our Platforms more user-friendly, enhance security levels, facilitate faster and more convenient use of the Platforms, and receive valuable statistics in an anonymized way, including but not limited to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To make aggregated statistics on new visitors to the Platforms.</li>
              <li>To help us recognize your browser and its previously configured settings, for example language preferences, font size etc.</li>
              <li>To manage contractual relationships with partners, when you book on partner websites.</li>
              <li>To help improve our Platform offering and for capacity planning purposes.</li>
            </ul>
            <p className="mt-4">
              We or our service providers may set analytics cookies. These allow us to gather aggregated or segmented information about the types of visitors that access our Platforms and the pages and advertisements that they view. In order to better understand your use of our Platforms, we or our service providers may collect information on such use, including pages visited, links clicked etc. We do not use this information to personally identify you.
            </p>
            <p className="mt-4">
              In case we are collecting Cookies for statistical purposes, we are committed to apply a “functional separation” principle, so the results of the processing shall be without any negative impact to Your privacy or there should not be any decisions made against You. Retention period of Functionality Cookies usually is very short. In case of longer periods, please, be aware that we always assess the risk level of such processing, so it does not adversely affect Your privacy.
            </p>
            <p className="mt-4">
              Under the strict supervision we might allow service providers to collect Functionality Cookies on our Platforms in order to provide us with aggregated statistics. In such cases we require service providers to aggregate or erase data obtained from Your device.
            </p>

            <h4 className="font-medium mt-6 mb-2 text-white/80">Advertising and Targeting Cookies</h4>
            <p>
              We and our third party vendors, including Microsoft, Google and Facebook, use Advertising cookies to serve ads based on Your prior visits to our Platforms. For example:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                To make use of cross-device tracking in order to optimize our advertising activities. As part of cross-device tracking, DocGlasses may combine information collected from a particular browser or mobile device with another computer or device linked to the computer or device from which the information was collected. By changing your cookie settings on your device you can change your cross-device tracking settings for advertising purposes.
              </li>
              <li>
                To work with online advertising companies to display targeted advertising on our Platforms and third-party platforms that you visit. This targeting may be based on information collected by us or third-party platforms. This targeting may also be based on your activities or behaviors on our Platforms or those of third parties. We may also obtain information about your browsing history from our business partners.
              </li>
            </ul>
            <p className="mt-4">
              We may use Google Analytics & Microsoft Clarity to collect demographic and interest data about you (such as heatmap activity, age, gender, and interests), including through Google Analytics Demographics and Interest Reporting. We may use the information collected about you through Google Analytics for Google services such as Remarketing with Google Analytics and Google Display Network Impression Reporting. Choices you make are browser and device specific. Some aspects of our site use cookies to function. You may not be able to use these features if you set your device to block cookies. We anonymize IP addresses in Google Analytics.
            </p>
            <p className="mt-4">
              We and our advertising partners may also use web beacons (single pixel GIF images). These web beacons are placed in the code of a Web page or an email newsletter. When you access a partner site within our mobile applications, we may track your activity on that site.
            </p>
          </Section>

          <Section title="Opt-out From Cookies">
            <p>
              Your browser gives you the ability to control cookies. How to do this varies from browser to browser. You should view the Help menu on the browser you use for further information. Your opt out choice is stored in opt out cookies only in that browser, so you should separately set your preferences for other browsers, computers, or devices you may use. If your browser blocks cookies, your opt out preferences may not be effective. Deleting browser cookies can remove your opt out preferences, so you should visit this page periodically to review your preferences. If you block or delete cookies or opt out of online behavioral advertising, not all of the tracking that we have described in this policy will stop. Please also note that opting out of a third party cookie does not mean that you will no longer receive or be subject to online advertising or marketing. It means that the third party service from which you opted out will no longer deliver ads tailored to your web preferences and online behavioral.
            </p>
            <p className="mt-4">
              You may also opt out of third party cookies by visiting opt-out websites like:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">optout.aboutads.info</a></li>
              <li><a href="https://www.cookiesandyou.com/disablecookies/windows/chrome/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">cookiesandyou.com</a></li>
            </ul>
          </Section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

/* SAME SECTION COMPONENT */
function Section({ title, children }: any) {
  return (
    <div className="border-b border-white/10 pb-10 last:border-0 last:pb-0">
      <h2 className="font-syne text-xl md:text-2xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      <div className="font-dm space-y-6 text-base text-white/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}