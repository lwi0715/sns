type Props = {
  image: string | null;
};
export default function UserAvatar({ image }: Props) {
  return (
    <div className="w-11 h-11 rounded-full">
      <img
        src={image ?? undefined}
        alt="User Avatar"
        className="rounded-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
