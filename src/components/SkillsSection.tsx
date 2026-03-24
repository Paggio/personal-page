import { Badge } from "@/components/retroui/Badge";
import { skills } from "@/data/cv";

export function SkillsSection() {
  return (
    <div>
      <h2 className="mb-6 border-b-2 border-black pb-3 text-3xl font-black uppercase tracking-tight">
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-black/50">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  size="sm"
                  className="border-2 border-black font-mono"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
