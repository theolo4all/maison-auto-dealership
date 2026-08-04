type Props = {
  label: string;
  value: string;
};

export default function Spec({ label, value }: Props) {
  return (
    <div className="rounded-lg bg-zinc-800 p-4">
      <p className="text-sm uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}