import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { Icon, CourseCard } from '../components/ui';
import { useStore } from '../store/useStore';
import { courses } from '../data/mockData';

export function DashboardPage() {
  const { user } = useStore();
  const enrolledCourses = courses.slice(0, 3);
  const recommendedCourses = courses.slice(3, 6);

  const stats = [
    { icon: 'menu_book', label: 'الدورات المسجلة', value: '5', color: 'bg-blue-50 text-blue-600' },
    { icon: 'check_circle', label: 'الدروس المكتملة', value: '42', color: 'bg-green-50 text-green-600' },
    { icon: 'schedule', label: 'ساعات التعلم', value: '28', color: 'bg-purple-50 text-purple-600' },
    { icon: 'emoji_events', label: 'الشهادات', value: '2', color: 'bg-amber-50 text-amber-600' },
  ];

  const recentActivity = [
    { type: 'lesson', title: 'أكملت درس: أحكام النون الساكنة', time: 'منذ ساعتين', icon: 'check_circle', color: 'text-green-500' },
    { type: 'quiz', title: 'اجتزت اختبار: مخارج الحروف', time: 'منذ 5 ساعات', icon: 'quiz', color: 'text-blue-500' },
    { type: 'course', title: 'سجلت في دورة: النحو العربي', time: 'أمس', icon: 'school', color: 'text-purple-500' },
    { type: 'certificate', title: 'حصلت على شهادة: أساسيات التجويد', time: 'منذ 3 أيام', icon: 'workspace_premium', color: 'text-amber-500' },
  ];

  const upcomingLessons = [
    { title: 'الإدغام وأنواعه', course: 'أحكام التجويد', time: 'اليوم - 4:00 م', instructor: 'الشيخ أحمد العلي' },
    { title: 'باب المبتدأ والخبر', course: 'النحو العربي', time: 'غداً - 6:00 م', instructor: 'د. سارة الفقيه' },
    { title: 'آداب طلب العلم', course: 'مقدمة في العلوم الشرعية', time: 'الأربعاء - 5:00 م', instructor: 'الشيخ محمد النور' },
  ];

  return (
    <MainLayout>
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Welcome Section */}
          <div className="bg-secondary rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl m-4" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20 rounded-br-3xl m-4" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                <Icon name="person" className="text-4xl text-primary" />
              </div>
              <div className="text-center md:text-right flex-1">
                <h1 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                  مرحباً بك، {user?.fullName || 'طالب العلم'}
                </h1>
                <p className="text-white/70">
                  أكمل رحلتك في طلب العلم الشرعي واللغة العربية
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/courses"
                  className="px-6 py-3 bg-primary text-secondary font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Icon name="explore" />
                  تصفح الدورات
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e5dcc5] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon name={stat.icon} className="text-2xl" />
                </div>
                <div className="text-3xl font-display font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue Learning */}
              <div className="bg-white rounded-2xl border border-[#e5dcc5] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold text-secondary flex items-center gap-2">
                    <Icon name="play_circle" className="text-accent-gold" />
                    أكمل التعلم
                  </h2>
                  <Link to="/my-courses" className="text-sm text-accent-gold hover:text-secondary transition-colors font-medium">
                    عرض الكل
                  </Link>
                </div>

                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex gap-4 p-4 bg-background-light rounded-xl hover:bg-[#f5f0e0] transition-colors group"
                    >
                      <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-secondary truncate mb-1">{course.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Icon name="person" className="text-sm" />
                            {course.instructor.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="play_circle" className="text-sm" />
                            {course.lessonsCount} درس
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-500">التقدم</span>
                            <span className="text-accent-gold font-bold">{course.progress || 0}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent-gold rounded-full transition-all"
                              style={{ width: `${course.progress || 0}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="self-center p-2 text-accent-gold hover:bg-accent-gold/10 rounded-lg transition-colors"
                      >
                        <Icon name="play_arrow" className="text-2xl" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Courses */}
              <div className="bg-white rounded-2xl border border-[#e5dcc5] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold text-secondary flex items-center gap-2">
                    <Icon name="auto_awesome" className="text-accent-gold" />
                    دورات مقترحة لك
                  </h2>
                  <Link to="/courses" className="text-sm text-accent-gold hover:text-secondary transition-colors font-medium">
                    عرض المزيد
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {recommendedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Lessons */}
              <div className="bg-white rounded-2xl border border-[#e5dcc5] p-6 shadow-sm">
                <h2 className="text-lg font-display font-bold text-secondary flex items-center gap-2 mb-4">
                  <Icon name="event" className="text-accent-gold" />
                  الدروس القادمة
                </h2>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="p-4 bg-background-light rounded-xl border border-[#e5dcc5]/50"
                    >
                      <h3 className="font-bold text-secondary text-sm mb-1">{lesson.title}</h3>
                      <p className="text-xs text-gray-500 mb-2">{lesson.course}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-accent-gold font-medium flex items-center gap-1">
                          <Icon name="schedule" className="text-sm" />
                          {lesson.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-sm text-accent-gold hover:bg-accent-gold/10 rounded-lg transition-colors font-medium">
                  عرض الجدول الكامل
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl border border-[#e5dcc5] p-6 shadow-sm">
                <h2 className="text-lg font-display font-bold text-secondary flex items-center gap-2 mb-4">
                  <Icon name="history" className="text-accent-gold" />
                  النشاط الأخير
                </h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-lg bg-gray-50 ${activity.color}`}>
                        <Icon name={activity.icon} className="text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-secondary truncate">{activity.title}</p>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
                <div className="relative z-10">
                  <h2 className="text-lg font-display font-bold text-primary mb-4">إجراءات سريعة</h2>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-right">
                      <Icon name="download" className="text-primary" />
                      <span className="text-sm">تحميل الشهادات</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-right">
                      <Icon name="support_agent" className="text-primary" />
                      <span className="text-sm">الدعم الفني</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-right">
                      <Icon name="settings" className="text-primary" />
                      <span className="text-sm">إعدادات الحساب</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
