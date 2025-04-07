import React, { useEffect, useRef, useState } from "react";
import Tag from "@/components/Tag";
import { tags } from "@/components/Table";

function TagCell() {
  const [expanded, setExpanded] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
        setSelectedTag(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 justify-center items-center rounded-md"
    >
      {expanded ? (
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <Tag
              key={idx}
              text={selectedTag === tag.short ? tag.full : tag.short}
              bgColor={tag.bgColor}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev === tag.short ? null : tag.short,
                )
              }
            />
          ))}
        </div>
      ) : (
        <Tag text="" bgColor="bg-black" onClick={() => setExpanded(true)} />
      )}
    </div>
  );
}

export default TagCell;
