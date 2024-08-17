export function ServicePill({ description, title, Icon }) {
  return (
    <div className="border-none bg-background rounded-3xl p-8 flex flex-col gap-2 h-full">
      <Icon className="w-10 h-10" />
      <h3 className="font-bold text-4xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}
