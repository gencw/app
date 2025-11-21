export default async function fetchFollowers() {
  const data = await fetch("/api/followers");
  const follows = await data.json();
  return follows;
}
