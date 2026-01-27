
import { ScheduleGrid } from "@/components/schedule-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Employee Schedule - Weekly</h1>
            <p className="text-muted-foreground mt-1">
              Time Period: Next Schedule Period • Executed on: 1/26/2026
            </p>
          </div>
          <div className="bg-card border p-3 rounded-lg text-sm shadow-sm">
            <div className="font-semibold text-primary">RedBerry Restaurants</div>
            <div className="text-muted-foreground text-xs">JM101005 Front St.</div>
          </div>
        </header>

        <ScheduleGrid />

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          Created by: Emmanuel
        </footer>
      </div>
    </main>
  );
}
