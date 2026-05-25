import Image from "next/image";

type ProfileAvatarProps = {
  name: string;
  avatarUrl: string | null;
  size?: "sm" | "lg";
};

const sizes = {
  sm: { className: "h-16 w-16", px: 64, text: "text-xl" },
  lg: { className: "h-24 w-24", px: 96, text: "text-3xl" },
};

export default function ProfileAvatar({
  name,
  avatarUrl,
  size = "lg",
}: ProfileAvatarProps) {
  const { className, px, text } = sizes[size];

  return (
    <div
      className={`relative ${className} shrink-0 overflow-hidden rounded-full bg-slate-800 ring-1 ring-slate-700`}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={name}
          fill
          sizes={`${px}px`}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden
          className={`flex h-full w-full items-center justify-center bg-slate-800 font-semibold text-slate-300 ${text}`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
