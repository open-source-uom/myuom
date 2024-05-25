import { AnnouncementsData, Announcement } from "../assets/data/announcements";

export const useAnnouncementLink = (depCode: string | null): Announcement | null => {
    if (!depCode) return null;

    const link: Announcement | undefined = AnnouncementsData.find(dep => dep.code === depCode);

    if (!link) return null;

    return link;
};
