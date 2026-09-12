import { toast } from "react-toastify";
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

  // Warning when user tries to add an already added technology
  const handleAlreadyAdded = () => {
    toast.warning(`${name} is already in your stack!`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top Section */}
      <div className="flex items-start justify-between gap-3">
        
        {/* Technology Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={icon}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-semibold text-pink-600">
          {badge}
        </span>
      </div>

      {/* Technology Name */}
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
        
        {/* Difficulty */}
        <div>
          <p className="text-[10px] text-slate-400">
            Difficulty
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-700">
            {difficulty}
          </p>
        </div>

        {/* Rating */}
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
      <div className="relative mt-5">

        {/* 
          When the technology is already added,
          this invisible button stays above the disabled button
          and catches the click for the warning toast.
        */}
        {isAdded && (
          <button
            type="button"
            onClick={handleAlreadyAdded}
            className="absolute inset-0 z-10 w-full cursor-not-allowed rounded-xl"
            aria-label={`${name} is already added`}
          />
        )}

        <button
          type="button"
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`w-full rounded-xl py-2.5 text-xs font-semibold shadow-sm transition duration-200 ${
            isAdded
              ? "cursor-not-allowed bg-slate-300 text-slate-500"
              : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:-translate-y-0.5 hover:shadow-md"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;