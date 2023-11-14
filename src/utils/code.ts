import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let settingsStore: any = (set: any) => ({
	dark: false,
	toggleDarkMode: () => set((state: any) => ({ dark: !state.dark }))
});
let langStore: any = (set: any) => ({
	lang: "",
	setlang: (id: any) => set(() => ({ lang: id }))
});

langStore = devtools(langStore);
langStore = persist(langStore, { name: "langStore" });

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "user_settings" });

export const useSettingsStore = create(settingsStore);
export const useLangStore = create(langStore);
