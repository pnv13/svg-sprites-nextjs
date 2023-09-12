import { Icon, SPRITES_META } from '@/shared/ui/icon';

export default function Home() {
  return (
    <>
      <div className="py-8 flex flex-wrap gap-8 justify-center">
        {SPRITES_META.sprite.map(name => (
          <Icon
            key={name}
            name={name}
            className="rounded-xl border-neutral-700 border bg-neutral-900/50 p-5 text-4xl text-white shadow-lg shadow-neutral-50/10"
          />
        ))}
      </div>
      <Icon
        name="add"
      />
    </>
  );
}