import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#about' },
  { label: 'Valor', href: '#value' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Formação', href: '#education' },
  { label: 'Método', href: '#process' }
];

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 100, 
        display: 'flex', 
        justifyContent: 'center', 
        pointerEvents: 'none' // Ensures the wrapper doesn't block clicks on the page
      }}>
        <motion.header
          initial={false}
          animate={{
            y: isScrolled ? 24 : 0,
            width: isScrolled ? 'fit-content' : '100%',
            borderRadius: isScrolled ? '40px' : '0px',
            border: isScrolled ? 'var(--border-width) solid var(--color-dark)' : 'var(--border-width) solid transparent',
            borderBottom: 'var(--border-width) solid var(--color-dark)',
            boxShadow: isScrolled ? 'var(--shadow-brutalist)' : 'none',
            padding: isScrolled ? '12px 32px' : '24px 24px',
            backgroundColor: 'var(--color-white)'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ 
            pointerEvents: 'auto', // Re-enable clicks for the header itself
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: isScrolled ? 'calc(100% - 32px)' : '1200px',
            margin: '0 auto',
            overflow: 'hidden'
          }}
        >
          {/* Desktop Nav */}
          <nav className={styles.nav} style={{ margin: 0, gap: isScrolled ? '16px' : '32px', transition: 'gap 0.3s' }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={{ fontWeight: 600, color: 'var(--color-dark)', textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.header>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className={styles.mobileNav}>
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
