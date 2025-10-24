// app/dashboard/create-event/page.js
import CreateEventForm from "@/components/CreateEventForm";

export default function CreateEventPage() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <CreateEventForm />
    </div>
  );
}
