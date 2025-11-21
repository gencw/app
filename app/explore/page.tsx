export default async function Explore() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return (
    <ul className="px-10">
      {users.map((post: any) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
