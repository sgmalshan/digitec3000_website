import { BackgroundBeamsDemo } from "@/components/custom/background-beam";
import { AnimatedTooltipPreview } from "@/components/custom/people-section";
import { ContactUsForm } from "@/components/ui/contact-form";

export default function Page() {
  return (
      <BackgroundBeamsDemo>
        <div className="relative z-10 grid md:grid-cols-2 items-center min-h-screen gap-4">
          <ContactUsForm />
          <span>
            <AnimatedTooltipPreview />
          </span>
        </div>
      </BackgroundBeamsDemo>
  );
}
