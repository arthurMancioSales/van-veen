import { prisma } from "@/db/db";
import IAlumni from "@/interfaces/IAlumni";

export async function getAllAlumni() {
    try {
        const alumni: IAlumni[] = await prisma.alumni.findMany({
            select: { 
                id: true, 
                name: true, 
                country: true,
                approvals: true, 
                upload: { 
                    select: { 
                        link: true 
                    } 
                } 
            }
        });
        
        return alumni;
    } catch (error) {
        console.error("getAllAlumniRepo:", error);
        throw error;
    }
    
}
