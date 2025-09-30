import React from 'react';
import PropTypes from 'prop-types';
import './FAQSection.css';

function FAQSection({ className }) {
  const generalFAQs = [
  {
    question: "What is ZATech?",
    answer: "ZATech is South Africa's largest tech community, connecting developers, entrepreneurs, and tech enthusiasts across the country through our Slack workspace."
  },
  {
    question: "How do I join?",
    answer: "Visit zatech.co.za for details."
  },
  {
    question: "Is it free to join?",
    answer: "Yes, ZATech is completely free to join and participate in."
  },
  {
    question: "Who can join?",
    answer: "Anyone who wants to be part of the community can join. If you're not a developer or not technical, you might not find it as engaging, but you're still very welcome. If you're not from South Africa but have a connection to or interest in the South African tech community, you can also join. We have active members from across Africa as well as dedicated channels for expats around the globe."
  },
  {
    question: "How do I announce an event?",
    answer: "To announce an event in the community: 1. Go to the #announcements-community channel. 2. Navigate to 'Workflows'. 3. Click the run button on the 'Announce your Event' workflow."
  }
];

  const jobFAQs = [
  {
    question: "Professional Recruiters",
    answer: "Professional recruiters (those placing candidates for other companies) are not permitted to post job listings in any channels. However, recruiters interested in collaboration opportunities should contact the admin team for discussion."
  },
  {
    question: "Job Posting Channels",
    answer: "All job-related activities are restricted to specific channels: #jobpostings – for full-time employment opportunities, #jobseekers – for those seeking full-time employment, #freelance-jobpostings – for contract and part-time opportunities, #freelance-jobseekers – for those seeking freelance work, and #services – for agencies and professional service providers."
  },
  {
    question: "Posting Full-Time Positions",
    answer: "You may post in #jobpostings only if you or your current employer is directly offering a full-time position. All posts must be submitted through https://sboj.dev/jobs. Part-time or contract positions should not be posted here."
  },
  {
    question: "Posting Freelance Opportunities",
    answer: "Use #freelance-jobpostings if you or your current employer is offering freelance, contract, or part-time positions."
  },
  {
    question: "Job Seekers",
    answer: "If you're looking for work, you can post in #jobseekers for full-time opportunities, and #freelance-jobseekers for contract or part-time work. You may cross-post if you're open to both types of employment."
  },
  {
    question: "Agencies and Service Providers",
    answer: "If you own or work at an agency, you may post a summary of your services in the #services channel."
  },
  {
    question: "Special Cases",
    answer: "If your situation doesn't fit into the above categories (e.g., posting on behalf of a friend or another company), please contact the admin team for a case-by-case assessment. Exceptions may be granted if the post adds value to the community."
  }
];

  return (
    <section id="faqs" className={`faq-section ${className || ''}`.trim()}>
      <h2>FAQs</h2>
      <p>Common questions about the ZATech community.</p>
      
      <div className="faq-container">
        <div className="faq-category">
          <h3>General Questions</h3>
          {generalFAQs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="faq-category">
          <h3>Job Posting and Recruitment Guidelines</h3>
          {jobFAQs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

FAQSection.propTypes = {
  className: PropTypes.string,
};

export default FAQSection;