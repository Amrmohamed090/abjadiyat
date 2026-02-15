import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, Icon, Button } from '../../components/ui';

export function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      dir="rtl"
      className="bg-gradient-to-b from-background-light to-[#f7f3e8] font-body antialiased min-h-screen flex flex-col overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-100 pointer-events-none z-0" />

      {/* Corner Ornaments */}
      <div className="corner-ornament top-0 left-0 transform rotate-0" />
      <div className="corner-ornament top-0 right-0 transform rotate-90" />
      <div className="corner-ornament bottom-0 right-0 transform rotate-180" />
      <div className="corner-ornament bottom-0 left-0 transform -rotate-90" />

      {/* Header */}
      <header className="w-full p-8 flex justify-center items-center relative z-20">
        <Logo size="lg" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8 relative z-10">
        <div className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-[32px] shadow-gold-lg border border-[#e5dcc5] p-10 md:p-14 text-center relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-islamic-pattern opacity-30" />

          {/* Top decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

          {/* Mihrab Frame */}
          <div className="mihrab-frame w-full max-w-[260px] mx-auto mb-10 pt-10 pb-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#fbf8ee] to-white/50 shadow-inner relative z-10">
            <div className="w-24 h-24 mb-6 rounded-full bg-green-50 flex items-center justify-center relative shadow-sm mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-200 animate-spin" style={{ animationDuration: '10s' }} />
              <Icon name="check_circle" className="text-6xl text-green-600 drop-shadow-sm" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-3">
              تم التسجيل <span className="text-accent-gold">بنجاح!</span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg font-body leading-relaxed mb-8 max-w-sm mx-auto relative z-10">
            مرحباً بك في رحلة العلم، <br />
            <span className="text-sm text-gray-500 mt-2 block">
              جارٍ تحويلك إلى لوحة التحكم...
            </span>
          </p>

          {/* Progress Bar */}
          <div className="w-full max-w-xs mx-auto relative h-2 bg-gray-100/80 rounded-full overflow-hidden mb-8 shadow-inner border border-gray-100">
            <div className="absolute top-0 right-0 h-full bg-primary animate-progress rounded-full w-1/3 shadow-[0_0_10px_rgba(255,223,82,0.6)]" />
          </div>

          <div className="space-y-4 relative z-10 max-w-xs mx-auto">
            <Button
              fullWidth
              size="lg"
              icon="arrow_right_alt"
              onClick={() => navigate('/dashboard')}
            >
              الانتقال إلى لوحة التحكم
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center relative z-10">
          <p className="text-sm text-secondary/60 font-body">
            © {new Date().getFullYear()} أبجديات. جميع الحقوق محفوظة.
          </p>
        </div>
      </main>
    </div>
  );
}
