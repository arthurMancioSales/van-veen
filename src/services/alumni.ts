import * as alumniRepo from "../repositories/alumni";

export async function getAllAlumni() {
    try {
        const alumni = await alumniRepo.getAllAlumni();

        if (!alumni || alumni === null || alumni.length === 0) {
            throw new Error("No alumni found, please try again");
        }

        return alumni;
    } catch (error) {
        console.error("getAllAlumniService:", error);
        throw error;
    }
}
