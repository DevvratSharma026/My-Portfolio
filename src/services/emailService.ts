// Email service configuration and functions
import emailjs from '@emailjs/browser';

// EmailJS configuration - Updated with real credentials
const EMAILJS_SERVICE_ID = 'service_9fk8p7j';
const EMAILJS_TEMPLATE_ID = 'template_gv1vuin';
const EMAILJS_PUBLIC_KEY = 'vUhrMRNv5jU94y5yB';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Email sending function
export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Template parameters that will be sent to EmailJS
    const templateParams = {
      user_name: emailData.name,
      user_email: emailData.email,
      subject: emailData.subject || 'Contact from Portfolio',
      message: emailData.message,
      to_email: 'devsharma.pcm.2003@gmail.com', // Your email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully! I\'ll get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again or contact me directly.'
    };
  }
};

// Fallback mailto function
export const openMailto = (emailData: EmailData) => {
  const subject = encodeURIComponent(emailData.subject || 'Contact from Portfolio');
  const body = encodeURIComponent(
    `Name: ${emailData.name}\nEmail: ${emailData.email}\n\nMessage:\n${emailData.message}`
  );
  const mailtoLink = `mailto:devsharma.pcm.2003@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};