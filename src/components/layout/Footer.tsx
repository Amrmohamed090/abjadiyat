import { Link } from 'react-router-dom';
import { Icon } from '../ui';

export function Footer() {
  return (
    <footer className="bg-background-dark pt-16 pb-8 border-t border-[#2a4034]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary-light flex items-center justify-center text-primary border border-secondary">
                <Icon name="mosque" className="text-2xl" />
              </div>
              <span className="font-display font-bold text-2xl text-white">أبجديات</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body">
              منصة تعليمية إسلامية رائدة تسعى لنشر العلم الشرعي الأصيل بأسلوب عصري وميسر.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Icon name="smart_display" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Icon name="alternate_email" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-primary font-display font-bold mb-6">المنصة</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  عن أبجديات
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="hover:text-white transition-colors">
                  المعلمون
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  الدورات
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-primary font-display font-bold mb-6">المساعدة</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  مركز المساعدة
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary font-display font-bold mb-6">النشرة البريدية</h4>
            <p className="text-gray-400 text-sm mb-4 font-body">
              اشترك ليصلك جديد الدورات والمقالات.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-[#1f352b] border border-[#2a4034] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm placeholder-gray-500 font-body"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-4 rounded-lg transition-colors font-body text-sm"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a4034] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
          <p className="text-gray-500 text-sm font-body">
            © {new Date().getFullYear()} أبجديات. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-body">
            <Link to="/privacy" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              ملفات تعريف الارتباط
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
