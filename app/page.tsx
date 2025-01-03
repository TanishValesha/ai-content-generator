import FeatureCard from "@/components/FeatureCard";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Brain, Clock, Zap } from "lucide-react";
import HomeButton from "@/components/HomeButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={0.5}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12"
          )}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
          <TextAnimate
            animation="blurInUp"
            by="character"
            startOnView={false}
            duration={0.5}
            className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight"
          >
            {/* <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight"> */}
            Create Amazing Content with AI Magic
            {/* <span className="text-indigo-600"> AI Magic</span>
            </h1> */}
          </TextAnimate>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your ideas into engaging content in seconds. Our
            AI-powered platform helps you create blog posts, social media
            content, and more with just a few clicks.
          </p>
          <HomeButton />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Features
            </h2>
            <p className="text-gray-600">
              Everything you need to create outstanding content
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="Lightning Fast"
              description="Generate high-quality content in seconds, not hours"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered"
              description="Advanced AI models trained on millions of high-quality articles"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-indigo-600" />}
              title="Time-Saving"
              description="Focus on what matters while AI handles the content creation"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
