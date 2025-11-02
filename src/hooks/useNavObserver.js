import { useEffect } from "react";

export default function useNavObserver(sectionIds) {
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.getElementById(`${entry.target.id}-link`);
          if (!link) return;
          if (entry.isIntersecting) {
            link.style.textDecoration = "underline";
            link.style.textDecorationColor = "#64FFDA";
            link.style.textUnderlineOffset = "10px";
          } else {
            link.style.textDecoration = "none";
            link.style.textDecorationColor = "initial";
            link.style.textUnderlineOffset = null;
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds.join(",")]);
}
