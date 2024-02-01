import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>): Promise<NextApiResponse<Response>> => {
    const country = req.query.country as string;

    try {
        const response = await fetch(`https://api-us.exoticca.com/api/landing/v2/country/${country}`);

        if (!response.ok) {
            const errorMessage = `Error fetching data by "${country}".`;
            return res.status(400).end(JSON.stringify({ error: errorMessage }));
        }

        return res.status(200).end(JSON.stringify(await response.json()));
    } catch (error) {
        return res.status(500).end(JSON.stringify({ error }));
    }
};

export default handler;
