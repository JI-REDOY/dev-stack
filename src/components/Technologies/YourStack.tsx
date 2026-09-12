import type { Technology } from "../../Types/Technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {selectedTechnologies.length} Technology
            {selectedTechnologies.length !== 1 ? "s" : ""} Selected
          </p>
        </div>

        {/* Stack Count */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-xs font-bold text-pink-600">
          {selectedTechnologies.length}
        </div>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-50">
            <span className="text-lg text-slate-300">+</span>
          </div>

          <p className="mt-3 text-sm font-semibold text-slate-600">
            Your stack is empty
          </p>

          {/* ✅ Fixed: max-w-[190px] → max-w-48 */}
          <p className="mx-auto mt-1 max-w-48 text-[11px] leading-5 text-slate-400">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 flex flex-col gap-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"
              >
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-semibold text-slate-800">
                    {technology.name}
                  </h4>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;