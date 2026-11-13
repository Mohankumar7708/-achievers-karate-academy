
import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '910000000000'; // Replace with academy number

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Achievers Karate Academy! I would like to know more about your karate training programs.'
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="Contact Achievers Karate Academy on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
        <span>ENQUIRE NOW</span>
      </button>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={21} />
      </button>
    </>
  );
}

export default FloatingActions;
