import { TextToSpeechDetailView } from "@/features/text-to-speech/views/text-to-speech-detail-view";
import { trpc, HydrateClient, prefetch } from "@/trpc/server";

export default async function TextToSpeechDetailPage({
  params,
}: {
  params: Promise<{ generationId: string; }>;
}) {
  const { generationId } = await params;

  prefetch(trpc.genetaions.getById.queryOptions({ id: generationId }));

  prefetch(trpc.voices.getAll.queryOptions());

  prefetch(trpc.genetaions.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechDetailView generationId={generationId} />
    </HydrateClient>
  );
}
