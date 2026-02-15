import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, Icon, Button } from '../ui';
import { useStore } from '../../store/useStore';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'الرئيسية', href: '/' },
  { label: 'تصفح الدورات', href: '/courses' },
  { label: 'المعلمون', href: '/instructors' },
  { label: 'المدونة', href: '/blog' },
  { label: 'عن أبجديات', href: '/about' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-[#fffefc]/95 backdrop-blur-md border-b border-[#e5dcc5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body font-medium text-base transition-colors ${
                  location.pathname === link.href
                    ? 'text-secondary'
                    : 'text-gray-600 hover:text-accent-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-secondary hover:text-accent-gold transition-colors"
                >
                  <img
                    src={user?.avatar || 'https://via.placeholder.com/40'}
                    alt={user?.fullName}
                    className="w-10 h-10 rounded-full border-2 border-accent-gold/20"
                  />
                  <span className="font-medium">{user?.fullName}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Icon name="logout" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block">
                <Button variant="secondary" size="sm">
                  تسجيل الدخول
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-secondary hover:bg-gray-100 rounded-lg"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5dcc5] py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body font-medium text-base py-2 ${
                    location.pathname === link.href
                      ? 'text-secondary'
                      : 'text-gray-600 hover:text-accent-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#e5dcc5]">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={user?.avatar || 'https://via.placeholder.com/40'}
                        alt={user?.fullName}
                        className="w-10 h-10 rounded-full border-2 border-accent-gold/20"
                      />
                      <span className="font-medium">{user?.fullName}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-red-500"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                ) : (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="secondary" fullWidth>
                      تسجيل الدخول
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
