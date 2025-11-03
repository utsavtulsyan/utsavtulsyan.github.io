import type { Metadata } from 'next';
import '../policy.css';

export const metadata: Metadata = {
  title: 'Customer Support | Utsav Tulsyan',
  description:
    'How to contact Utsav Tulsyan for sponsor-related questions, assistance, or account updates.',
};

export default function SupportPage() {
  return (
    <main className='policy-page'>
      <article className='policy-container'>
        <h1 className='policy-heading'>Customer Support</h1>
        <p className='policy-lead'>
          I&apos;m grateful for every sponsor who chooses to support my independent
          software work. If you have any questions about your sponsorship,
          please review the information below or reach out directly and I will
          be happy to help.
        </p>

        <section className='policy-section'>
          <h2>Primary Contact</h2>
          <p>
            Email is the best way to reach me. Send a message to{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>{' '}
            with your sponsorship details, and I&apos;ll respond as quickly as
            possible.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Response Times</h2>
          <p>
            I aim to acknowledge all support requests within one business day
            and to provide a full response within three business days. If your
            inquiry requires additional research—such as locating historical
            contribution information—I&apos;ll let you know and keep you informed of
            the progress.
          </p>
        </section>

        <section className='policy-section'>
          <h2>What to Include</h2>
          <ul>
            <li>The name and email associated with your sponsor contribution.</li>
            <li>The platform you used (for example, GitHub Sponsors).</li>
            <li>
              A short description of the question or issue you&apos;re facing so I
              can resolve it efficiently.
            </li>
          </ul>
        </section>

        <section className='policy-section'>
          <h2>Self-Service Resources</h2>
          <p>
            Sponsorships are voluntary contributions that do not unlock
            additional services or products. You can modify or cancel recurring
            support directly through the platform where you created the
            sponsorship. If anything looks unusual, contact me and I can verify
            the details on my end.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Escalation</h2>
          <p>
            If you have a time-sensitive concern—such as an unexpected charge—
            please include <strong>Urgent</strong> in your email subject line.
            I&apos;ll prioritize these messages and work with you to resolve the
            situation as quickly as possible.
          </p>
        </section>

        <section className='policy-section policy-contact'>
          <h2>Need help?</h2>
          <p>
            Send an email to{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>{' '}
            and I&apos;ll get back to you soon.
          </p>
        </section>
      </article>
    </main>
  );
}
