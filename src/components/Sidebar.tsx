const Sidebar = () => {
  const items = [
    { icon: "📊", label: "Progress" },
    { icon: "📈", label: "Statistic" },
    { icon: "📝", label: "Notes" },
    { icon: "✏️", label: "Highlights" },
  ];

  return (
    <aside className="w-16 bg-white shadow-lg h-screen flex flex-col items-center justify-start gap-6 py-4 fixed right-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-purple-500 transition-all"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-xs font-semibold text-gray-600">{item.label}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
