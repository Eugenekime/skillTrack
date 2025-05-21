import { create } from "zustand";

export const useSkillStore = create((set, get) => ({
  skills: JSON.parse(localStorage.getItem("skills")) || [],
  addSkill: (skill) => {
    const added = [...get().skills, skill];
    localStorage.setItem("skills", JSON.stringify(added));
    set({ skills: added });
  },
  removeSkill: (id) => {
    const removed = get().skills.filter((skill) => skill.id !== id);
    localStorage.removeItem("skills", JSON.stringify(removed)),
      set({ skills: removed });
  },
  toggleCompleted: (id) => {
    const updated = get().skills.map((skill) =>
      skill.id === id ? { ...skill, completed: !skill.completed } : skill
    );
    localStorage.setItem("skills", JSON.stringify(updated));
    set({
      skills: updated,
    });
  },
  filter: "all",
  setFilter: (value) => set({ filter: value }),
}));
