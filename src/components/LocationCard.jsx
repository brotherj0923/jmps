export default function LocationCard({ name }) {
  return (
    <button className="px-20 py-14 text-xl bg-white rounded-xl shadow-lg hover:bg-blue-200 transition font-semibold">
      {name}
    </button>
  );
}