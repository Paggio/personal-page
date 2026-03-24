import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { experience } from "@/data/cv";

export function ExperienceSection() {
  return (
    <section className="border-b-2 border-black px-6 py-12 md:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 border-b-2 border-black pb-3 text-3xl font-black uppercase tracking-tight">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((entry) => (
            <Card
              key={`${entry.company}-${entry.period}`}
              className="w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Card.Header className="border-b-2 border-black bg-primary text-primary-foreground">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <img
                        src={`${import.meta.env.BASE_URL}${entry.logo}`}
                        alt={`${entry.company} logo`}
                        className="h-6 w-auto object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                    <Card.Title className="text-xl font-black uppercase">
                      {entry.title}
                    </Card.Title>
                    <p className="font-bold">{entry.company}</p>
                  </div>
                  <div className="text-right font-mono text-sm opacity-80">
                    <p>{entry.period}</p>
                    <p>{entry.location}</p>
                  </div>
                </div>
              </Card.Header>
              <Card.Content>
                <div className="mb-4 space-y-2">
                  {entry.description.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="solid" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
