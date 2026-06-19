import {
  Sparkles,
  Megaphone,
  Code2,
  Briefcase,
  MessageSquareCode,
  Workflow,
  Award,
  Infinity as InfinityIcon,
  Globe2,
  GraduationCap,
  TrendingUp,
  Wallet,
  Clock,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { AFFILIATE_URL } from "./constants";

export interface LearningPath {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  description: string;
  tag: string;
  affiliateLink: string;
}

export const learningPaths: LearningPath[] = [
  {
    icon: Sparkles,
    title: "AI For Beginners",
    description:
      "Start from zero. Understand how modern AI works and where to apply it.",
  },
  {
    icon: Megaphone,
    title: "AI For Marketers",
    description:
      "Use AI to write copy, build campaigns, and analyze customer data faster.",
  },
  {
    icon: Code2,
    title: "AI For Developers",
    description:
      "Build with LLM APIs, embeddings, RAG, and production-grade AI apps.",
  },
  {
    icon: Briefcase,
    title: "AI For Freelancers",
    description:
      "Stack high-leverage AI skills you can sell to clients this month.",
  },
  {
    icon: MessageSquareCode,
    title: "Prompt Engineering",
    description:
      "Master prompting patterns that get reliable output from any model.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Connect tools with n8n, Zapier and agents to automate real workflows.",
  },
];

export const trustItems = [
  { icon: Award, label: "Certificates Available" },
  { icon: InfinityIcon, label: "Lifetime Access" },
  { icon: Globe2, label: "Learn Anywhere" },
  { icon: GraduationCap, label: "Beginner Friendly" },
];

export const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Add in-demand AI skills to your resume and stand out in any role.",
  },
  {
    icon: Wallet,
    title: "Freelance Opportunities",
    description: "Land paid AI gigs — content, automation, chatbots, and more.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Automate repetitive work and reclaim hours every single week.",
  },
  {
    icon: Rocket,
    title: "Future-Proof Skills",
    description:
      "Stay ahead as AI reshapes industries from marketing to engineering.",
  },
];

export const stats = [
  { value: "100+", label: "Learning Resources" },
  { value: "50+", label: "Skill Tracks" },
  { value: "24/7", label: "Self-Paced Access" },
  { value: "Beginner", label: "Friendly" },
];

export const featuredCourses: Course[] = [
  {
    title: "ChatGPT & Generative AI Masterclass",
    description:
      "Use ChatGPT, Claude and Gemini to write, code, design and research like a power user.",
    tag: "Most Popular",
    affiliateLink: AFFILIATE_URL,
  },
  {
    title: "Prompt Engineering Pro",
    description:
      "Frameworks, patterns and real prompts that deliver consistent, production-quality results.",
    tag: "New",
    affiliateLink: AFFILIATE_URL,
  },
  {
    title: "AI Automation with n8n & Agents",
    description:
      "Build autonomous workflows that send emails, post content and run your business 24/7.",
    tag: "Trending",
    affiliateLink: AFFILIATE_URL,
  },
];

export const faqs = [
  {
    q: "Are these courses beginner friendly?",
    a: "Yes. Most resources start from the basics and ramp up step by step — no prior AI experience required.",
  },
  {
    q: "Do I need coding experience?",
    a: "No coding needed for most paths. Developer-focused tracks are clearly marked if you want to go deeper.",
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely. All featured resources are self-paced with lifetime access, so you can revisit anytime.",
  },
  {
    q: "Are certificates available?",
    a: "Yes — many of the recommended courses include a completion certificate you can share on LinkedIn.",
  },
];
