const URL = `${process.env.NEXT_PUBLIC_API_URL}/customize/footer`;

const getFooter = async (locale) => {
    const res = await fetch(`${URL}?locale=${locale}`);

    if (!res.ok) {
        throw new Error(`API footer request unsuccess!: ${res.status}`);
    }


    const text = await res.text();

    return text;
};

export default getFooter;
