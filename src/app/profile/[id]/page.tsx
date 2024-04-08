export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2">
      <h1>Profile</h1>

      <p className="text-2xl">
        Profile Page
        <span className="p-2 ml-2 rounded bg-orange-500 text.black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
