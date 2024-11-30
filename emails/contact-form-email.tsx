import React from 'react'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-green-200 via-white to-blue-200 p-6'>
    <div className='w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-lg'>
      <div className='p-6'>
        <h1 className='mb-6 text-center text-3xl font-extrabold text-green-600'>
          Contact Form Submission
        </h1>
        <p className='mb-4 text-lg'>
          <span className='font-semibold'>From:</span> <strong>{name}</strong> (
          <a href={`mailto:${email}`} className='text-blue-500 underline'>
            {email}
          </a>
          )
        </p>
        <h2 className='mb-2 text-xl font-bold text-gray-800'>Message:</h2>
        <p className='whitespace-pre-wrap rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-700'>
          {message}
        </p>
      </div>
      <footer className='rounded-b-2xl bg-gray-100 p-4 text-center text-sm text-gray-600'>
        <p>
          Need help? Contact us at{' '}
          <a
            href='mailto:contact@impruthvi.me'
            className='font-semibold text-green-600 underline'
          >
            contact@impruthvi.me
          </a>
        </p>
      </footer>
    </div>
  </div>
)

export default ContactFormEmail
