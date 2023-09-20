type Props = {
  text: string;
  onClick: () => void;
  bgColor: string;
  size?: "normal" | "large";
};

export default function Button({
  text,
  onClick,
  bgColor,
  size = "normal",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        size === "large" ? "p-8 text-xl" : "p-4"
      } ${bgColor} text-white font-bold hover:opacity-80 transition-opacity`}
    >
      {text}
    </button>
  );
}
