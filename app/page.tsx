import { PrayerTimesDisplay } from "@/src/components/prayer-times";

export default function Home() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Horizontal Layout (Default Location: Mecca)
        </h2>
        <PrayerTimesDisplay layout="horizontal" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Vertical Layout (New York City)
        </h2>
        <PrayerTimesDisplay layout="vertical" latitude={40.7128} longitude={-74.006} />
      </div>
    </div>
  );
}
