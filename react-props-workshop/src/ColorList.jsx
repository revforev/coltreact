export default function ColorList({colors}) {
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors.map((c) => (
          <li style={{color: c, fontSize: '2em'}}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
