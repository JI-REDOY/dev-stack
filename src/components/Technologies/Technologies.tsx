import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { Technology } from "../../Types/Technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { BRAND_GRADIENT_TEXT } from "../../theme/gradient";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`, {
        toastId: `dup-${technology.id}`,
      });
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);

    toast.success(`${technology.name} added to your stack!`, {
      toastId: `add-${technology.id}`,
    });
  };

  const handleRemove = (id: string) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`, {
        toastId: `remove-${id}`,
      });
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.info("Your stack is already empty.", {
        toastId: "empty-stack",
      });
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.", {
      toastId: "clear-all",
    });
  };

  return (
    <section
      id="technologies"
      className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className={BRAND_GRADIENT_TEXT}>
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Discover modern technologies and choose the right tools to build
            your next great project.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

              <p className="mt-3 text-sm font-medium text-slate-500">
                Loading technologies...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAddToStack={handleAddToStack}
                  isAdded={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}
            </div>

            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;