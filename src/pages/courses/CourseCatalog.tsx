import { useState, useMemo } from 'react';
import { MainLayout } from '../../components/layout';
import { Icon, CourseCard } from '../../components/ui';
import { courses, categoryFilters } from '../../data/mockData';
import { useStore } from '../../store/useStore';

export function CourseCatalogPage() {
  const { courses: courseState, setSelectedCategory, setSearchQuery } = useStore();
  const [localSearch, setLocalSearch] = useState(courseState.searchQuery);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        courseState.selectedCategory === 'all' ||
        course.category === courseState.selectedCategory;
      const matchesSearch =
        !courseState.searchQuery ||
        course.title.includes(courseState.searchQuery) ||
        course.description.includes(courseState.searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [courseState.selectedCategory, courseState.searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  return (
    <MainLayout>
      <div className="pt-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-soft mb-12 bg-secondary text-center py-20 px-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary-light/95" />
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl m-6" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20 rounded-br-3xl m-6" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20 backdrop-blur-md">
                <Icon name="school" className="text-sm" />
                أكثر من 50 دورة تعليمية
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4 leading-tight tracking-wide drop-shadow-md">
                تصفح الدورات
              </h1>
              <p className="text-white/80 text-xl font-light leading-relaxed max-w-xl mx-auto">
                اكتشف كنوز المعرفة الإسلامية واللغة العربية من خلال دورات متخصصة يقدمها نخبة من
                العلماء والمشايخ
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-paper rounded-2xl border border-[#e5dcc5] shadow-sm p-4 mb-12 sticky top-24 z-40">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <form onSubmit={handleSearch} className="relative w-full lg:w-1/3">
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder="ابحث عن دورة، أو موضوع..."
                  className="w-full pl-4 pr-12 py-3 bg-background-light border border-[#e5dcc5] focus:border-accent-gold focus:ring-1 focus:ring-accent-gold rounded-full text-secondary placeholder-gray-400 shadow-inner transition-all"
                />
                <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Icon name="search" className="text-accent-gold" />
                </button>
              </form>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-end w-full lg:w-2/3">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedCategory(filter.id)}
                    className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all ${
                      courseState.selectedCategory === filter.id
                        ? 'bg-secondary text-primary shadow-md border border-secondary'
                        : 'bg-white text-secondary hover:bg-background-light border border-[#e5dcc5] hover:border-accent-gold'
                    }`}
                  >
                    <Icon
                      name={filter.icon}
                      className={`text-sm ${
                        courseState.selectedCategory === filter.id
                          ? 'text-primary'
                          : 'text-accent-gold'
                      }`}
                    />
                    {filter.label}
                  </button>
                ))}
                <button
                  className="p-2.5 rounded-full bg-white text-secondary border border-[#e5dcc5] hover:border-accent-gold transition-colors ml-auto lg:ml-0"
                  title="تصفية متقدمة"
                >
                  <Icon name="tune" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Icon name="search_off" className="text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-display font-bold text-secondary mb-2">
                لم نجد أي دورات
              </h3>
              <p className="text-gray-500 font-body">
                جرب البحث بكلمات مختلفة أو تصفح الفئات الأخرى
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredCourses.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="w-10 h-10 rounded-lg border border-[#e5dcc5] bg-white text-gray-500 hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-colors">
                <Icon name="chevron_right" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-secondary text-primary font-bold shadow-md flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-[#e5dcc5] bg-white text-secondary hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-colors font-medium">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-[#e5dcc5] bg-white text-secondary hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-colors font-medium">
                3
              </button>
              <span className="text-gray-400 mx-1">...</span>
              <button className="w-10 h-10 rounded-lg border border-[#e5dcc5] bg-white text-secondary hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-colors font-medium">
                10
              </button>
              <button className="w-10 h-10 rounded-lg border border-[#e5dcc5] bg-white text-gray-500 hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-colors">
                <Icon name="chevron_left" />
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
