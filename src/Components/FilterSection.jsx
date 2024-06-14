import React from "react";

function FilterSection({ children }) {
  return (
    <aside className="border-r mt-10 w-[250px] hidden sm:block">
      {children}
    </aside>
  );
}

export default FilterSection;
