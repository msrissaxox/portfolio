import Contact from './Contact';
import ContactTitle from './ContactTitle';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/nav/footer/Footer';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <ContactTitle />
      <Contact />
      <Footer authorName={'Marissa Lamothe'} />

      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Marissa Lamothe",
            "url": "https://www.marissalamothe.dev",
            "jobTitle": "Software Engineer",
            "knowsAbout": ["JavaScript", "React", "Next.js", "TypeScript", "Node.js", 
                          "Express.js", "MongoDB", "SQL", "AWS", "Git", "GitHub", 
                          "Vercel", "Netlify", "TailwindCSS"],
            "seeks": {
              "@type": "JobPosting",
              "description": "Available for software engineering roles",
              "skills": "JavaScript, React, TypeScript, Node.js, Express, Next.js, MongoDB, SQL, AWS"
            }
          })
        }}
      />

    </div>
  );
}
