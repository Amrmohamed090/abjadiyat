import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { Icon, Button, CourseCard } from '../components/ui';
import { courses, instructors, testimonials, blogPosts } from '../data/mockData';

export function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-dark opacity-10 pointer-events-none z-0 mix-blend-multiply" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] z-0" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent-gold/10 rounded-full blur-[80px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-right relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold font-body font-semibold text-sm mb-6">
                <Icon name="verified" className="text-base" />
                منصة التعليم الإسلامي الرائدة
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-secondary leading-tight mb-6">
                ارتقِ بمعرفتك في <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-accent-gold drop-shadow-sm">
                  العلوم الشرعية
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                انضم إلى مجتمع من طالبي العلم واستفد من دورات متخصصة في القرآن، الحديث، الفقه،
                واللغة العربية، مقدمة من نخبة من العلماء المعتمدين بأسلوب عصري وأصيل.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/register">
                  <Button size="lg" icon="arrow_forward">
                    ابدأ رحلتك التعليمية
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <Icon name="play_circle" />
                  شاهد العرض التعريفي
                </Button>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-body">
                <div className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-accent-gold" />
                  <span>شهادات معتمدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-accent-gold" />
                  <span>نخبة العلماء</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-accent-gold" />
                  <span>منهجية أصيلة</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-xl relative lg:pr-10">
              <div className="relative w-full aspect-[4/5] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-20 rounded-[3rem] blur-xl transform translate-y-4" />
                <div className="absolute inset-0 border-[3px] border-accent-gold/30 rounded-t-full rounded-b-[3rem] transform -translate-x-3 -translate-y-3 z-0" />
                <div className="relative w-full h-full rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white bg-secondary-light">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJSIDBbUOPD9M2q-SkoxTce7oXzxdSAktBvBsG5v03_rAXgeYWOKmw30xkMKNVBzm8APc5AWRIJRBk_xltlosj3wZkpTwDRAmlbo1hM75qGiHJAb-wYIEC-1TRhAQE0phZjdbxqR0CnjdYy4sPGINynB-cxtBVCvcnd3FdBNVF9tnv6vy5xH7DBqp9HTxOC5GjFwrzE_vbw4whb9P9_pMBT373MtqrWHv4QASNKNZsbG3ybl1X4EjCmCkRLspmiabHP01aADnS3rCF"
                    alt="Islamic Library"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,223,82,0.2),_transparent_60%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-body mb-2">
                      إرث المعرفة
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white drop-shadow-md">
                      منارة العلم الشرعي
                    </h3>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl z-0 animate-pulse" />
                <div className="absolute top-1/4 -right-12 w-20 h-20 bg-primary/20 rounded-full blur-xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-4">
              لماذا تختار <span className="text-accent-gold">أبجديات</span>؟
            </h2>
            <p className="text-gray-600 font-body text-lg">
              نجمع بين أصالة العلم الشرعي وتقنيات التعليم الحديثة لنقدم لك تجربة تعليمية فريدة
              ومثمرة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'cast_for_education',
                bgIcon: 'school',
                title: 'علماء وخبراء متخصصون',
                desc: 'تلقى العلم على يد نخبة من العلماء والمشايخ المعتمدين الذين يجمعون بين غزارة العلم ومهارة التدريس.',
              },
              {
                icon: 'menu_book',
                bgIcon: 'auto_stories',
                title: 'مناهج علمية رصينة',
                desc: 'محتوى تعليمي تم إعداده ومراجعته بدقة لضمان صحة المعلومات وتدرجها المناسب لكل مستوى.',
              },
              {
                icon: 'forum',
                bgIcon: 'diversity_3',
                title: 'مجتمع تعليمي تفاعلي',
                desc: 'شارك في حلقات النقاش، اطرح الأسئلة مباشرة، وتفاعل مع زملائك ومعلميك في بيئة محفزة.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-[#fdfbf7] rounded-2xl border border-[#e5dcc5] hover:border-accent-gold/40 hover:shadow-gold transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name={item.bgIcon} className="text-9xl text-accent-gold" />
                </div>
                <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon name={item.icon} className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold font-display text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-[#f9f5ea] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-2">
                أحدث <span className="text-accent-gold">الدورات المختارة</span>
              </h2>
              <p className="text-gray-600 font-body">اكتشف أحدث الإضافات إلى مكتبتنا العلمية</p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-secondary font-bold font-body hover:text-accent-gold transition-colors group"
            >
              تصفح جميع الدورات
              <Icon
                name="arrow_right_alt"
                className="rotate-180 group-hover:-translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory hide-scrollbar">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-4">
              نخبة من <span className="text-accent-gold">العلماء والمدرسين</span>
            </h2>
            <p className="text-gray-600 font-body text-lg">
              تعلم على يد أفضل المتخصصين في العلوم الشرعية واللغة العربية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex flex-col items-center group">
                <div className="relative w-48 h-64 mb-6 arch-window overflow-hidden border-4 border-[#e5dcc5] group-hover:border-accent-gold transition-colors duration-300 shadow-lg">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display text-secondary">{instructor.name}</h3>
                <p className="text-accent-gold font-body text-sm font-semibold mb-2">
                  {instructor.title}
                </p>
                <p className="text-gray-500 font-body text-sm text-center">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#fdfbf7] relative">
        <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-4">
              قالوا عن <span className="text-accent-gold">أبجديات</span>
            </h2>
            <p className="text-gray-600 font-body text-lg">
              تجارب حقيقية لطلابنا في رحلتهم لطلب العلم.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 pt-12 relative rounded-2xl shadow-sm border border-[#e5dcc5] arch-top mt-12"
              >
                <div className="absolute -top-10 right-1/2 translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mb-6">
                  <h4 className="font-bold font-display text-secondary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-body">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 font-body text-center leading-relaxed italic relative">
                  <span className="absolute -top-4 -right-2 text-4xl text-accent-gold/20 font-serif">
                    "
                  </span>
                  {testimonial.content}
                  <span className="absolute -bottom-8 -left-2 text-4xl text-accent-gold/20 font-serif">
                    "
                  </span>
                </p>
                <div className="flex justify-center mt-6 gap-1 text-accent-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name={i < Math.floor(testimonial.rating) ? 'star' : 'star_half'}
                      className="text-sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white border-t border-[#e5dcc5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-2">
                من <span className="text-accent-gold">مدونتنا</span>
              </h2>
              <p className="text-gray-600 font-body">مقالات وخواطر لإثراء معرفتك</p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-secondary font-bold font-body hover:text-accent-gold transition-colors group"
            >
              اقرأ المزيد
              <Icon
                name="arrow_right_alt"
                className="rotate-180 group-hover:-translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[16/9] shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex gap-3 text-xs font-bold font-body text-gray-500 mb-2">
                  <span className="text-accent-gold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-secondary mb-2 group-hover:text-accent-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-body text-sm line-clamp-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden bg-secondary-light/95">
        <div
          className="absolute inset-0 bg-arabesque-dark opacity-10 pointer-events-none"
          style={{ backgroundSize: '80px 80px' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,74,61,0.5)_0%,_rgba(26,46,37,1)_100%)]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] z-0" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center border border-accent-gold/30 rounded-[3rem] p-10 md:p-16 bg-[#1a2e25]/80 backdrop-blur-md shadow-2xl relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a2e25] p-3 rounded-full border border-accent-gold/30">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary-light shadow-gold border-2 border-accent-gold text-accent-gold">
                <Icon name="mark_email_unread" className="text-4xl" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-[#fffefc] mb-4 mt-6">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="text-gray-300 font-body text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              كن أول من يحصل على أحدث المقالات الشرعية، مواعيد الدورات الحصرية، ونصائح تعليمية قيمة
              تصلك مباشرة وبكل ود.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <Icon name="mail" className="text-accent-gold/70" />
                </div>
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full rounded-xl border border-accent-gold/30 py-4 pr-12 pl-6 focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white font-body bg-white/5 shadow-inner placeholder:text-gray-400 h-14 transition-all hover:bg-white/10"
                />
              </div>
              <Button type="submit" size="lg" icon="arrow_right_alt">
                اشترك الآن
              </Button>
            </form>
            <p className="text-gray-400/60 text-xs mt-8 font-body flex items-center justify-center gap-1">
              <Icon name="lock" className="text-sm text-accent-gold/60" />
              نحترم خصوصيتك. لن نرسل لك أي رسائل مزعجة.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-background-light overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-secondary mb-6">
            هل أنت جاهز لبدء رحلة التعلم؟
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-body">
            انضم الآن واحصل على وصول غير محدود لأول 3 دورات مجاناً عند التسجيل.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg">
              سجل حساب جديد
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
