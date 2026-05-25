import { Download, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { cvMeta } from "@/data/cv";

export function Hero() {
  return (
    <section className="border-b-2 bg-accent px-6 py-12 md:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Name & tagline */}
        <div className="mb-8">
          <h1 className="mb-2 text-5xl font-black uppercase tracking-tight md:text-7xl">
            {cvMeta.name}
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest text-black/70 md:text-2xl">
            {cvMeta.tagline}
          </p>
        </div>

        {/* Contact row */}
        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${cvMeta.email}`}
            className="flex items-center gap-1.5 font-mono text-sm font-semibold hover:underline"
          >
            <Mail size={15} />
            {cvMeta.email}
          </a>
          <a
            href={`https://linkedin.com/in/${cvMeta.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-sm font-semibold hover:underline"
          >
            <Linkedin size={15} />
            {cvMeta.linkedin}
          </a>
          <span className="flex items-center gap-1.5 font-mono text-sm font-semibold">
            <MapPin size={15} />
            {cvMeta.location}
          </span>
          <a
            href={`https://github.com/${cvMeta.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-sm font-semibold hover:underline"
          >
            <Github size={15} />
            {cvMeta.github}
          </a>
        </div>

        {/* Download button */}
        <a href={`${import.meta.env.BASE_URL}CV_2026.pdf`} download>
          <Button size="lg" className="gap-2 uppercase tracking-wider">
            <Download size={18} />
            Download CV
          </Button>
        </a>
      </div>
    </section>
  );
}
