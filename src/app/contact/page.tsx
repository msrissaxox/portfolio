import Contact from './Contact';
import ContactTitle from './ContactTitle';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/nav/footer/Footer';

export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <ContactTitle />
      <Contact />
      <Footer authorName={'Marissa Lamothe'} />
    </div>
  );
}
