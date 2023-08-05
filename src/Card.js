export default function Card({userData}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md bg-cyan-500">
      <img
        src={userData.avatar_url}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4 "
      />
      <p className="text-xl font-semibold">{userData.name}</p>
      <p className="text-gray-600">@{userData.login}</p>
      <div className="mt-4 p-1 bg-cyan-100 ">
        <p>Public Repos: {userData.public_repos}</p>
        <p>Public Gists: {userData.public_gists}</p>
        <p>Profile Created At: {userData.created_at}</p>
      </div>
    </div>
  );
}
