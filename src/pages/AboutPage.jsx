import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  Award,
  Sparkles,
  Rocket,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              About Us
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Innovating the <span className="text-gradient">Future</span> of
              Technology
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in digital transformation and IT excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Who We Are */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technorain Solutions is a leading IT services provider dedicated
                to empowering businesses through innovative technology
                solutions. With over 9 years of experience, we've helped
                numerous organizations transform their operations and achieve
                their digital goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of 20+ IT professionals brings deep expertise across
                software development, cloud computing, cybersecurity, and
                business intelligence. We don't just provide services – we
                become your strategic technology partner, committed to your
                long-term success.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <Target className="w-8 h-8 text-background" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To deliver cutting-edge IT solutions that drive business
                    growth, enhance operational efficiency, and create lasting
                    value for our clients through innovation, expertise, and
                    unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="relative container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Technorain</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "20+ IT professionals with deep industry knowledge and certifications",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Award,
                title: "Proven Experience",
                description:
                  "9+ years delivering successful projects across various industries",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Quality Focus",
                description:
                  "100% client satisfaction rate through excellence and attention to detail",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Rocket,
                title: "Innovation",
                description:
                  "Cutting-edge solutions tailored to your unique business needs",
                color: "from-green-500 to-cyan-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "9+", label: "Years in Business" },
                { value: "50+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "20+", label: "Team Members" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center glass-effect rounded-2xl p-4 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2 md:mb-3 group-hover:scale-110 transition-transform break-words">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Work <span className="text-gradient">Together?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed in the digital
              age
            </p>

            <Button
              size="lg"
              onClick={() => handleNavigation("/contact")}
              className="text-base px-8 py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
