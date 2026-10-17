import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [causesDropdownOpen, setCausesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCausesDropdownOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCausesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const causesList = [
    {
      title: 'ANBU SCHOLARSHIP',
      path: '/programs/anbu-scholarship',
      desc: '10,000+ higher education scholarships with premier universities'
    },
    {
      title: 'INCLUSIVE EDUCATION',
      path: '/programs/inclusive-education',
      desc: 'Equal learning opportunities, assistive learning & mentorship'
    },
    {
      title: 'SCHOOL SUPPORTING PROGRAMS',
      path: '/programs/school-supporting-programs',
      desc: 'Smart classrooms, libraries, sanitation & school adoption'
    },
    {
      title: 'RURAL DEVELOPMENT',
      path: '/programs/rural-development',
      desc: 'Village adoption, solar lighting, clean water & sustainable hamlets'
    },
    {
      title: 'JOY OF GIVING',
      path: '/programs/joy-of-giving',
      desc: 'Dignity nutrition drives, winter warmth & compassionate aid'
    },
    {
      title: 'SKILL DEVELOPMENT',
      path: '/programs/skill-development',
      desc: 'Vocational training, tailoring, computer skills & women SHGs'
    }
  ];

  const searchIndex = [
    { title: 'ANBU SCHOLARSHIP', category: 'Initiative', path: '/programs/anbu-scholarship' },
    { title: 'INCLUSIVE EDUCATION', category: 'Initiative', path: '/programs/inclusive-education' },
    { title: 'SCHOOL SUPPORTING PROGRAMS', category: 'Initiative', path: '/programs/school-supporting-programs' },
    { title: 'RURAL DEVELOPMENT', category: 'Initiative', path: '/programs/rural-development' },
    { title: 'JOY OF GIVING', category: 'Initiative', path: '/programs/joy-of-giving' },
    { title: 'SKILL DEVELOPMENT', category: 'Initiative', path: '/programs/skill-development' },
    { title: 'Success Stories', category: 'Beneficiaries & Impact', path: '/impact' },
    { title: 'Our Story & 20 Years Journey', category: 'About Us', path: '/our-story' },
    { title: 'Thalapathy Vijay Civic Honor', category: 'Recognition', path: '/stories' },
    { title: '20 Years of ANBU Celebration', category: 'Anniversary Milestone', path: '/stories' },
    { title: 'Volunteer Registration', category: 'Get Involved', path: '/volunteer' },
    { title: 'Donate to ANBU Foundation', category: 'Donation', path: '/donate' },
    { title: 'Contact Office & Helpdesk', category: 'Contact', path: '/contact' }
  ];

  const filteredSearch = searchQuery.trim() === ''
    ? []
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchSelect = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const isCausesActive = location.pathname.startsWith('/programs');
  const isWhiteNavText = isHomePage && !isScrolled;
  const defaultNavTextColor = isWhiteNavText ? '#FFFFFF' : 'var(--color-sunset-dark)';

  const getNavLinkStyle = (isActive: boolean) => ({
    fontSize: '0.96rem',
    fontWeight: isActive ? 700 : 600,
    color: isActive ? 'var(--color-sunset-orange)' : defaultNavTextColor,
    position: 'relative' as const,
    padding: '0.5rem 0.15rem',
    textDecoration: 'none',
    textShadow: isWhiteNavText && !isActive ? '0 1px 4px rgba(0, 0, 0, 0.45)' : 'none',
    transition: 'color 0.2s ease'
  });

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: (!isHomePage || isScrolled) 
            ? 'rgba(255, 251, 246, 0.98)' 
            : 'transparent',
          backdropFilter: (!isHomePage || isScrolled) ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: (!isHomePage || isScrolled) ? 'blur(16px)' : 'none',
          borderBottom: (!isHomePage || isScrolled) 
            ? '1px solid rgba(244, 90, 36, 0.16)' 
            : 'none',
          boxShadow: (!isHomePage || isScrolled)
            ? '0 6px 24px rgba(43, 22, 15, 0.08)'
            : 'none',
          transition: 'all 0.3s ease',
          height: (isHomePage && !isScrolled) ? '92px' : '76px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Left: Official ANBU Foundation Logo (Clean Transparent PNG) */}
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              flexShrink: 0
            }}
            aria-label="ANBU Foundation Home"
          >
            <img
              src={isHomePage && !isScrolled ? "/images/logo-white.png" : "/images/logo.png"}
              alt="ANBU Foundation"
              style={{
                height: (isHomePage && !isScrolled) ? 'clamp(66px, 6vw, 78px)' : '54px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
          </Link>

          {/* Center: Exact Navigation Links from Reference Design */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(1.2rem, 2.2vw, 2.2rem)'
            }}
            className="navbar-desktop-nav"
            aria-label="Primary Navigation"
          >
            {/* 1. Home */}
            <NavLink
              to="/"
              end
              className="navbar-nav-link"
              style={({ isActive }) => getNavLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-sunset-orange)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 2. About Us */}
            <NavLink
              to="/our-story"
              className="navbar-nav-link"
              style={({ isActive }) => getNavLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  <span>About Us</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-sunset-orange)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 3. Our Causes with Dropdown Chevron ⌵ */}
            <div
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setCausesDropdownOpen(true)}
              onMouseLeave={() => setCausesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCausesDropdownOpen(!causesDropdownOpen)}
                className="navbar-nav-link"
                style={{
                  ...getNavLinkStyle(isCausesActive),
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
                aria-expanded={causesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Initiatives</span>
                <ChevronDown
                  size={15}
                  style={{
                    transform: causesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: 'inherit'
                  }}
                />
              </button>

              {/* Causes Dropdown Menu */}
              <AnimatePresence>
                {causesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-2rem',
                      width: '320px',
                      backgroundColor: 'rgba(255, 251, 246, 0.98)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '0.85rem',
                      boxShadow: '0 16px 40px rgba(43, 22, 15, 0.16)',
                      border: '1.5px solid rgba(244, 90, 36, 0.22)',
                      zIndex: 1050
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {causesList.map((cause) => (
                        <Link
                          key={cause.path}
                          to={cause.path}
                          onClick={() => setCausesDropdownOpen(false)}
                          style={{
                            padding: '0.65rem 0.85rem',
                            borderRadius: 'var(--radius-md)',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.2rem',
                            transition: 'background-color 0.2s ease'
                          }}
                          className="causes-dropdown-item"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                              {cause.title}
                            </span>
                          </div>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                              {cause.desc}
                          </span>
                        </Link>
                      ))}

                      <div style={{ height: '1px', backgroundColor: 'rgba(244, 90, 36, 0.15)', margin: '0.35rem 0' }} />

                      <Link
                        to="/programs"
                        onClick={() => setCausesDropdownOpen(false)}
                        style={{
                          padding: '0.5rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: 'var(--color-sunset-orange)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none'
                        }}
                        className="causes-dropdown-item"
                      >
                        <span>View All Initiatives</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Success Stories */}
            <NavLink
              to="/impact"
              className="navbar-nav-link"
              style={({ isActive }) => getNavLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  <span>Success Stories</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-sunset-orange)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 5. Gallery */}
            <NavLink
              to="/stories"
              className="navbar-nav-link"
              style={({ isActive }) => getNavLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  <span>Gallery</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-sunset-orange)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 6. Contact */}
            <NavLink
              to="/contact"
              className="navbar-nav-link"
              style={({ isActive }) => getNavLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--color-sunset-orange)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Right: Search Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Search Trigger Icon Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search causes and stories"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: defaultNavTextColor,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent'
              }}
              className="navbar-search-btn"
            >
              <Search size={19} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(43, 22, 15, 0.15)',
                backgroundColor: 'rgba(255, 244, 229, 0.9)',
                color: 'var(--color-sunset-dark)',
                cursor: 'pointer'
              }}
              className="navbar-mobile-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Search Modal Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(43, 22, 15, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '100px',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '640px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
                border: '1.5px solid rgba(244, 90, 36, 0.3)'
              }}
            >
              {/* Search Input Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid rgba(43, 22, 15, 0.1)',
                  gap: '0.85rem'
                }}
              >
                <Search size={22} color="var(--color-sunset-orange)" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search causes, scholarships, success stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.1rem',
                    color: 'var(--color-sunset-dark)',
                    backgroundColor: 'transparent'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    padding: '4px'
                  }}
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Suggestions & Results */}
              <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '1rem 1.5rem' }}>
                {searchQuery.trim() === '' ? (
                  <div>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '0.06em' }}>
                      Popular Searches
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                      {['Scholarships', 'Bright Minds', 'Caring Hands', 'Vijay Award', 'Volunteer', 'Donate'].map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSearchQuery(tag)}
                          style={{
                            padding: '0.4rem 0.85rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(244, 90, 36, 0.2)',
                            backgroundColor: 'var(--color-sunset-cream)',
                            color: 'var(--color-sunset-dark)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filteredSearch.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredSearch.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSearchSelect(item.path)}
                        style={{
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          backgroundColor: 'var(--color-sunset-cream)',
                          transition: 'background-color 0.2s ease'
                        }}
                        className="search-result-item"
                      >
                        <div>
                          <span style={{ fontSize: '0.78rem', color: 'var(--color-sunset-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                            {item.category}
                          </span>
                          <h4 style={{ fontSize: '1.02rem', margin: 0, color: 'var(--color-sunset-dark)' }}>
                            {item.title}
                          </h4>
                        </div>
                        <ArrowRight size={16} color="var(--color-sunset-orange)" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)' }}>
                    <p style={{ margin: 0 }}>No direct results found for "{searchQuery}".</p>
                    <Link
                      to="/programs"
                      onClick={() => setSearchOpen(false)}
                      style={{ color: 'var(--color-sunset-orange)', fontWeight: 700, fontSize: '0.94rem', display: 'inline-block', marginTop: '0.5rem' }}
                    >
                      Browse all causes & programs →
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '76px',
              left: 0,
              right: 0,
              zIndex: 999,
              backgroundColor: 'rgba(255, 251, 246, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              boxShadow: '0 15px 35px rgba(43, 22, 15, 0.15)',
              borderBottom: '2px solid rgba(244, 90, 36, 0.25)',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-sunset-orange)' : 'var(--color-sunset-dark)',
                  padding: '0.4rem 0'
                })}
              >
                Home
              </NavLink>

              <NavLink
                to="/our-story"
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-sunset-orange)' : 'var(--color-sunset-dark)',
                  padding: '0.4rem 0'
                })}
              >
                About Us
              </NavLink>

              {/* Mobile Our Causes with expandable items */}
              <div>
                <button
                  type="button"
                  onClick={() => setCausesDropdownOpen(!causesDropdownOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--color-sunset-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.4rem 0'
                  }}
                >
                  <span>Initiatives</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: causesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>

                <AnimatePresence>
                  {causesDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{
                        paddingLeft: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                        marginTop: '0.5rem',
                        overflow: 'hidden'
                      }}
                    >
                      {causesList.map((cause) => (
                        <Link
                          key={cause.path}
                          to={cause.path}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            fontSize: '0.94rem',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none'
                          }}
                        >
                          • {cause.title}
                        </Link>
                      ))}
                      <Link
                        to="/programs"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.94rem',
                          fontWeight: 700,
                          color: 'var(--color-sunset-orange)',
                          textDecoration: 'none'
                        }}
                      >
                        View All Initiatives →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/impact"
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-sunset-orange)' : 'var(--color-sunset-dark)',
                  padding: '0.4rem 0'
                })}
              >
                Success Stories
              </NavLink>

              <NavLink
                to="/stories"
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-sunset-orange)' : 'var(--color-sunset-dark)',
                  padding: '0.4rem 0'
                })}
              >
                Gallery
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-sunset-orange)' : 'var(--color-sunset-dark)',
                  padding: '0.4rem 0'
                })}
              >
                Contact
              </NavLink>

              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link
                  to="/volunteer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Volunteer Registration</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-desktop-nav {
          display: none;
        }
        .navbar-mobile-toggle {
          display: flex;
        }
        .navbar-nav-link {
          transition: color 0.2s ease;
        }
        .navbar-nav-link:hover {
          color: var(--color-sunset-orange) !important;
        }
        .causes-dropdown-item:hover {
          background-color: rgba(244, 90, 36, 0.1);
        }
        .navbar-search-btn:hover {
          background-color: rgba(244, 90, 36, 0.12) !important;
          color: var(--color-sunset-orange) !important;
        }
        .navbar-donate-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(244, 90, 36, 0.5) !important;
        }
        .search-result-item:hover {
          background-color: rgba(255, 208, 155, 0.4) !important;
        }

        @media (min-width: 992px) {
          .navbar-desktop-nav {
            display: flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
