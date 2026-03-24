import { Card } from "@/components/retroui/Card";
import { education } from "@/data/cv";

export function EducationSection() {
  return (
    <div>
      <h2 className="mb-6 border-b-2 border-black pb-3 text-3xl font-black uppercase tracking-tight">
        Education
      </h2>
      <div className="flex flex-col gap-4">
        {education.map((entry) => (
          <Card
            key={entry.degree}
            className="w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Card.Header className="border-b-2 border-black bg-secondary">
              <Card.Title className="text-base font-black uppercase">
                {entry.degree}
              </Card.Title>
              <p className="font-bold">{entry.institution}</p>
            </Card.Header>
            <Card.Content className="pt-3">
              <p className="font-mono text-sm">{entry.period}</p>
              {entry.note && (
                <p className="mt-1 text-sm text-black/60">{entry.note}</p>
              )}
              <p className="mt-2 font-black">Grade: {entry.grade}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}
