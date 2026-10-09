import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { courses } from "@/data/courses";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE.url}/courses/${course.slug}`,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.description,
      provider: { "@type": "Organization", name: SITE.name },
    },
  })),
};

export default function HomePage() {
  return (
    <main id="main">
      <PageHeader
        title="Courses"
        description="Start something new or pick up where you left off."
      />
      <Container>
        <CourseGrid courses={courses} />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
