import { Card } from "@/components/ui/card";

type ExplorerLimitationsCardProps = {
  title: string;
  canHelpWith: string[];
  cannotTellYou: string[];
};

export function ExplorerLimitationsCard({
  title,
  canHelpWith,
  cannotTellYou,
}: ExplorerLimitationsCardProps) {
  return (
    <Card className="border-slate-200 bg-white">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Safe use
      </p>

      <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="font-semibold text-emerald-900">
            This can help you with
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-900">
            {canHelpWith.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-900">
            This cannot tell you alone
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
            {cannotTellYou.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}