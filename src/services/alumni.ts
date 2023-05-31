import * as alumniRepo from "../repositories/alumni";

export async function getAllAlumni() {
    try {
        const alumni = await alumniRepo.getAllAlumni();
        
        if (!alumni || alumni == null || alumni.length == 0) {
            
            throw {
                error: "No alumni found, please try again",
                status: 404
            };
        }

        return alumni;
    } catch (error) {
        console.error("getAllAlumniService:", error);
        throw error;
    }
}
