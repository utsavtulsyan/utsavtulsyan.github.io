import type { Metadata } from 'next';
import '../policy.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Utsav Tulsyan',
  description:
    'Privacy practices for sponsor contributions made to support the work of Utsav Tulsyan.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className='policy-page'>
      <article className='policy-container'>
        <h1 className='policy-heading'>Privacy Policy</h1>
        <p className='policy-lead'>
          This Privacy Policy describes how I handle information related to your
          sponsorship. I only collect the details necessary to acknowledge your
          support and respond to inquiries, and I strive to keep that information
          secure.
        </p>

        <section className='policy-section'>
          <h2>Information I Collect</h2>
          <ul>
            <li>Contact information shared by the sponsorship platform.</li>
            <li>The amount, frequency, and status of your contributions.</li>
            <li>
              Any additional details you provide when you contact me for support
              (for example, clarifications about billing).
            </li>
          </ul>
        </section>

        <section className='policy-section'>
          <h2>How Information Is Used</h2>
          <p>
            I use sponsorship information to send acknowledgements, provide
            updates about my open-source work, manage accounting obligations, and
            respond to support requests. I do not sell or rent your personal
            data, and I do not use it for advertising.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Data Sharing</h2>
          <p>
            I may share necessary details with trusted service providers that
            help me operate the sponsorship program—for example, payment
            processors or accounting software. These partners are required to
            protect your information and use it only for the services they
            provide to me.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Data Retention</h2>
          <p>
            Sponsorship records are retained for as long as necessary to fulfill
            legal, tax, and accounting requirements. If you end your sponsorship
            and would like specific personal details removed, contact me and I
            will do so unless I need to keep the information for legal reasons.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Security</h2>
          <p>
            I use reputable platforms such as GitHub Sponsors to process
            payments. I do not store your full payment information on my own
            systems, and I take reasonable measures to keep any stored data
            secure.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Your Choices</h2>
          <p>
            You can update or cancel your sponsorship through the platform where
            it was created. You can also request access to, correction of, or
            deletion of the personal information I have about you by emailing
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Updates</h2>
          <p>
            I may revise this Privacy Policy to reflect new practices or legal
            requirements. The most current version will always be published on
            this page.
          </p>
        </section>

        <section className='policy-section policy-contact'>
          <h2>Contact</h2>
          <p>
            For any privacy-related questions, email{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
