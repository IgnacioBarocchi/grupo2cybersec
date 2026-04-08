import { TitleSlide } from "@/components/slides/TitleSlide";
import { WhatIsSlide } from "@/components/slides/WhatIsSlide";
import { WhyImportantSlide } from "@/components/slides/WhyImportantSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { TransitionSlide } from "@/components/slides/TransitionSlide";
import { OrganizationSlide } from "@/components/slides/OrganizationSlide";
import { TeamsSlide } from "@/components/slides/TeamsSlide";
import { TrendsSlide } from "@/components/slides/TrendsSlide";
import { DepthTrendsSlide } from "@/components/slides/DepthTrendsSlide";
import { RoadmapSlide } from "@/components/slides/RoadmapSlide";
import { SkillsSlide } from "@/components/slides/SkillsSlide";
import { CertificationsSlide } from "@/components/slides/CertificationsSlide";
import { StatsSlide } from "@/components/slides/StatsSlide";
import { RolesSlide } from "@/components/slides/RolesSlide";
import { ConclusionSlide } from "@/components/slides/ConclusionSlide";
import { FeedbackSlide } from "@/components/slides/FeedbackSlide";

const allSlides = [
  { id: "title", component: TitleSlide },
  { id: "whatis", component: WhatIsSlide },
  { id: "whyimportant", component: WhyImportantSlide },
  { id: "timeline", component: TimelineSlide },
  { id: "transition", component: TransitionSlide },
  { id: "organization", component: OrganizationSlide },
  { id: "teams", component: TeamsSlide },
  { id: "trends", component: TrendsSlide },
  { id: "depthtrends", component: DepthTrendsSlide },
  { id: "roadmap", component: RoadmapSlide },
  { id: "skills", component: SkillsSlide },
  { id: "certifications", component: CertificationsSlide },
  { id: "stats", component: StatsSlide },
  { id: "roles", component: RolesSlide },
  { id: "conclusion", component: ConclusionSlide },
  { id: "feedback", component: FeedbackSlide },
];

export default function PdfPage() {
  return (
    <main className="bg-background">
      {allSlides.map((slide) => {
        const SlideComponent = slide.component;
        return (
          <section
            key={slide.id}
            className="print:break-after-page last:print:break-after-auto"
          >
            <SlideComponent />
          </section>
        );
      })}
    </main>
  );
}
