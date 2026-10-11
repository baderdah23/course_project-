import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommentSection } from "@/components/comments/CommentSection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CourseMaterials } from "@/components/materials/CourseMaterials";
import { ActionBar } from "@/components/player/ActionBar";
import { CurriculumPanel } from "@/components/player/CurriculumPanel";
import { VideoPlayer } from "@/components/player/VideoPlayer";
import { courses } from "@/data/courses";

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
        <div className="grid gap-(--layout-gap) pb-20 lg:grid-cols-[minmax(0,864fr)_minmax(0,468fr)]">
          <div className="flex min-w-0 flex-col gap-6">
            <VideoPlayer
              slug={course.slug}
              videoId={course.video.id}
              title={course.video.title}
              poster={course.image}
            />
            <ActionBar slug={course.slug} courseTitle={course.title} />
            <div className="mt-10 flex flex-col gap-16">
              <CourseMaterials course={course} />
              <CommentSection slug={course.slug} />
            </div>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
            <CurriculumPanel course={course} />
          </aside>
        </div>
      </Container>
    </main>
  );
}
