import { ExternalLink } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { publications } from "@/data/cv";

export function PublicationsSection() {
  return (
    <section className="px-6 py-12 md:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 border-b-2 border-black pb-3 text-3xl font-black uppercase tracking-tight">
          Publications
        </h2>
        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <div
              key={pub.url}
              className="border-2 border-black bg-card p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-black/50">
                {pub.year} · {pub.institution}
              </p>
              <p className="mb-4 font-bold leading-snug">{pub.title}</p>
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <ExternalLink size={14} />
                  arXiv
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
