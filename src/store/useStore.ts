import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, RegistrationData } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface RegistrationState {
  currentStep: number;
  data: Partial<RegistrationData>;
}

interface CourseState {
  selectedCategory: string;
  searchQuery: string;
  enrolledCourses: string[];
  favoriteCourses: string[];
}

interface AppState extends AuthState {
  registration: RegistrationState;
  courses: CourseState;

  // Auth actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;

  // Registration actions
  setRegistrationStep: (step: number) => void;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  resetRegistration: () => void;
  completeRegistration: () => Promise<void>;

  // Course actions
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  enrollCourse: (courseId: string) => void;
  toggleFavoriteCourse: (courseId: string) => void;
}

const initialRegistrationState: RegistrationState = {
  currentStep: 1,
  data: {},
};

const initialCourseState: CourseState = {
  selectedCategory: 'all',
  searchQuery: '',
  enrolledCourses: [],
  favoriteCourses: [],
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial auth state
      user: null,
      isAuthenticated: false,
      isLoading: false,

      // Initial registration state
      registration: initialRegistrationState,

      // Initial course state
      courses: initialCourseState,

      // Auth actions
      login: async (email: string, _password: string) => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user: User = {
          id: '1',
          fullName: 'مستخدم تجريبي',
          email,
        };

        set({ user, isAuthenticated: true, isLoading: false });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          registration: initialRegistrationState,
        });
      },

      setUser: (user: User) => {
        set({ user, isAuthenticated: true });
      },

      // Registration actions
      setRegistrationStep: (step: number) => {
        set((state) => ({
          registration: { ...state.registration, currentStep: step },
        }));
      },

      updateRegistrationData: (data: Partial<RegistrationData>) => {
        set((state) => ({
          registration: {
            ...state.registration,
            data: { ...state.registration.data, ...data },
          },
        }));
      },

      resetRegistration: () => {
        set({ registration: initialRegistrationState });
      },

      completeRegistration: async () => {
        set({ isLoading: true });
        const { registration } = get();

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        const user: User = {
          id: '1',
          fullName: registration.data.fullName || '',
          email: registration.data.email || '',
          country: registration.data.country,
          ageGroup: registration.data.ageGroup,
          level: registration.data.level,
          interests: registration.data.interests,
        };

        set({
          user,
          isAuthenticated: true,
          isLoading: false,
          registration: initialRegistrationState,
        });
      },

      // Course actions
      setSelectedCategory: (category: string) => {
        set((state) => ({
          courses: { ...state.courses, selectedCategory: category },
        }));
      },

      setSearchQuery: (query: string) => {
        set((state) => ({
          courses: { ...state.courses, searchQuery: query },
        }));
      },

      enrollCourse: (courseId: string) => {
        set((state) => ({
          courses: {
            ...state.courses,
            enrolledCourses: [...state.courses.enrolledCourses, courseId],
          },
        }));
      },

      toggleFavoriteCourse: (courseId: string) => {
        set((state) => {
          const isFavorite = state.courses.favoriteCourses.includes(courseId);
          return {
            courses: {
              ...state.courses,
              favoriteCourses: isFavorite
                ? state.courses.favoriteCourses.filter(id => id !== courseId)
                : [...state.courses.favoriteCourses, courseId],
            },
          };
        });
      },
    }),
    {
      name: 'abjadiyat-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        courses: {
          enrolledCourses: state.courses.enrolledCourses,
          favoriteCourses: state.courses.favoriteCourses,
        },
      }),
    }
  )
);
