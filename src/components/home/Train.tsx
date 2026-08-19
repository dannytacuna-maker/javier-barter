import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Train({ dict }: Props) {
  return (
    <section id="schedule" className="scroll-mt-24 border-t border-line bg-elevated py-20 md:py-28">
      <div className="section-pad mx-auto max-w-[1400px]">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {dict.train.eyebrow}
        </p>
        <h2 className="display mt-4 max-w-3xl text-[clamp(2.1rem,4.8vw,3.8rem)] text-ink">
          {dict.train.headline}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {dict.train.support}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {dict.train.classes.map((item) => (
            <div key={item.name} className="border border-line bg-void/50 p-6 md:p-8">
              <h3 className="display text-3xl text-ink">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-xs tracking-[0.18em] uppercase text-muted">
            {dict.train.scheduleTitle}
          </h3>
          <div className="gold-line mt-4 w-full" />
          <ul className="mt-2 divide-y divide-line">
            {dict.train.days.map((day) => (
              <li
                key={day.day}
                className="grid gap-3 py-5 md:grid-cols-[160px_1fr] md:items-start"
              >
                <p className="text-sm font-medium tracking-[0.06em] uppercase text-ink">
                  {day.day}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
                  {day.slots.map((slot) => (
                    <p key={`${day.day}-${slot.time}`} className="text-sm text-muted">
                      <span className="text-ink">{slot.time}</span>
                      <span className="mx-2 text-accent">·</span>
                      {slot.type}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
