import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Eye,
  Layers3,
  Radar,
  ServerCog,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import TechHeroSection from "./components/TechHeroSection";

interface StackCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  coreTech: string[];
  emergingTech: string[];
  size: "wide" | "tall" | "regular";
}

const stackCategories: StackCategory[] = [
  {
    title: "AI & Intelligent Systems",
    icon: BrainCircuit,
    description:
      "Future-proof architectures for Agentic AI workflows, Generative AI systems, and production-grade Computer Vision with ethical AI implementation at every layer.",
    coreTech: [
      "PyTorch 2.5+",
      "LangChain / LangGraph",
      "Vertex AI pipelines",
      "Prompt and model evaluation suites",
    ],
    emergingTech: [
      "Autonomous multi-agent orchestration",
      "Domain-specific LLM fine-tuning",
      "Vision-language action models",
    ],
    size: "wide",
  },
  {
    title: "Modern Web Platforms",
    icon: Code2,
    description:
      "SEO-first and performance-critical web platforms built for sub-second latency and enterprise-grade resilience.",
    coreTech: [
      "Next.js 15+",
      "TypeScript",
      "Server Components",
      "Full-stack observability",
    ],
    emergingTech: [
      "Edge-first personalization",
      "Streaming UI architectures",
      "AI-assisted conversion optimization",
    ],
    size: "regular",
  },
  {
    title: "Mobile Ecosystems",
    icon: Smartphone,
    description:
      "Performance-native and cross-platform delivery for mobile products with rapid release velocity and durable code quality.",
    coreTech: [
      "Swift / SwiftUI",
      "Kotlin / Jetpack Compose",
      "Flutter",
      "React Native",
    ],
    emergingTech: [
      "On-device AI inference",
      "Cross-platform design system compilers",
      "Mobile edge sync strategies",
    ],
    size: "regular",
  },
  {
    title: "Data & Real-time Analytics",
    icon: Database,
    description:
      "A modern data backbone for operational intelligence, AI-driven search, and real-time decision systems.",
    coreTech: ["PostgreSQL", "MongoDB", "Redis", "Streaming event pipelines"],
    emergingTech: [
      "Vector databases (Pinecone / Milvus)",
      "RAG optimization frameworks",
      "Semantic observability for AI search",
    ],
    size: "regular",
  },
  {
    title: "Cloud & Platform Engineering",
    icon: CloudCog,
    description:
      "Cloud-native platform engineering for reliability, governance, and secure scale across regions and workloads.",
    coreTech: [
      "AWS / Azure / GCP",
      "Kubernetes (K8s)",
      "Terraform (IaC)",
      "CI/CD with policy controls",
    ],
    emergingTech: [
      "AIOps for autonomous monitoring",
      "Self-healing deployment systems",
      "FinOps-aware capacity orchestration",
    ],
    size: "tall",
  },
];

function RadarPill({
  label,
  variant,
  icon: Icon,
}: {
  label: string;
  variant: "core" | "emerging";
  icon: LucideIcon;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
        variant === "core"
          ? "border-crimson/30 bg-crimson/10 text-crimson"
          : "border-surface-300 bg-surface-100 text-surface-600"
      }`}
    >
      <Icon size={12} />
      {label}
    </span>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <TechHeroSection />
      <section>
        <div className="section-pad-sm bg-surface-50">
          <div className="container-xl">
            <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                  <Radar size={18} className="text-crimson" />
                </div>
                <p className="text-sm text-surface-600">
                  <span className="font-semibold text-charcoal">
                    Tech Radar:
                  </span>{" "}
                  Core Tech powers daily delivery. Emerging Tech is where we
                  pioneer next-wave capabilities.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <RadarPill label="Core Tech" variant="core" icon={Layers3} />
                <RadarPill
                  label="Emerging Tech"
                  variant="emerging"
                  icon={Bot}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-pad pt-0 bg-surface-50">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">
              {stackCategories.map(
                ({
                  title,
                  icon: Icon,
                  description,
                  coreTech,
                  emergingTech,
                  size,
                }) => (
                  <article
                    key={title}
                    className={`card p-6 transition-all duration-300 ${
                      size === "wide"
                        ? "xl:col-span-4"
                        : size === "tall"
                          ? "xl:col-span-2 xl:row-span-2"
                          : "xl:col-span-2"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                        <Icon size={20} className="text-crimson" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-surface-400">
                        Tech Radar
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-charcoal mb-3">
                      {title}
                    </h2>
                    <p className="text-sm text-surface-500 leading-relaxed mb-5">
                      {description}
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="rounded-xl border border-crimson/20 bg-crimson/5 p-4">
                        <div className="flex items-center gap-2 mb-2.5">
                          <ServerCog size={14} className="text-crimson" />
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-crimson">
                            Core Tech
                          </p>
                        </div>
                        <ul className="space-y-1.5">
                          {coreTech.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-surface-600"
                            >
                              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-crimson shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-surface-200 bg-surface-50 p-4">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Eye size={14} className="text-surface-600" />
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-surface-600">
                            Emerging Tech
                          </p>
                        </div>
                        <ul className="space-y-1.5">
                          {emergingTech.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-surface-600"
                            >
                              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-surface-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>

            <div className="mt-10">
              <Link to="/contact" className="btn-primary">
                Discuss Your Technology Roadmap <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
