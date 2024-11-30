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
  <div className='mx-auto max-w-lg rounded-lg border border-gray-200 bg-gray-50 p-6'>
    <h1 className='mb-4 text-center text-2xl font-bold text-green-600'>
      Contact Form Submission
    </h1>
    <p className='mb-2 text-lg'>
      From <strong>{name}</strong> at{' '}
      <a href={`mailto:${email}`} className='text-blue-500 underline'>
        {email}
      </a>
    </p>
    <h2 className='mb-2 text-xl font-semibold text-gray-800'>Message:</h2>
    <p className='whitespace-pre-wrap rounded-md border border-gray-300 bg-white p-4 text-gray-700'>
      {message}
    </p>
  </div>
)

export default ContactFormEmail
