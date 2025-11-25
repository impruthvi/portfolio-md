import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export const metadata: Metadata = {
  title: 'Privacy Policy | IMPRUTHVI - Pruthvisinh Rajput',
  description: 'Privacy policy for IMPRUTHVI portfolio website.',
  robots: {
    index: false,
    follow: false
  }
}

export default function PrivacyPolicy() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Link
          href='/contact'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to contact</span>
        </Link>

        <h1 className='title mb-8'>Privacy Policy</h1>

        <div className='prose dark:prose-invert'>
          <p className='text-lg text-muted-foreground'>
            Last updated: November 25, 2025
          </p>

          <h2>The Short Version (TL;DR)</h2>
          <p>
            I respect your privacy. Your contact information is only used to
            respond to your message. I don&apos;t sell, share, or spam. That&apos;s it. 
            Pretty simple, right? 🎉
          </p>

          <h2>The Slightly Longer Version</h2>

          <h3>What Information Do I Collect?</h3>
          <p>When you use the contact form, I collect:</p>
          <ul>
            <li>Your name (so I know what to call you)</li>
            <li>Your email address (so I can actually respond)</li>
            <li>Your message (obviously, that&apos;s the whole point)</li>
          </ul>

          <h3>What Do I Do With Your Information?</h3>
          <p>
            I use your information solely to respond to your inquiry. That&apos;s
            literally it. No marketing lists, no spam, no selling your data to
            mysterious third parties who promise to make me rich.
          </p>

          <h3>Do I Use Cookies? 🍪</h3>
          <p>
            Only for essential stuff like remembering if you prefer dark mode
            (because nobody likes being blinded at 3 AM). No tracking cookies,
            no advertising cookies, just the good kind that make the site work
            better.
          </p>

          <h3>Analytics</h3>
          <p>
            I use Vercel Analytics to understand how people use this site. It&apos;s
            privacy-friendly and doesn&apos;t track you across the internet. It just
            tells me things like &quot;20 people visited your blog today&quot; without
            telling me who those people are.
          </p>

          <h3>Third-Party Services</h3>
          <p>I use:</p>
          <ul>
            <li>
              <strong>Resend</strong> - To send emails from the contact form
            </li>
            <li>
              <strong>Vercel</strong> - To host this website
            </li>
          </ul>
          <p>
            These services have their own privacy policies, and they&apos;re pretty
            good about privacy too.
          </p>

          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Ask me what data I have about you (probably just your email if you contacted me)</li>
            <li>Ask me to delete your data</li>
            <li>Not contact me in the first place</li>
            <li>Use an ad blocker (I won&apos;t judge)</li>
          </ul>

          <h3>Data Security</h3>
          <p>
            Your contact form submissions are sent securely using industry-standard
            encryption. I don&apos;t store your information in any database - it just
            gets emailed to me and that&apos;s it.
          </p>

          <h3>Children&apos;s Privacy</h3>
          <p>
            This site isn&apos;t intended for children under 13. If you&apos;re under 13
            and reading this, congrats on your advanced reading skills! But
            please don&apos;t use the contact form without a parent&apos;s permission.
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            I might update this privacy policy from time to time. If I make any
            major changes, I&apos;ll update the date at the top. You know, like a
            responsible adult.
          </p>

          <h3>Questions?</h3>
          <p>
            If you have any questions about this privacy policy, feel free to{' '}
            <Link href='/contact' className='font-medium underline'>
              contact me
            </Link>
            . Yes, I see the irony of asking you to submit your data to ask
            about your data privacy. 😄
          </p>

          <div className='mt-8 rounded-lg bg-muted p-6'>
            <h3 className='mt-0'>The Really Honest Version</h3>
            <p className='mb-0 text-sm'>
              I&apos;m just one person trying to show off my work and maybe get some
              freelance gigs. I&apos;m not interested in your data beyond being able
              to respond if you reach out. I promise to treat your information
              the way I&apos;d want mine treated - with respect and common sense.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
