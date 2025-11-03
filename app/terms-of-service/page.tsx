import type { Metadata } from 'next';
import '../policy.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Utsav Tulsyan',
  description:
    'Terms and conditions for sponsoring the independent software work of Utsav Tulsyan.',
};

export default function TermsOfServicePage() {
  return (
    <main className='policy-page'>
      <article className='policy-container'>
        <h1 className='policy-heading'>Terms of Service</h1>
        <p className='policy-lead'>
          These Terms of Service explain the guidelines that apply when you
          choose to sponsor my independent software projects. Sponsorships are
          voluntary contributions and do not create a client relationship or an
          obligation for bespoke services.
        </p>

        <section className='policy-section'>
          <h2>1. Sponsor Contributions</h2>
          <p>
            Sponsorships support my public open-source work and related content.
            Contributions do not entitle sponsors to exclusive deliverables,
            consulting, or guaranteed features. Any benefits listed on a
            sponsorship platform (for example, public acknowledgements) are
            provided at my discretion and may change over time.
          </p>
        </section>

        <section className='policy-section'>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have legal guardian consent to
            become a sponsor. By sponsoring you confirm that you have the
            authority to use the payment method provided and that your
            contribution complies with all applicable laws and regulations.
          </p>
        </section>

        <section className='policy-section'>
          <h2>3. Payment Terms</h2>
          <p>
            Contributions are processed through the platform where the
            sponsorship is created, such as GitHub Sponsors. Recurring
            sponsorships will renew automatically until you modify or cancel
            them on that platform. I do not store or process your payment details
            directly.
          </p>
        </section>

        <section className='policy-section'>
          <h2>4. Communication</h2>
          <p>
            I may contact you at the email address associated with your
            sponsorship to share updates, confirm changes, or respond to support
            requests. You can opt out of non-essential messages at any time by
            replying to the email or contacting me at{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>.
          </p>
        </section>

        <section className='policy-section'>
          <h2>5. Intellectual Property</h2>
          <p>
            Sponsoring my work does not transfer any intellectual property
            rights. Code and content I publish remain under their respective
            licenses. If you choose to contribute code or other materials, they
            will be governed by the license terms provided in the relevant
            project repository.
          </p>
        </section>

        <section className='policy-section'>
          <h2>6. Limitation of Liability</h2>
          <p>
            Sponsorships are offered on an &quot;as is&quot; basis. To the fullest extent
            permitted by law, I am not liable for any indirect, incidental, or
            consequential damages arising from your sponsorship or use of my
            open-source projects.
          </p>
        </section>

        <section className='policy-section'>
          <h2>7. Changes to These Terms</h2>
          <p>
            I may update these Terms of Service to reflect new policies or legal
            requirements. The most recent version will always be available on
            this page, and the effective date will be updated accordingly.
            Continuing a sponsorship after changes take effect means you accept
            the revised terms.
          </p>
        </section>

        <section className='policy-section policy-contact'>
          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{' '}
            <a href='mailto:contact@utsavtulsyan.com'>contact@utsavtulsyan.com</a>{' '}
            and I&apos;ll respond soon.
          </p>
        </section>
      </article>
    </main>
  );
}
