const URL = `${process.env.NEXT_PUBLIC_API_URL}/customize/header/announcement-bar`;

const getAnnouncementBar = async (locale) => {
    try {
        const res = await fetch(`${URL}?locale=${locale}`);
        if (!res.ok) {
            return null;
        }
        return res;
    } catch (error) {
        return null;
    }
};

export default getAnnouncementBar;
