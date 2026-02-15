import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout';
import { Icon, Button } from '../../components/ui';
import { courses, courseModules } from '../../data/mockData';
import { useStore } from '../../store/useStore';

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id) || courses[0];
  const { toggleFavoriteCourse, courses: courseState } = useStore();
  const [openModules, setOpenModules] = useState<string[]>(['1']);

  const isFavorite = courseState.favoriteCourses.includes(course.id);
  const relatedCourses = courses.filter((c) => c.id !== course.id).slice(0, 2);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <MainLayout>
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
            <Link to="/" className="hover:text-accent-gold transition-colors">
              الرئيسية
            </Link>
            <Icon name="chevron_right" className="text-xs rotate-180" />
            <Link to="/courses" className="hover:text-accent-gold transition-colors">
              الدورات
            </Link>
            <Icon name="chevron_right" className="text-xs rotate-180" />
            <span className="text-secondary">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Hero */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-soft bg-secondary">
                <div className="absolute inset-0 z-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/90" />
                </div>
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-sm bg-secondary/10">
                  <div className="flex-1 text-center md:text-right order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-[#ffdf52] px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#ffdf52]/30 backdrop-blur-md">
                      <Icon name="stars" className="text-sm" />
                      دورة مميزة
                    </div>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-[#ffdf52] mb-4 leading-relaxed tracking-wide drop-shadow-md">
                      {course.title}
                    </h1>
                    <p className="text-white/90 text-lg font-light leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-white/80 text-sm">
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                        <Icon name="schedule" className="text-accent-gold" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                        <Icon name="signal_cellular_alt" className="text-accent-gold" />
                        <span>
                          {course.level === 'beginner'
                            ? 'مبتدئ'
                            : course.level === 'intermediate'
                            ? 'متوسط'
                            : course.level === 'advanced'
                            ? 'متقدم'
                            : 'عام'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                        <Icon name="translate" className="text-accent-gold" />
                        <span>العربية</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex-shrink-0 w-48 md:w-64 relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-b from-[#d4af37] to-[#8a7020] rounded-[100px_100px_0_0] opacity-80 shadow-lg" />
                    <div className="relative h-64 md:h-80 w-full arch-window overflow-hidden border-2 border-[#1a2e25] bg-secondary shadow-inner">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-[#d4af37] rounded-full shadow-lg" />
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-[#d4af37]/20 rounded-3xl m-2" />
              </div>

              {/* About Section */}
              <section className="bg-paper rounded-2xl border border-[#e5dcc5] p-6 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-gold transition-shadow duration-300">
                <div className="decorative-corner top-right" />
                <div className="decorative-corner top-left" />
                <h2 className="text-2xl font-display font-bold text-secondary mb-6 flex items-center gap-3 relative z-10">
                  <span className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <Icon name="info" className="text-accent-gold" />
                  </span>
                  <span className="gold-gradient-text">نبذة عن الدورة</span>
                </h2>
                <div className="prose prose-lg text-gray-700 leading-8 font-body relative z-10">
                  <p className="mb-4">
                    تعد هذه الدورة المدخل الأساسي لكل راغب في تحسين تلاوته للقرآن الكريم. نركز في
                    المستوى الأول على مخارج الحروف وصفاتها، وأحكام النون الساكنة والتنوين، والميم
                    الساكنة. يتميز المنهج بالتطبيق العملي المباشر مع تصحيح التلاوة.
                  </p>
                  <p>
                    سيتعلم الطالب كيفية النطق الصحيح للحروف العربية، والتمييز بين المتشابهات،
                    وتطبيق أحكام الغنة والقلقلة والمدود الأساسية. الدورة مصممة للمبتدئين ولا تتطلب
                    معرفة مسبقة بعلم التجويد النظري.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#e5dcc5]/40 relative z-10">
                  {[
                    { icon: 'school', label: 'مستوى مبتدئ', sub: 'لا يتطلب خبرة' },
                    { icon: 'language', label: 'اللغة العربية', sub: 'لغة الشرح' },
                    { icon: 'verified', label: 'شهادة إتمام', sub: 'معتمدة' },
                    { icon: 'all_inclusive', label: 'وصول دائم', sub: 'للمحتوى' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 bg-background-light rounded-xl border border-[#e5dcc5] hover:border-accent-gold/50 transition-colors"
                    >
                      <Icon name={item.icon} className="text-accent-gold text-3xl mb-3" />
                      <div className="font-bold text-secondary">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-secondary mb-4 flex items-center gap-3 px-2">
                  <span className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <Icon name="menu_book" className="text-accent-gold" />
                  </span>
                  <span className="gold-gradient-text">المنهج الدراسي</span>
                </h2>
                <div className="space-y-4">
                  {courseModules.map((module, idx) => (
                    <details
                      key={module.id}
                      open={openModules.includes(module.id)}
                      className="group bg-paper rounded-2xl border border-[#e5dcc5] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <summary
                        onClick={(e) => {
                          e.preventDefault();
                          toggleModule(module.id);
                        }}
                        className="flex items-center justify-between p-6 cursor-pointer bg-background-light hover:bg-[#fdfbf7] transition-colors select-none relative"
                      >
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 bg-accent-gold transition-opacity ${
                            openModules.includes(module.id) ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        <div className="flex items-center gap-5">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-display text-xl shadow-sm ${
                              idx === 0
                                ? 'bg-secondary text-[#ffdf52]'
                                : 'bg-white border border-[#e5dcc5] text-secondary'
                            }`}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-secondary mb-1">{module.title}</h3>
                            <span className="text-sm text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-100">
                              {module.lessonsCount} دروس • {module.duration}
                            </span>
                          </div>
                        </div>
                        <Icon
                          name="expand_more"
                          className={`text-gray-400 transition-transform duration-300 bg-white p-1 rounded-full border border-gray-100 shadow-sm ${
                            openModules.includes(module.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </summary>
                      <div className="p-6 border-t border-[#e5dcc5]/50 space-y-3 bg-white relative">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-islamic-pattern opacity-30 pointer-events-none" />
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/item border border-transparent hover:border-gray-100"
                          >
                            <div className="flex items-center gap-4">
                              <span
                                className={`p-2 rounded-full text-sm ${
                                  lesson.isLocked
                                    ? 'bg-gray-100 text-gray-400'
                                    : 'bg-accent-gold/10 text-accent-gold'
                                }`}
                              >
                                <Icon name={lesson.isLocked ? 'lock' : 'play_arrow'} />
                              </span>
                              <span
                                className={`font-medium group-hover/item:text-secondary transition-colors ${
                                  lesson.isLocked ? 'text-gray-500' : 'text-gray-700'
                                }`}
                              >
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-full">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Instructor Section */}
              <section className="bg-paper rounded-2xl border border-[#e5dcc5] p-6 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl -z-10" />
                <h2 className="text-2xl font-display font-bold text-secondary mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <Icon name="person" className="text-accent-gold" />
                  </span>
                  <span className="gold-gradient-text">عن المعلم</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative w-28 h-28 flex-shrink-0 group">
                    <div className="absolute inset-0 bg-accent-gold rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-full h-full object-cover rounded-full border-2 border-accent-gold shadow-md relative z-10 p-1 bg-white"
                    />
                    {course.instructor.credentials && (
                      <div className="absolute bottom-0 right-0 z-20 bg-secondary text-primary text-xs font-bold px-2 py-1 rounded-full border border-white shadow-sm">
                        مجاز
                      </div>
                    )}
                  </div>
                  <div className="text-center md:text-right flex-1">
                    <h3 className="text-xl font-bold text-secondary font-display mb-1">
                      {course.instructor.name}
                    </h3>
                    <p className="text-accent-gold font-medium text-sm mb-4 bg-accent-gold/5 inline-block px-3 py-1 rounded-full border border-accent-gold/10">
                      {course.instructor.credentials || course.instructor.title}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">{course.instructor.bio}</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-2">
                        <Icon name="school" className="text-accent-gold text-lg" />
                        {course.instructor.studentsCount} طالب
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="star" className="text-accent-gold text-lg" />
                        {course.instructor.rating} تقييم
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="play_circle" className="text-accent-gold text-lg" />
                        {course.instructor.coursesCount} دورة
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-paper rounded-2xl border border-[#e5dcc5] shadow-gold-lg p-6 sticky top-24 z-30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-gold/10 to-transparent rounded-bl-full -z-10" />

                {/* Video Preview */}
                <div className="relative w-full aspect-video bg-black/10 rounded-xl mb-6 overflow-hidden group cursor-pointer border border-[#e5dcc5] shadow-sm">
                  <img
                    src={course.image}
                    alt="Video Preview"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 text-accent-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <Icon name="play_arrow" className="text-4xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
                    مقدمة مجانية
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-6 bg-background-light p-4 rounded-xl border border-[#e5dcc5]/50">
                  <span className="text-4xl font-bold font-display text-secondary">
                    {course.price === 0 ? 'مجاني' : course.price}
                  </span>
                  {course.price > 0 && (
                    <span className="text-xl text-gray-500 font-bold mb-1">{course.currency}</span>
                  )}
                  {course.originalPrice && (
                    <div className="mr-auto flex flex-col items-end">
                      <span className="text-sm text-gray-400 line-through mb-1">
                        {course.originalPrice} {course.currency}
                      </span>
                      <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-100">
                        خصم {Math.round((1 - course.price / course.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <Button fullWidth size="lg" icon="shopping_cart" className="mb-4">
                  اشترك الآن
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  className="mb-8"
                  onClick={() => toggleFavoriteCourse(course.id)}
                >
                  <span>{isFavorite ? 'إزالة من المفضلة' : 'أضف للمفضلة'}</span>
                  <Icon
                    name={isFavorite ? 'favorite' : 'favorite_border'}
                    className={isFavorite ? 'text-red-500' : ''}
                  />
                </Button>

                {/* Features */}
                <div className="space-y-5 pt-6 border-t border-[#e5dcc5]/60 relative">
                  <h4 className="font-bold text-secondary text-sm uppercase tracking-wider">
                    مميزات الدورة
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { icon: 'ondemand_video', text: `${course.duration} فيديو عالي الدقة` },
                      { icon: 'file_download', text: '5 ملفات ومراجع قابلة للتحميل' },
                      { icon: 'quiz', text: '20 اختبار قصير وتمرين' },
                      { icon: 'phone_iphone', text: 'وصول عبر الجوال والحاسوب' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-gray-600 text-sm">
                        <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold flex-shrink-0">
                          <Icon name={item.icon} className="text-lg" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Courses */}
              <div className="bg-paper rounded-2xl border border-[#e5dcc5] p-5 shadow-sm">
                <h3 className="font-bold text-secondary mb-5 font-display text-lg border-b border-[#e5dcc5]/40 pb-3">
                  دورات ذات صلة
                </h3>
                <div className="space-y-4">
                  {relatedCourses.map((relatedCourse) => (
                    <Link
                      key={relatedCourse.id}
                      to={`/courses/${relatedCourse.id}`}
                      className="flex gap-4 group hover:bg-background-light p-2 rounded-xl transition-colors -mx-2"
                    >
                      <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 relative border border-[#e5dcc5]">
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 py-1">
                        <h4 className="text-sm font-bold text-secondary group-hover:text-accent-gold transition-colors line-clamp-2 leading-relaxed">
                          {relatedCourse.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {relatedCourse.instructor.name}
                          </span>
                          <div className="flex items-center gap-1 bg-accent-gold/10 px-1.5 py-0.5 rounded text-[10px] font-bold text-secondary">
                            <Icon name="star" className="text-accent-gold text-[10px]" />
                            {relatedCourse.rating}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
