import { 
  Calendar, 
  Activity, 
  CheckSquare, 
  Moon, 
  Layout, 
  ListTodo, 
  StickyNote, 
  PenLine 
} from 'lucide-react';
import { Feature, ProductVariant, FAQItem, Testimonial } from './types';

export const CUSTOM_SECTIONS_OPTIONS = [
  "متابع الصلاة (Prayer Tracker)",
  "متابع الوزن (Weight Tracker)",
  "متابع العادات (Habit Tracker)",
  "قائمة المهام (To-Do List)",
  "مساحة حرة (Notes)",
  "مخطط أسبوعي (Weekly Planner)",
  "جدول مذاكرة (Study Schedule)",
  "متابع شرب الماء (Water Tracker)",
  "أذكار الصباح والمساء",
  "مصاريف يومية (Budget Tracker)",
  "قائمة تسوق (Shopping List)",
  "تقييم اليوم (Daily Review)"
];

export const FEATURES: Feature[] = [
  {
    icon: Calendar,
    title: "نتيجة سنوية 2026",
    description: "نظرة شاملة للسنة كلها قدام عينك عشان متفوتش أي ميعاد مهم."
  },
  {
    icon: Activity,
    title: "متابع الوزن اليومي",
    description: "سجل وزنك وشوف تقدمك الصحي يوم بيوم."
  },
  {
    icon: Layout,
    title: "مخطط أسبوعي",
    description: "مساحة واسعة لتنظيم مهام الأسبوع وأولوياتك."
  },
  {
    icon: Moon,
    title: "متابع الصلاة والسنن",
    description: "جدول شهري لمتابعة الفروض، السنن، والنوافل بانتظام."
  },
  {
    icon: CheckSquare,
    title: "متابع العادات",
    description: "تابع عاداتك الجديدة واستمر عليها بجدول تتبع بصري."
  },
  {
    icon: ListTodo,
    title: "قائمة مهام بالأولوية",
    description: "رتب مهامك حسب الأهمية عشان تنجز اللي وراك بذكاء."
  },
  {
    icon: PenLine,
    title: "مساحة للملاحظات",
    description: "مكان سريع لتدوين الأفكار والملاحظات العابرة."
  },
  {
    icon: StickyNote,
    title: "منطقة الاستيكر نوتس",
    description: "مكان مخصص للزق الملاحظات السريعة والتذكيرات."
  }
];

export const VARIANTS: ProductVariant[] = [
  {
    id: 'v1',
    name: 'المقاس المتوسط',
    size: '60 × 50 سم',
    price: 250,
    priceDisplay: '250 ج.م',
    description: 'مثالي للمساحات المتوسطة، والمكاتب المنزلية.',
    isCustom: false,
    features: ['شامل كل الأقسام الأساسية', 'خامة فينيل عالية الجودة', 'سهل الكتابة والمسح'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=500' 
  },
  {
    id: 'v2',
    name: 'المقاس الكبير',
    size: '100 × 50 سم',
    price: 320,
    priceDisplay: '320 ج.م',
    description: 'رؤية واضحة وتفاصيل أكبر، مناسب للتعليق على الحائط الرئيسي.',
    isCustom: false,
    features: ['مساحة كتابة أكبر', 'تصميم مريح للعين', 'شامل كل المميزات'],
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'v3',
    name: 'المخطط المفصل (Custom)',
    size: '100 × 50 سم',
    price: 450,
    priceDisplay: '450 ج.م',
    description: 'صمم لوحتك بنفسك! اختار الأقسام اللي تناسب حياتك.',
    isCustom: true,
    features: ['اختار حتى 8 أقسام', 'ترتيب حسب رغبتك', 'تصميم فريد ليك انت'],
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=500'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "أحمد يحيى",
    role: "مهندس برمجيات",
    content: "المخطط فرق معايا جداً في تنظيم وقتي، خصوصاً إني بشتغل فري لانس. فكرة إن السنة كلها قدامي بتديني حافز كبير."
  },
  {
    id: 2,
    name: "سارة محمد",
    role: "طالبة طب",
    content: "كنت دايماً ببدأ جداول ومكملش، بس اللوحة دي عشان قدام عيني علطول بتفكرني بمهامي وبالصلاة. الخامة ممتازة وبتتمسح بسهولة."
  },
  {
    id: 3,
    name: "عمر خالد",
    role: "رائد أعمال",
    content: "الجودة تحفة والتصميم هادي ومريح للعين. طلبت النسخة الكاستوم وكانت بالظبط زي ما كنت محتاجها."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "هل بيمسح بسهولة؟",
    answer: "أيوة جداً! الخامة مصممة خصيصاً عشان تقدر تكتب وتمسح عليها بسهولة باستخدام أقلام السبورة البيضاء، من غير ما تسيب أثر."
  },
  {
    question: "أقدر أكتب عليه بأي قلم؟",
    answer: "لأ، لازم تستخدم أقلام السبورة البيضاء (Whiteboard Markers) عشان تقدر تمسحها بسهولة. الأقلام الدائمة مش هتتمسح."
  },
  {
    question: "هل فيه شحن لكل المحافظات؟",
    answer: "طبعاً، بنشحن لكل محافظات مصر وتوصيل سريع لحد باب البيت."
  },
  {
    question: "إزاي بعمل الكاستوميزيشن؟",
    answer: "لما تختار 'المخطط المفصل'، هيتفتحلك فورم تختار منه الأقسام اللي محتاجها (زي الصلاة، الجيم، المذاكرة، إلخ) وإحنا بنصممه ونطبعه مخصوص ليك."
  }
];