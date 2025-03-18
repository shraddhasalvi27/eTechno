import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Company", href: "#" },
  { label: "Services", href: "#" },
  { label: "ContactUs", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",

  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "Responsive and scalable web application development cutting across the domains and technologies. that are hosted on various cloud infrastructure.",
  },
  {
    icon: <Fingerprint />,
    text: "App Development",
    description:
      "We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business. Whether native, hybrid, or cross-platform, our mobile development.",
  },
  {
    icon: <ShieldHalf />,
    text: "Customizable Solutions",
    description:
      "Tailor digital experiences to fit your unique needs with our highly customizable and scalable solutions.",
  },
  {
    icon: <BatteryCharging />,
    text: "E-commerce",
    description:
      "Our experts provide complete online store Solutions to grow your business. We are also proficient in consulting, support & maintenance, feature packed web and mobile friendly eCommerce technologies.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Workspace",
    description:
      "Enhance teamwork with intuitive collaboration tools, enabling seamless communication and project management.",
  },
  {
    icon: <GlobeLock />,
    text: "Enterprise-Grade Security",
    description:
      "Protect your data with top-tier security measures, ensuring privacy and compliance at every level.",
  },
];


export const checklistItems = [
  {
    title: "Seamless Project Management",
    description:
      "Plan, organize, and track your projects with intuitive tools designed for efficiency.",
  },
  {
    title: "Effortless Team Collaboration",
    description:
      "Work together in real-time with shared workspaces, comments, and version control.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Leverage AI-driven tools to optimize workflows and reduce manual efforts.",
  },
  {
    title: "Instant Deployment & Scaling",
    description:
      "Deploy your digital solutions with a single click and scale effortlessly as your business grows.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];