import type { Metadata } from 'next';
import '../policy.css';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Utsav Tulsyan',
  description:
    'Cancellation and refund practices for sponsorship contributions made to support the work of Utsav Tulsyan.',
};

export default function CancellationPage() {
  return (
    <main className='policy-page'>
      <article className='policy-container'>
        <h1 className='policy-heading'>Cancellation &amp; Refund Policy</h1>
        <p className='policy-lead'>
          Sponsorships are voluntary contributions that make it possible for me
          to invest time in open-source software. This policy explains how you
          can manage or cancel a sponsorship and when refunds may be available.
        </p>

        <section className='policy-section'>
          <h2>Managing Your Sponsorship</h2>
          <p>
            You can update, pause, or cancel your sponsorship directly through
            the platform where it was created (for example, GitHub Sponsors).
            Changes take effect immediately for future billing cycles, and you
            will receive confirmation from that platform.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Refund Eligibility</h2>
          <p>
            Because sponsorships do not purchase services or products, completed
            contributions are generally non-refundable. If a payment was made in
            error or you experience an issue such as duplicate billing, contact
            me within 30 days so I can review the situation with you and the
            payment platform.
          </p>
        </section>

        <section className='policy-section'>
          <h2>Chargebacks and Disputes</h2>
          <p>
            If a chargeback is filed, I will provide the payment processor with
            any relevant information so the matter can be resolved fairly. To
            avoid delays, please reach out to me first so we can work together on
            a solution.
          </p>
        </section>

        <section className='policy-section'>
          <h2>How to Request Assistance</h2>
          <p>
            Email{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>{' '}
            with the name on the sponsorship, the date of the contribution, and a
            short description of the issue. I aim to respond within three
            business days.
          </p>
        </section>

        <section className='policy-section policy-contact'>
          <h2>Questions?</h2>
          <p>
            I&apos;m happy to clarify anything about this policy. Reach out at{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
