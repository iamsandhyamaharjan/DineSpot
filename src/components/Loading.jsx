export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      {/* Message */}
      <p className="mt-4 text-gray-700 text-lg">{message}</p>
    </div>
  );
}