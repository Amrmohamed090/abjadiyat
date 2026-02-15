import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Input, Button } from '../../components/ui';
import { useStore } from '../../store/useStore';

export function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/success');
  };

  return (
    <AuthLayout
      title='مرحباً بك <span class="text-accent-gold">مجدداً</span>'
      subtitle="أكمل رحلتك في طلب العلم الشرعي"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="البريد الإلكتروني"
          type="email"
          icon="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="كلمة المرور"
          type="password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-accent-gold focus:ring-accent-gold border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="mr-2 block text-gray-600 select-none">
              تذكرني
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="font-medium text-accent-gold hover:text-secondary transition-colors"
          >
            نسيت كلمة المرور؟
          </Link>
        </div>

        <Button type="submit" fullWidth size="lg" icon="login" disabled={isLoading}>
          {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </Button>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e5dcc5]" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-background-light text-gray-500 font-medium">
            أو سجل الدخول عبر
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center px-4 py-3 border border-[#e5dcc5] rounded-xl shadow-sm bg-white hover:bg-gray-50 hover:border-accent-gold/50 transition-all group">
          <svg className="h-5 w-5 ml-2" viewBox="0 0 24 24">
            <path
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              fill="#4285F4"
            />
          </svg>
          <span className="text-sm font-medium text-gray-600 group-hover:text-secondary">
            Google
          </span>
        </button>
        <button className="flex items-center justify-center px-4 py-3 border border-[#e5dcc5] rounded-xl shadow-sm bg-white hover:bg-gray-50 hover:border-accent-gold/50 transition-all group">
          <svg className="h-5 w-5 ml-2" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-sm font-medium text-gray-600 group-hover:text-secondary">
            Facebook
          </span>
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        ليس لديك حساب؟{' '}
        <Link to="/register" className="font-bold text-secondary hover:text-accent-gold transition-colors">
          سجل حساب جديد
        </Link>
      </p>
    </AuthLayout>
  );
}
