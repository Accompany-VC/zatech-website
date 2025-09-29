import React from "react";
import "./Home.css";
import MapSVG from "../assets/images/South_Africa_blank_map.svg";
import WhyJoinImage from "../assets/images/why-join.png"; 
import EventsImage from "../assets/images/events.jpg";


export default function Home() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">South Africa's Largest Tech Community</h1>
            <p className="hero-description">
              ZATech is South Africa's largest tech community, connecting developers,
              entrepreneurs, and other technical professionals and tech enthusiasts
              across the country.
            </p>
            <a
              href="https://app.slack.com/client/T03A23LJR/C03A23LKH"
              target="_blank"
              rel="noreferrer"
              className="cta-button"
            >
              Join Our Slack Community →
            </a>
          </div>
          <div className="hero-map">
            <img src={MapSVG} alt="South Africa Map" className="map-svg" />
          </div>
        </div>
      </section>

      {/* Section 2: Community */}
      <section>
        <h1>Join our community</h1>
        Connect, collaborate, and grow with thousands of tech professionals in SA
        <div className="community-grid">
          <div className="community-card">
           <img src={WhyJoinImage} alt="Why Join" className="card-image" />
           <h3>Why Join?</h3> 
          At ZATech, we bring together South Africa’s brightest tech minds. Join our Slack community and engage in meaningful discussions, skill-sharing, and networking. With hundreds of channels covering everything from coding and startups to gaming and mental health, there’s a space for everyone. </div>
          <div className="community-card"><h3>Slack-Based Messaging</h3>
          Get your invite to our Slack workspace and join thousands of tech professionals in meaningful discussions, knowledge sharing, and networking</div>
          <div className="community-card"><h3>Hundreds of Topics and Interests</h3>
          We have hundreds of channels organized around locations like #capetown, languages like #python, specialisations like #aws  and some non-tech ones too like #cooking</div>
          <div className="community-card">
           <img src={EventsImage} alt="Events and Jobs" className="card-image" />
           <h3>Events, Job-Posting and more</h3>
          We organize and share meetups, exchange knowledge about everything from tech to visas, and have active #jobpostings and #freelance-jobpostings channels for finding work</div>
          <div className="community-card"><h3>Some Things to Know Before Joining</h3>
          By joining you agree to abide by the ZATech Code of Conduct. Please take a moment to read it and take special note we have specific rules about recruitment.

          The group is intended to be high signal, low noise. Think of it as an overlapping series of professional groups rather than IRC in the 90s.

          Be kind. Don't be snarky. Have curious conversation; don't cross-examine. Comments should get more thoughtful and substantive, not less, as a topic gets more divisive.
          </div>
          <div className="community-card"><h3>Request an Invite</h3>
          We welcome nearly anyone to join our community, but to prevent spam we are invite only.

          To request an invite, send an email to invite@zatech.co.za from an address you're going to use for a long time (not your work email — you'll be in this community for a long time). Include your name, occupation, a brief explanation of why you want to join the community, and how you heard about us.

          Finally, please include a link to your LinkedIn, Twitter, GitHub, or any site that demonstrates you're a real human. None of the above information will be shared with anyone but the admin team, who will use it solely to assess your application. We grant 99% of applications and only reject spammers, scammers, and bots.</div>
        </div>
      </section>

      {/* Section 3: About Us */}
      <section id="about">
      <h2>About Us</h2>
        Here's a four-minute video with some more information about who we are and a look inside our Slack group.

        <div className="about-video">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/Ze_C-Fwz_Ec"
            title="ZATech Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.youtube.com/watch?v=Ze_C-Fwz_Ec"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
          <div className="about-card">
            <h3>How we started</h3>
            <p>Founded in 2015, ZATech started as a small Slack group and has grown into South Africa’s largest tech community. We connect software engineers, product managers, UX designers, and entrepreneurs who share a passion for tech and innovation.</p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section id="faqs">
  <   h2>FAQs</h2>
        Common questions about the ZATech community.
        <div className="faq-section">
          <div className="faq-category">
            <h3>General Questions</h3>
            <details><summary>What is ZATech?</summary><p>ZATech is South Africa's largest tech community, connecting developers, entrepreneurs, and tech enthusiasts across the country through our Slack workspace.</p></details>
            <details><summary>How do I join?</summary><p>See zatech.co.za</p></details>
            <details><summary>Is it free to join?</summary><p>Yes, ZATech is completely free to join and participate in.</p></details>
            <details><summary>Who can join?</summary><p>Anyone who wants to be part of the community can join. If you're not a dev or not technical, you might not find it too interesting but you're still very welcome.
            If you're not from South Africa but have some connection or interest in being part of the South African tech community, you can join. We have active members from across Africa as well as dedicated channels for expats around the globe.</p></details>
            <details><summary>How do I announce an event?</summary><p>To announce an event in the community:
            1. Go to the #announcements-community channel.
            2. Navigate to "Workflows".
            3. Click the run button on the "Announce your Event" workflow.</p></details>
          </div>

          <div className="faq-category">
            <h3>Job Posting and Recruitment Guidelines</h3>
            <details><summary>Professional Recruiters</summary><p>Professional recruiters (those placing candidates for other companies) are not permitted to post job listings in any channels. However, recruiters interested in collaboration opportunities should reach out to the admin team for discussion.</p></details>
            <details><summary>Job Posting Channels</summary><p>All job-related activities are restricted to specific channels:
            #jobpostings - For full-time employment opportunities.
            #jobseekers - For those seeking full-time employment.
            #freelance-jobpostings - For contract and part-time opportunities.
            #freelance-jobseekers - For those seeking freelance work.
            #services - For agency and professional service providers.</p></details>
            <details><summary>Posting Full-Time Positions</summary><p>You may post in #jobpostings only if you or your current employer is directly offering a full-time position. All posts must be submitted through https://sboj.dev/jobs. Part-time or contract positions should not be posted here.</p></details>
            <details><summary>Posting Freelance Oppertunities</summary><p>Use #freelance-jobpostings if you or your current employer is offering freelance, contract, or part-time positions.</p></details>
            <details><summary>Job Seekers</summary><p>If you're looking for work, you can post in:
            #jobseekers for full-time opportunities.
            #freelance-jobseekers for contract or part-time work.
            You may cross-post if you're open to both types of employment</p></details>
            <details><summary>Agencies and Service Providers</summary><p>If you own or work at an agency, you may post a summary of your services in the #services channel.</p></details>
            <details><summary>Special Cases</summary><p>If your situation doesn't fit into the above categories (e.g., posting on behalf of a friend or another company), please contact the admin team for case-by-case assessment. Exceptions may be granted if the post adds value to the community.</p></details>
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer>
      <div className="footer-container">
        <div className="footer-brand">ZATech</div>
        
        <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#faqs">FAQs</a>
        <a href="https://wiki.zatech.co.za" target="_blank" rel="noreferrer">Wiki</a>
        <a href="https://zatech.co.za/coc" target="_blank" rel="noreferrer">Code of Conduct</a>
        </nav>
        
        <div className="footer-socials">
          <a href="https://www.youtube.com/@zatechslack2072" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/zatech-slack/about/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}
