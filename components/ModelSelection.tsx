"use client";
import useSWR from "swr";
import Select from "react-select";
import { useId } from "react";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo",
  });

  return (
    <div className="mt-2">
      <Select
        instanceId={useId()}
        options={models?.modelOptions}
        className="mt-2"
        defaultValue={model}
        placeholder={model}
        isSearchable
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
