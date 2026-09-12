import type { Technology } from "../../Types/Technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={icon}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-semibold text-pink-600">
          {badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
        {description}
      </p>

      {/* Category */}
      <div className="mt-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-600">
          {category}
        </span>
      </div>

      {/* Difficulty + Rating */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[10px] text-slate-400">
            Difficulty
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-700">
            {difficulty}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-slate-400">
            Rating
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-700">
            ⭐ {rating}
          </p>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-xs font-semibold text-white shadow-sm transition duration-200 ${isAdded
          ? "cursor-not-allowed bg-slate-300"
          : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:-translate-y-0.5 hover:shadow-md"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;