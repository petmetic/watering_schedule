import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watering Schedule",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Hello world! This is the beginning of the Watering Schedule App...
      </h1>
    </main>
  );
}
