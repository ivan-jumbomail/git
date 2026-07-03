function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="container">
      <aside className="sidebar">
        <p>Sidebar</p>
      </aside>
      <main className="main">
        <p>Main</p>
        <ul className="list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
