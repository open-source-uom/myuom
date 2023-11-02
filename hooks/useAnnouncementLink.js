import { AnnouncementsData } from "@/public/static/assets/data/announcements";

export const useAnnouncementLink = (depCode) => {
  if (!depCode) return null;
  const link = AnnouncementsData.find((dep) => dep.code === depCode);
  //this should notify us
  if (!link) return null;
  return link;
};
