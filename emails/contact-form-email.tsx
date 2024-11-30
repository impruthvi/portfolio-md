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
  <div style={styles.container}>
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <h1 style={styles.header}>Contact Form Submission</h1>
        <p style={styles.info}>
          From <strong>{name}</strong> at{' '}
          <a href={`mailto:${email}`} style={styles.link}>
            {email}
          </a>
        </p>
        <h2 style={styles.subHeader}>Message:</h2>
        <p style={styles.message}>{message}</p>
      </div>
      <footer style={styles.footer}>
        <p>
          Need help? Contact us at{' '}
          <a href='mailto:contact@impruthvi.me' style={styles.footerLink}>
            contact@impruthvi.me
          </a>
        </p>
      </footer>
    </div>
  </div>
)

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #a8e6cf, #ffffff, #b3cde0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  card: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    border: '1px solid #e2e8f0'
  },
  cardContent: {
    padding: '24px'
  },
  header: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#4CAF50',
    textAlign: 'center' as 'center', // Explicitly typing textAlign as 'center'
    marginBottom: '24px'
  },
  info: {
    fontSize: '18px',
    marginBottom: '16px'
  },
  link: {
    color: '#1e90ff',
    textDecoration: 'underline'
  },
  subHeader: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px'
  },
  message: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    color: '#4a4a4a',
    whiteSpace: 'pre-wrap'
  },
  footer: {
    backgroundColor: '#f7fafc',
    padding: '16px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    textAlign: 'center' as 'center', // Explicitly typing textAlign as 'center'
    color: '#6b7280',
    fontSize: '14px'
  },
  footerLink: {
    color: '#4CAF50',
    fontWeight: '600',
    textDecoration: 'underline'
  }
}

export default ContactFormEmail
