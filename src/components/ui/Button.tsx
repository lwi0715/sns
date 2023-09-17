type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button className="p-4 bg-red-400 dark:bg-slate-500 text-white font-bold hover:opacity-80 transition-opacity">
      {text}
    </button>
  );
}
