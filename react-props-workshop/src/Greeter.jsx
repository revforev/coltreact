export default function Greeter({person, from = 'anonymous'}) {
  return (
    <div>
      <h1>Hi there, {person}!</h1>
      <h2>from, {from}</h2>
    </div>
  );
}
