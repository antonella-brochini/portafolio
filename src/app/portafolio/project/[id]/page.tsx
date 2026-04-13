import { projectsMeta } from "../../../data/projects";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  return projectsMeta.map((project) => ({
    id: String(project.id),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectPageClient projectId={id} />;
}
