// User types
export interface User {
  id: string;
  fullName: string;
  email: string;
  country?: string;
  ageGroup?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  interests?: string[];
  avatar?: string;
}

// Registration form data
export interface RegistrationStep1Data {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface RegistrationStep2Data {
  country: string;
  ageGroup: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface RegistrationStep3Data {
  interests: string[];
}

export interface RegistrationData extends RegistrationStep1Data, RegistrationStep2Data, RegistrationStep3Data {}

// Course types
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  duration: string;
  lessonsCount: number;
  image: string;
  instructor: Instructor;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  progress?: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  studentsCount: number;
  rating: number;
  coursesCount: number;
  credentials?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
  isCompleted?: boolean;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// Category filter
export interface CategoryFilter {
  id: string;
  label: string;
  icon: string;
}
