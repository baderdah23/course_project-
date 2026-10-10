import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { VideoPlayer } from "@/components/player/VideoPlayer";
import { courses } from "@/data/courses";
import { ActionBar } from "@/components/player/ActionBar";
import { CourseMaterials } from "@/components/materials/CourseMaterials";
import { CommentSection } from "@/components/comments/CommentSection";
import { CurriculumPanel } from "@/components/player/CurriculumPanel";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

const findCourse = (slug: string) =>
  courses.find((course) => course.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = findCourse((await params).slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: course.title,
      description: course.description,
      images: [{ url: course.image }],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const course = findCourse((await params).slug);
  if (!course) notFound();

  return (
    <main id="main">
      <PageHeader
        title={course.title}
        className="mb-6"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/#courses" },
              { label: "Course Details" },
            ]}
          />
        }
      />
      <Container>
        <div className="flex min-w-0 flex-col gap-6">
          <VideoPlayer
            slug={course.slug}
            videoId={course.video.id}
            title={course.video.title}
            poster={course.image}
          />
          <ActionBar />
          <div className="mt-10 flex flex-col gap-16">
            <CourseMaterials course={course} />
            <CommentSection slug={course.slug} />
          </div>
        </div>
        {/* Topics column*/}
        <aside className="min-w-0">
          <CurriculumPanel course={course} />
        </aside>
      </Container>
    </main>
  );
}
