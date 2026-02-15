import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import type { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  variant?: 'default' | 'horizontal' | 'featured';
}

export function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  const levelLabels = {
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
    all: 'عام',
  };

  const categoryLabels: Record<string, string> = {
    quran: 'تجويد',
    fiqh: 'فقه',
    arabic: 'لغة عربية',
    seerah: 'تاريخ',
    hadith: 'حديث',
    tazkiya: 'تزكية',
  };

  if (variant === 'featured') {
    return (
      <div className="min-w-[320px] md:min-w-[380px] snap-center">
        <div className="group bg-white rounded-t-[2rem] rounded-b-xl border border-[#e5dcc5] overflow-hidden hover:shadow-gold-lg hover:border-accent-gold/40 transition-all duration-500 flex flex-col h-full islamic-border">
          <div className="relative p-4 pb-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem] shadow-inner">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-secondary shadow-sm font-body border border-accent-gold/20">
                {levelLabels[course.level]}
              </div>
              {course.isBestseller && (
                <div className="absolute top-3 left-3 bg-secondary text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-primary/20 font-body">
                  الأكثر مبيعاً
                </div>
              )}
            </div>
          </div>
          <div className="px-6 pt-4 pb-6 flex-1 flex flex-col relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-accent-gold/30 flex items-center justify-center z-20">
              <Icon name="star" className="text-accent-gold text-sm" />
            </div>
            <div className="flex items-center justify-between mb-3 mt-2">
              <span className="text-xs font-bold text-secondary bg-primary/20 px-3 py-1 rounded-full font-body">
                {categoryLabels[course.category] || course.category}
              </span>
              <div className="flex items-center gap-1">
                <Icon name="star" className="text-sm text-accent-gold" />
                <span className="text-xs font-bold text-gray-700 font-body">{course.rating}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-accent-gold transition-colors font-display leading-snug">
              {course.title}
            </h3>
            <div className="mt-auto pt-4 border-t border-[#e5dcc5] border-dashed flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-accent-gold/20"
                />
                <span className="text-sm font-medium text-gray-700 font-body">
                  {course.instructor.name}
                </span>
              </div>
              <div className="text-lg font-bold text-secondary font-display">
                {course.price === 0 ? 'مجاني' : `${course.price}${course.currency === '$' ? '$' : ''}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/courses/${course.id}`} className="block">
      <div className="group bg-white rounded-xl shadow-card hover:shadow-soft transition-all duration-300 flex flex-col overflow-hidden relative border border-gray-100">
        <div className="h-48 w-full relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-secondary shadow-sm flex items-center gap-1 font-body">
            <Icon name="star" className="text-accent-gold text-xs" />
            {course.rating}
          </div>
          {course.isNew && (
            <div className="absolute bottom-3 left-3 bg-primary text-secondary text-xs px-2 py-1 rounded font-bold shadow-sm font-body">
              جديد
            </div>
          )}
          {course.progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
            </div>
          )}
        </div>
        <div className="p-5 flex-1 flex flex-col relative">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-accent-gold bg-accent-gold/5 px-2.5 py-1 rounded border border-accent-gold/10 font-body">
              {categoryLabels[course.category] || course.category}
            </span>
            <span className="text-xs text-gray-400 font-body">
              مستوى {levelLabels[course.level]}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-[#b4942b] mb-3 group-hover:text-accent-gold transition-colors line-clamp-2 leading-relaxed">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 mb-6">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover border border-gray-100"
            />
            <span className="text-sm text-gray-600 font-body">{course.instructor.name}</span>
          </div>
          <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-50">
            <div>
              <span className="font-bold text-lg text-secondary font-body">
                {course.price === 0 ? (
                  'مجاني'
                ) : (
                  <>
                    {course.price}{' '}
                    <span className="text-xs font-normal text-gray-500">{course.currency}</span>
                  </>
                )}
              </span>
            </div>
          </div>
          <span className="mt-4 w-full block text-center bg-primary hover:bg-primary-dark text-secondary font-bold py-2.5 rounded-lg transition-colors shadow-sm font-body text-sm">
            عرض التفاصيل
          </span>
        </div>
      </div>
    </Link>
  );
}
