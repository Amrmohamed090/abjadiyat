import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Logo, Icon } from '../ui';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showBackLink?: boolean;
  backLinkText?: string;
  backLinkTo?: string;
  sideImage?: string;
  sideTitle?: string;
  sideDescription?: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  showBackLink = true,
  backLinkText = 'العودة للرئيسية',
  backLinkTo = '/',
  sideImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCglbxzXfsEwSA5AqsDD0luRpeDUkYD50CESL_0PnRUrdL-aMKxBr7ESHuyBXF5M7FjzUWFb8xcUQMi7I2JoacBvtufD_FgAycKlTCh2sJ6jpVvPNOo9aa8UisOfh_EzPRB5GdThV63_Xcq42JpHEdtEab-Qp52aUFatmr4s9e57dvI3bRNDWrqNCwJJ63JtBV941XCJITYe0cE_KQb7UHwD9ZoLtYmk4VlMWugvPi0QMTJ1IoLy50RV8cMcua_Rh9MhstrSt7IqJVs',
  sideTitle = 'اكتشف كنوز المعرفة الإسلامية',
  sideDescription = 'انضم إلى آلاف الطلاب واستمتع بتجربة تعليمية فريدة تجمع بين أصالة المنهج وحداثة الوسيلة، مع نخبة من العلماء المتخصصين.',
}: AuthLayoutProps) {
  return (
    <div
      dir="rtl"
      className="bg-background-light font-body antialiased bg-islamic-pattern min-h-screen lg:h-screen flex flex-col lg:flex-row lg:overflow-hidden"
    >
      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center items-center px-4 py-6 sm:p-8 lg:p-16 relative z-10 bg-background-light/95 backdrop-blur-sm shadow-2xl lg:shadow-none lg:h-full lg:overflow-y-auto">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6 lg:absolute lg:top-0 lg:right-0 lg:p-8">
          <Logo />
          {showBackLink && (
            <Link
              to={backLinkTo}
              className="text-secondary hover:text-accent-gold transition-colors font-medium text-sm flex items-center gap-1"
            >
              <Icon name="arrow_forward" className="text-base" />
              {backLinkText}
            </Link>
          )}
        </div>

        {/* Content */}
        <div className="w-full max-w-md">
          <div className="text-center mb-6 lg:mb-10">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-secondary mb-3 lg:mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-gray-500 text-base lg:text-lg">{subtitle}</p>
          </div>
          {children}
        </div>

        {/* Footer */}
        <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 text-center">
          <p className="text-xs text-gray-400 font-body">
            © {new Date().getFullYear()} أبجديات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-secondary" style={{ borderTopRightRadius: '12rem' }}>
        <div className="absolute inset-0 z-0">
          <img
            src={sideImage}
            alt="Islamic Architecture"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,223,82,0.15),_transparent_70%)]" />
        </div>

        <div className="absolute inset-0 bg-arabesque-dark opacity-10 pointer-events-none z-10" style={{ backgroundSize: '100px' }} />

        <div className="absolute bottom-0 left-0 right-0 p-16 z-20 text-white">
          <div className="max-w-md">
            <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
            <h2 className="text-4xl font-bold font-display mb-4 leading-normal drop-shadow-md">
              {sideTitle.split(' ').slice(0, 2).join(' ')} <br />
              {sideTitle.split(' ').slice(2).join(' ')}
            </h2>
            <p className="text-gray-200 text-lg font-body leading-relaxed mb-8 text-justify">
              {sideDescription}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3 space-x-reverse">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqAKjJL5hJUc5nGUVrgCo54NRl0PtaBFZgl5Zu_MReJc7_YJfAg54qRZHnTmd2z9UInlboyaN-FL3LYuGIY1O0qjCQX6OPsxeeGgVyxnh_aZF8b1WKvHbsW-NJY8A0lkYNehJ58Bi2K8uPIpi_t4Ifh0scugcQ9v4vtj0glvMhtcnhU5xnCRfyviznx0847SIq8Va2O-fUk3gB5LCqeYuQ6AU5c8_oG8PRxhDOXp2IyzI1nbEjs7dfjUZktcCx_o6Ne5AScgcOWP6q"
                  className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                  alt="Student"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKnAjsECgibspfHxmE2PmwszBWAp_HU2I11EmDXeuMB7lbtZEaBFxUXX9QhVDzABPU_c0Fst2sN073lRLBBRu2dFfD5QxOjUPCgeBB4ksimbgHtPo1Zewi8Zs9EYKL13LAQ9FE1UO_ivZU-5Mg7La8UR-5lMQKOh0GKQa8c6d7IlMJH1LzkZ8JyYRQkB9DfBgyPfahve6dIMGKkyWuVIDFVQKpg0swFWfnkgp4cFlvX2kZSJLcnGCwwt-gsADVrj2PcjWX2P-XP-lz"
                  className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                  alt="Student"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMl1yYvg0c_q6v7QOObcLRDtkuKXlC-UDuSudqc4gJ_0OcF24_icUSa_ZKKZZubNaxsqD4EXOYBUvsINVJs6hatW0OQSxughySmSXWMsDDpedVr8gzip-rt2jbu0rKMwFG7aVu5aMs4vu7CyrCSh3bs5qCX3vmxNcryVZr5TEbTMIlY3hLA4goU07khpNli3IfqKBXj2LVYuJvoNngBhunwFTOVqlCpWj3bas5sTsRpQUKzEx8I4zXqck6byAq2_3tgGYAg__VjtKA"
                  className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                  alt="Student"
                />
              </div>
              <div className="text-sm">
                <p className="font-bold text-primary">+5000 طالب</p>
                <p className="text-gray-300 text-xs">يثقون في أبجديات</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 border-[16px] border-secondary/20 pointer-events-none z-20" />
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl pointer-events-none z-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl pointer-events-none z-20" />
      </div>
    </div>
  );
}
