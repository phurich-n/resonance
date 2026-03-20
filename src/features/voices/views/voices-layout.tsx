import { PageHeader } from "@/components/page-header";

export function VoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <PageHeader title="Voices" />
      {children}
    </div>
  );
}
