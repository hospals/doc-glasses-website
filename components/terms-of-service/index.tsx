"use client";

import React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function TermsOfServiceContent() {
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
            Terms of Service
          </h1>
          <p className="font-dm tracking-wider uppercase text-xs sm:text-sm font-semibold" style={{ color: "var(--brand)" }}>
            Last updated: April 14, 2026
          </p>
        </div>

        <div className="flex-1 w-full space-y-12">

          <Section title="Terms of Service">
            <p>These Terms of Use ('Terms') contain crucial information outlining your rights and responsibilities. Kindly review them thoroughly before accessing or using our website. </p>
               {/* or mobile application available at the following URLs:</p> */}
            {/* <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>https://play.google.com/store/apps/details?id=com.app.hospals</li>
              <li>https://apps.apple.com/in/app/health-trip/id1488887969</li>
              <li>https://www.docglasses.com</li>
              <li>and its subdomains (the 'Website').</li>
            </ul> */}
            <p className="mt-4">
              If you disagree with these Terms, we request that you refrain from using the Website. The terms 'DocGlasses' the entity offering services as defined below through the Website.
            </p>
            <p>
              For the provision of services through the Website, we engage in collaborations with partner companies in various countries.<br/>
              Our Privacy Policy describes our collection and use of personal data connected to your Website use.
            </p>
          </Section>

          <Section title="Entire Agreement">
            <p><strong>In brief:</strong> These Terms are an agreement between DocGlasses and the Website users. By using the Website, you agree to be bound by these Terms and all applicable laws regulations.</p>
            <p>
              These Terms and our Privacy Policy cumulatively constitute a legally binding agreement between our users — patients, their attendants, Website visitors (“users”) and DocGlasses, which regulates your use of the Website.
            </p>
            <p>By using the Website, you with this declare and warrant that:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>you have read these Terms, understand its content, and agree to comply with these Terms in full</li>
              <li>you have the full legal capacity, and the legislation of your country does not restrict you from using the Website</li>
              <li>you comply with all applicable laws, regulations, and the third parties’ rights</li>
            </ul>
            <p className="mt-4">If you do not agree with these Terms, please do not use the Website.</p>
          </Section>

          <Section title="Services">
            <p><strong>In brief:</strong> These Terms are an agreement between DocGlasses and the Website users. By using the Website, you agree to be bound by these Terms and all applicable laws regulations.</p>
            
            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Our Services</h3>
            <p>The Website is a platform that provides the user with information about medical travel services and the clinics where they are available (“clinics” or “medical centers”).</p>
            <p>On the website, you can:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Find information about medical centers, doctors, and the services they offer</li>
              <li>Consult with our coordinator to discuss clinics, doctors, and available services.</li>
              <li>Receive assistance in selecting the optimal medical solution for your needs.</li>
              <li>Obtain an individualized treatment program from our partner clinic.</li>
              <li>Interact with our Treatment Cost Calculator.</li>
              <li>Interact with the Symptom & Diagnostic quiz.</li>
              <li>Make a deposit for a scheduled appointment.</li>
              <li>Schedule a visit to your chosen medical center.</li>
              <li>Request a 'Second Opinion.'</li>
              <li>Request a 'Tele/Video Consultation.'</li>
            </ul>
            <p className="mt-4">
              DocGlasses does not assign users to specific clinics or doctors; instead, we provide a curated list based on your preferences. Our goal is to assist you in finding the best healthcare option, considering factors such as language, country, medical needs, financial preferences, and other circumstances. Furthermore, we facilitate connections between DocGlasses patients and selected centers, offering support throughout communication, assistance with visit arrangements, and continued support even after you return home. Throughout your interaction with the website, our dedicated DocGlasses coordinators are available to assist.
            </p>
            <p>
              DocGlasses operates independently of clinics, and we do not guarantee the quality or specialization of their services. We are not intermediaries between patients and medical centers, and we do not directly provide medical services. The information on the website does not constitute medical advice and should not be used as a guide for action.
            </p>
            <p>
              We collaborate with medical centers through direct agreements or in partnership with our business associates. Our role is to facilitate connections and provide information, and we do not endorse or ensure the quality of the services provided by medical centers.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Deposit payment terms</h3>
            <p>
              In certain cases, as outlined in our signed agreements with clinics or medical centers, we may request a deposit to secure and confirm your appointment. This information is communicated to you in advance.
            </p>
            <p>
              The deposit amount is 200 (two hundred) euros or US dollars, depending on the currency of your order. It serves to ensure your arrival at the medical center. Legally, the deposit is a payment for our services; however, the clinics will deduct this amount from the total treatment cost. Consequently, with DocGlasses, your overall payment remains equivalent to what you would pay by contacting the clinic directly.
            </p>
            <p>It's important to note that the deposit is not a payment for the specific medical services you've ordered.</p>
            <p>
              Medical services are invoiced directly by the medical centers. Deposits can be paid through your Account or a third-party payment services provider, subject to their terms and privacy notices. We are not responsible for the processing of your personal data by third-party providers.
            </p>
            <p>
              Refund requests for deposits due to cancellations can be made via email at care@docglasses.com, provided it is done no later than 10 days before the appointment date. Refunds will be processed within 30 days. Failure to comply with this timeframe will result in non-refundability.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Calculate Treatment Cost Service disclaimer</h3>
            <p>
              The 'Calculate Estimated Treatment Cost' feature on this website is designed to provide users with an average cost estimate for medical treatments, as of January 1, 2024. This estimate is based on general information and does not account for individual variations, specific medical conditions, or unforeseen circumstances.
            </p>
            <p><strong>Important Points</strong></p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Average Cost Basis:</strong> The provided estimated treatment cost is an average as of January 1, 2023, and serves as a general reference point. It is subject to change based on various factors.</li>
              <li><strong>Dynamic Variables:</strong> Flight costs, visa fees, service provider charges, and treatment costs are dynamic and may fluctuate over time. Users are advised that changes to any of these variables after the estimation date may impact the overall cost.</li>
              <li><strong>Validation Required:</strong> Any changes to flight costs, visa fees, service provider charges, or treatment costs must be validated by requesting a personalized quote. Users are encouraged to contact relevant service providers directly to obtain the most accurate and up-to-date information.</li>
            </ul>
            <p className="mt-4"><strong>Limitation of Liability</strong></p>
            <p>
              This Estimated Treatment Cost Calculator is provided for informational purposes only and does not constitute a binding offer or contract. The website owner and operators assume no responsibility for the accuracy or completeness of the estimated costs. Users are solely responsible for verifying all details and obtaining personalized quotes from relevant service providers.
            </p>
            <p className="mt-4"><strong>Changes to Terms:</strong></p>
            <p>
              The terms of this disclaimer are subject to change without notice. Users are advised to review this disclaimer periodically for any updates. By using the 'Calculate Estimated Treatment Cost' feature, you acknowledge and accept the terms of this legal disclaimer.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Tele/Video Consultation service</h3>
            <p>
              The User understands that Tele-consultation shall not form a substitute for treatment that otherwise needs physical examination/immediate consultation. Further, the User understands that the advice provided by the Practitioner/Healer/Doctor is based on general medical conditions and practices prevalent in country of practice of the doctor/Practitioner/Healer, to the best of his knowledge and ability, and not for conditions which are territory specific for regions other than the country of practice, irrespective of where the User is procuring medical services or engaging in communication with the Practitioner/Healer/Doctor.
            </p>
            <p>
              The Tele/Video Consultation Service enables users to remotely engage with healthcare professionals through telecommunication or video conferencing technologies. Users are responsible for providing accurate information during the appointment scheduling process and ensuring a secure internet connection for consultations.
            </p>
            <p>
              Confidentiality is paramount, and users are urged to select a private and quiet location for the consultation. Users must take measures to maintain the confidentiality of their health information during the tele/video consultations. The Provider takes reasonable steps to secure the transmission of information, but users acknowledge that the privacy and security of information during tele/video consultations may be influenced by factors beyond the Provider's control.
            </p>
            <p>
              Users must not record or disclose any part of the tele/video consultation without explicit consent from the healthcare professional. The Provider is not responsible for any breaches of confidentiality resulting from the user's failure to adhere to these terms. Violations of confidentiality may result in the termination of the user's access to the Tele/Video Consultation Service.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Second opinion service</h3>
            <p>
              Medical Centers & Clinics' doctors on our platform can offer a 'Second Opinion' service upon your request through the website. The Second Opinion service encompasses an evaluation of your past and current health status, an analysis of your medical history, and the formulation of a diagnosis and treatment plan prepared by the clinics' representatives. By ordering a Second Opinion, you acknowledge and agree to the following:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>The provided diagnosis is limited and conditional.</li>
              <li>A Second Opinion is not a substitute for a comprehensive physical examination or an in-person visit to a doctor.</li>
              <li>The doctor providing the service may lack complete information about your health status, typically obtained through a personal examination.</li>
              <li>The absence of a personal examination can impact the specialist's ability to diagnose a condition, illness, or injury.</li>
            </ul>
            <p className="mt-4">
              If you wish to provide medical materials on behalf of a third party, please notify DocGlasses in advance under the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>The third party is a member of your family.</li>
              <li>You have obtained prior consent from the third party for their representation.</li>
              <li>The third party cannot independently submit a request through the website.</li>
            </ul>
            <p className="mt-4">
              Upon receiving all necessary information, DocGlasses will create a medical record. Subsequently, we will present you with a selection of doctors from clinics or medical centers on the website or send information via email. Once you make a decision, we will gather any missing information in your medical record and transmit it to your chosen doctor. You can expect to receive a Second Opinion via email within a few business days after we have received complete documentation from your side.
            </p>
          </Section>

          <Section title="Information on the Website">
            <p>Our goal is to provide the most objective information and help users get the best solution to their medical issues.</p>
            <p>
              The information that you see on the Website is obtained directly from medical centers, or we collect from reliable, in our opinion, open sources. We try to provide accurate and up-to-date information, but we cannot guarantee it.
            </p>
            <p>
              We receive requests from clinics, medical centers, hospitals, and doctors to update their information. While we request accreditation, certification, and relevant licenses, the platform cannot guarantee the real-time accuracy of updated information.
            </p>
            <p>
              Inclusion of a Medical Center or Clinic on this platform does not constitute an endorsement or recommendation by the platform owner or operators. Users are encouraged to conduct their own due diligence and research before making any decisions based on the information provided.
            </p>
            <p>
              Information about Medical Centers and Clinics on this platform is not intended as medical advice. Users should consult with qualified healthcare professionals for personalized advice and medical services.
            </p>
            <p>
              Certain treatments and pharmaceuticals displayed on the Website may be prohibited in certain countries. We remind you that you are solely responsible for complying with the laws that apply to you.
            </p>
          </Section>

          <Section title="Account">
            <p><strong>In brief:</strong> You can create an Account to better communicate with medical centers, clinics and us. You are responsible for its use and safety.</p>
            <p>To use the Website’s full functionality, you need to register a personal account (“Account”) by applying to the Website.</p>
            <p>By using your Account, you can:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>provide and correct your personal data;</li>
              <li>submit and correct your medical records;</li>
              <li>send requests to clinics, hospitals or doctors;</li>
              <li>choose a treatment program in one of the offered centers;</li>
              <li>pay a deposit for an appointment you made;</li>
              <li>make reviews and comments on reviews.</li>
            </ul>
            <p className="mt-4">Find out more about how we process personal data in our Privacy Policy.</p>
            <p>
              You cannot create more than one Account, transfer or delegate your Account to others. You are responsible for maintaining the confidentiality of your account login information and all activities performed using your Account.
            </p>
            <p>If you know or for some reason suspect that someone has illegally gained access to your Account, please notify us immediately.</p>
            <p>
              To delete the Account and your data, please use the proper functionality of the Account or send us an email request on marketing@docglasses.com
            </p>
          </Section>

          <Section title="Content">
            <p><strong>In brief:</strong> DocGlasses is the owner of the Website and all its content. We grant you specific rights to use the Website and its content for personal purposes, and in some cases, for commercial purposes. Copying and distributing content in violation of DocGlasses's rights or copyright holders' rights is strictly prohibited. We do not promote clinics, drugs, or services, but we may share information about discounts and special offers from medical centers.</p>
            <p>
              All materials on the Website, encompassing text, graphics, information, images, icons, photos, videos, sounds, music, computer code, trademarks, logos, and any other materials, along with the associated intellectual property rights (collectively referred to as 'Content'), are either owned by DocGlasses or used with permission from the respective copyright holder.
            </p>
            <p>
              The Content is protected by copyright laws and international intellectual property law, and you must comply with these regulations. Use of the Content is allowed only with the explicit permission of the author or copyright holder, unless otherwise stated in the Terms and applicable law. It's important to note that fees may be applicable for obtaining the right to use the Content.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Content use</h3>
            <p>
              When you use (share, copy, download) the Content, it's important to note that you do not acquire any rights. You are expressly prohibited from modifying or removing any copyright, authorship notices, or other metadata associated with the Content.
            </p>
            <p>
              When using the Content, it is mandatory to include a hyperlink within the first paragraph that directs to the original article's page, indicating the DocGlasses brand and the author of the material, if such information is provided. This condition is essential for proper attribution and acknowledgment of the source.
            </p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Personal use</h3>
            <p>
              You are allowed to use the Content for personal, non-commercial purposes without requiring prior permission. DocGlasses provides you with a limited, non-exclusive, non-sublicensable, revocable, and non-transferable license, valid within the terms of these conditions. This license permits you to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Access and view any Content on the Website.</li>
              <li>Share the Content by posting on social networks or copying a link to the Website page.</li>
            </ul>
            <p className="mt-4">In order to utilize this license, you must adhere to and comply with the terms outlined in these Terms of Use.</p>

            <h3 className="font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }}>Commercial use</h3>
            <p>
              Commercial use of the Content, such as for profit or public/government activities, requires a special permit, and if applicable, the payment of a fee. If you wish to obtain permission to use the Content for commercial purposes, please reach out to us at marketing@docglasses.com
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p><strong>In brief:</strong> DocGlasses assumes no responsibility for any damage or loss resulting from your use of the Website or any issues related to these Terms. This includes, but is not limited to, the consequences of treatment or recommendations presented on the Website. While we always strive to assist users facing difficulties, DocGlasses is not liable for inaccuracies, unreliability, or incompleteness of any content on the Website, including typos or errors in the text. We do not guarantee the accuracy of medical recommendations provided through the Website, and as such, we disclaim responsibility for any consequences arising from such treatment or recommendations, even if provided by DocGlasses coordinators or clinics featured on the Website.</p>
            <p>
              DocGlasses, along with its founders, partners, employees, contractors, and agents, is not liable for damages of any kind, including but not limited to lost profits, data loss, or damage to reputation, associated with the use or inability to use the Website and information received from DocGlasses. This includes errors, omissions, outages, defects, and viruses. This disclaimer of warranties and limitation of liability applies to the maximum extent permitted by law.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Your breach of these Terms.</li>
              <li>Your use of the Website or Content, especially if deemed inappropriate.</li>
              <li>Your violation of laws or the rights of third parties.</li>
            </ul>
            <p className="mt-4">
              It's important to note that this is a suggested revision and you should review it to ensure it accurately reflects your intentions and meets any legal requirements in your jurisdiction.
            </p>
          </Section>

          <Section title="Applicable Law and Jurisdiction">
            <p><strong>In brief:</strong> This agreement is governed by the laws of Singapore. While we aim to resolve any disputes amicably, in the event of a serious dispute, it will be settled in the courts of Singapore or the arbitration center of Singapore.</p>
            <p>
              These Terms are subject to and interpreted in accordance with the laws of Singapore. If any material or your use of the Website is not in compliance with the laws of your country, the Website is not intended for you, and we request that you refrain from using it. It is your responsibility to ensure that you are aware of and comply with the laws of your jurisdiction.
            </p>
            <p>
              You agree that any disputes, conflicts, claims, or disagreements arising directly or indirectly in connection with the Website or these Terms, including those related to their validity, interpretation, or application, should be resolved through friendly negotiations with the DocGlasses team.
            </p>
            <p>
              In cases where consensus cannot be reached through negotiations, the dispute shall be exclusively settled in a court in Singapore under the laws of Singapore.
            </p>
            <p>
              All claims must be initiated within one (1) year from their origin unless a longer period is mandated by applicable law.
            </p>
          </Section>

          <Section title="Electronic Communications">
            <p>By using the Website and providing us with your contact information, you understand and agree that we may send you electronic communications regarding, but not limited to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>your use of the Website;</li>
              <li>the Website or these Terms updates;</li>
              <li>promotional offers, news, and other updates.</li>
            </ul>
            <p className="mt-4">
              You can refuse to receive the marketing emails/messenger messages by following the instructions in the corresponding notices. Find out more about the processing of your personal data in our Privacy Policy.
            </p>
          </Section>

          <Section title="Other Terms">
            <p>DocGlasses is entitled to check if you comply with the Terms during the Website use. In case of violations, we may revoke or suspend your access to the Website for you.</p>
            <p>If any of these Terms provision is found to be illegal, invalid, or unenforceable, the remaining provisions will remain in effect and enforceable.</p>
            <p>We may transfer our rights and obligations under these Terms to third parties, but this will not affect your rights or our obligations under this Agreement.</p>
            <p>
              We reserve the right to change these Terms. If a material change may affect your use of the Website or your rights as a user, we will notify you within reasonable terms before the effective date by posting a message on the Website or sending you an email.
            </p>
            <p>
              The printed version of the Terms is admissible evidence in court or administrative proceedings that arose based on or in connection with the Website use, to the same extent and under the same conditions as other documents and records created and stored in hard copy.
            </p>
          </Section>

          <Section title="Questions and Contact Information">
            <p>If you have any questions or comments about these Terms or the Websites, please contact us by:</p>
            <div className="mt-6 p-5 rounded-xl border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p><strong>Company:</strong> Vision Health Holdings Inc.</p>
              <p className="mt-2"><strong>EIN:</strong> 35-2955047</p>
              <p className="mt-2"><strong>Address:</strong> 16192 Coastal Highway Lewes, DE 19958</p>
              <p className="mt-2"><strong>Email:</strong> danish@docglasses.ai</p>
            </div>
          </Section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

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