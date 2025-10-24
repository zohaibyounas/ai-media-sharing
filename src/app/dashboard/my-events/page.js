// app/dashboard/create-event/page.js
import MyEvents from "@/components/MyEvents";
export default function CreateEventPage() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <MyEvents />
    </div>
  );
}
