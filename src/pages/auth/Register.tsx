import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Input, Button, Icon } from '../../components/ui';
import { useStore } from '../../store/useStore';
import { countries, ageGroups, interests } from '../../data/mockData';

export function RegisterPage() {
  const navigate = useNavigate();
  const { registration, updateRegistrationData, setRegistrationStep, completeRegistration, isLoading } = useStore();
  const { currentStep, data } = registration;

  // Step 1 state
  const [fullName, setFullName] = useState(data.fullName || '');
  const [email, setEmail] = useState(data.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(data.acceptTerms || false);

  // Step 2 state
  const [country, setCountry] = useState(data.country || '');
  const [ageGroup, setAgeGroup] = useState(data.ageGroup || '');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>(data.level || 'beginner');

  // Step 3 state
  const [selectedInterests, setSelectedInterests] = useState<string[]>(data.interests || ['quran']);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRegistrationData({ fullName, email, password, confirmPassword, acceptTerms });
    setRegistrationStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRegistrationData({ country, ageGroup, level });
    setRegistrationStep(3);
  };

  const handleStep3Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateRegistrationData({ interests: selectedInterests });
    await completeRegistration();
    navigate('/success');
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const renderStep1 = () => (
    <form className="space-y-5" onSubmit={handleStep1Submit}>
      <Input
        label="الاسم الكامل"
        type="text"
        icon="person"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

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

      <Input
        label="تأكيد كلمة المرور"
        type="password"
        icon="lock_reset"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <div className="flex items-center text-sm mt-2">
        <input
          type="checkbox"
          id="terms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="h-4 w-4 text-accent-gold focus:ring-accent-gold border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="mr-2 block text-gray-600 select-none">
          أوافق على{' '}
          <Link to="/terms" className="text-accent-gold underline hover:text-secondary">
            شروط الخدمة
          </Link>{' '}
          و{' '}
          <Link to="/privacy" className="text-accent-gold underline hover:text-secondary">
            سياسة الخصوصية
          </Link>
        </label>
      </div>

      <Button type="submit" fullWidth size="lg" icon="arrow_right_alt" className="mt-2">
        إنشاء حساب
      </Button>
    </form>
  );

  const renderStep2 = () => (
    <form className="space-y-6" onSubmit={handleStep2Submit}>
      {/* Progress indicator */}
      <div className="mb-8 flex flex-col items-center">
        <span className="text-sm font-medium text-accent-gold mb-2">الخطوة 2 من 3</span>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-accent-gold w-2/3 rounded-full" />
        </div>
      </div>

      {/* Country Select */}
      <div className="islamic-input-wrapper group">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <Icon name="public" className="text-gray-400 group-focus-within:text-accent-gold transition-colors" />
          </div>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="block w-full pr-12 pl-10 py-3.5 bg-white border border-[#e5dcc5] rounded-xl text-secondary appearance-none focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all shadow-sm cursor-pointer"
          >
            <option value="" disabled>اختر الدولة</option>
            {countries.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="expand_more" className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Age Group Select */}
      <div className="islamic-input-wrapper group">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <Icon name="cake" className="text-gray-400 group-focus-within:text-accent-gold transition-colors" />
          </div>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
            className="block w-full pr-12 pl-10 py-3.5 bg-white border border-[#e5dcc5] rounded-xl text-secondary appearance-none focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all shadow-sm cursor-pointer"
          >
            <option value="" disabled>اختر الفئة العمرية</option>
            {ageGroups.map((ag) => (
              <option key={ag.value} value={ag.value}>{ag.label}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="expand_more" className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Level Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3 pr-1">
          المستوى التعليمي الحالي
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
            <label key={lvl} className="cursor-pointer level-chip relative">
              <input
                type="radio"
                name="level"
                value={lvl}
                checked={level === lvl}
                onChange={() => setLevel(lvl)}
                className="sr-only"
              />
              <div className="w-full py-3 px-2 border border-[#e5dcc5] rounded-xl text-center text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-full">
                <Icon
                  name={lvl === 'beginner' ? 'spa' : lvl === 'intermediate' ? 'school' : 'auto_stories'}
                  className="text-lg"
                />
                <span>{lvl === 'beginner' ? 'مبتدئ' : lvl === 'intermediate' ? 'متوسط' : 'متقدم'}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <Button type="submit" fullWidth size="lg" icon="arrow_right_alt" className="mt-8">
        التالي
      </Button>
    </form>
  );

  const renderStep3 = () => (
    <form className="space-y-6" onSubmit={handleStep3Submit}>
      {/* Progress indicator */}
      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#e5dcc5] shadow-sm w-fit mx-auto">
        <span className="text-xs font-bold text-secondary">الخطوة 3 من 3</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-accent-gold" />
          <div className="w-2 h-2 rounded-full bg-accent-gold" />
          <div className="w-2 h-2 rounded-full bg-accent-gold" />
        </div>
      </div>

      {/* Interests Grid */}
      <div className="grid grid-cols-2 gap-4">
        {interests.map((interest) => (
          <div key={interest.id} className={interest.id === 'history' ? 'col-span-2' : ''}>
            <input
              type="checkbox"
              id={`interest-${interest.id}`}
              checked={selectedInterests.includes(interest.id)}
              onChange={() => toggleInterest(interest.id)}
              className="interest-checkbox absolute opacity-0 w-0 h-0"
            />
            <label
              htmlFor={`interest-${interest.id}`}
              className={`cursor-pointer flex ${interest.id === 'history' ? 'flex-row gap-4' : 'flex-col'} items-center justify-center p-4 rounded-2xl border border-[#e5dcc5] bg-white hover:border-accent-gold/60 transition-all duration-300 shadow-sm h-full group ${
                selectedInterests.includes(interest.id)
                  ? 'bg-primary border-primary text-secondary'
                  : ''
              }`}
            >
              <div
                className={`icon-box w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors shrink-0 ${
                  selectedInterests.includes(interest.id)
                    ? 'bg-white/40 text-secondary'
                    : 'bg-secondary/5 text-secondary'
                }`}
                style={{ marginBottom: interest.id === 'history' ? 0 : undefined }}
              >
                <Icon name={interest.icon} className="text-2xl" />
              </div>
              <span className="font-display font-bold text-lg text-center">{interest.label}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button type="submit" fullWidth size="lg" icon="check_circle" disabled={isLoading}>
          {isLoading ? 'جاري إكمال التسجيل...' : 'إكمال التسجيل'}
        </Button>
        <button
          type="button"
          onClick={() => navigate('/success')}
          className="w-full mt-3 py-3 text-sm text-gray-500 hover:text-secondary transition-colors font-medium"
        >
          تخطي هذه الخطوة
        </button>
      </div>
    </form>
  );

  const titles = {
    1: 'انضم إلى <span class="text-accent-gold">رحلة المعرفة</span>',
    2: 'أخبرنا <span class="text-accent-gold">المزيد عنك</span>',
    3: 'ما هي <span class="text-accent-gold">اهتماماتك؟</span>',
  };

  const subtitles = {
    1: 'أنشئ حسابك الجديد وابدأ التعلم',
    2: 'لتهيئة تجربة تعليمية تناسب احتياجاتك',
    3: 'اختر الموضوعات التي تود التركيز عليها في رحلتك',
  };

  return (
    <AuthLayout
      title={titles[currentStep as keyof typeof titles]}
      subtitle={subtitles[currentStep as keyof typeof subtitles]}
      backLinkText={currentStep > 1 ? 'العودة' : 'العودة للرئيسية'}
      backLinkTo={currentStep > 1 ? '#' : '/'}
      showBackLink
      sideImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAIG-X11qo6AVUIJczGSROQxcGgqngUcyTCRZaOGCkI5rFWCxcB_-9TRlzIyxQ5quDrRM-saln_C-EYFBlYgC7CfJSM1bj_o7kFOPk2OoFHfMPGR9ZOk7pnmGhQSG_8OBVS0fjJu1HZOJKmFCEf9NZoXBi9KzuR_sTIbYIB5YLkFslTZMec9-nZR11NV4dZP4gUi25I2OBNp9CvxvH_iPY9hzETOFnRJfoJqbDe0xyjsLIrhCn4V48DwegEKiGhFIeLMuxE7eOtQghm"
      sideTitle={currentStep === 3 ? 'ابدأ رحلة التميز معنا' : 'اكتشف كنوز المعرفة الإسلامية'}
    >
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}

      {currentStep === 1 && (
        <>
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5dcc5]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background-light text-gray-500 font-medium">أو سجل عبر</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
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

          <p className="mt-8 text-center text-sm text-gray-500 mb-8 lg:mb-0">
            لديك حساب بالفعل؟{' '}
            <Link
              to="/login"
              className="font-bold text-secondary hover:text-accent-gold transition-colors"
            >
              تسجيل الدخول
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  );
}
