import type { Metadata } from "next";
import { projectsMeta, getProjectMeta } from "../../../data/projects";
import ProjectPageClient from "./ProjectPageClient";
import { en } from "../../../../translations/en";
import { SITE_NAME, SITE_URL } from "../../../seo-constants";

export async function generateStaticParams() {
  return projectsMeta.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = getProjectMeta(id);
  const copy = en.projects[id as keyof typeof en.projects];

  if (!meta || !copy) {
    return {
      title: "Project",
      description: `Project not found — ${SITE_NAME}`,
    };
  }

  const title = copy.title;
  const description =
    typeof copy.description[0] === "string"
      ? copy.description[0].slice(0, 160)
      : `${title} — portfolio project by ${SITE_NAME}`;

  const url = `${SITE_URL}/portafolio/project/${id}`;
  const ogImage = meta.images?.[0]
    ? `${SITE_URL}${meta.images[0]}`
    : `${SITE_URL}/img/hero.png`;

  return {
    title,
    description,
    keywords: [title, SITE_NAME, "portfolio", "project"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url,
      type: "article",
      images: [
        {
          url: meta.images?.[0] ?? "/img/hero.png",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectPageClient projectId={id} />;
}
