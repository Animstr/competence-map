import { useHttp } from "../hooks/http.hook";

interface Response {
	name: string,
    mainSkills: string[],
    otherSkills: string[]
}

export const useSkillsService = () => {
    const _apiBase = 'http://localhost:3001/';
    const {request} = useHttp();

    const getAllSkills = async () => {
        const res = await request(`${_apiBase}allSkills`);
        
        const skills: string[] = [];

        for (let i = 1; i < 29; i++) {
            skills.push(res[i])
        }

        return skills;
    }
    const getAllPositions = async () => {
        const res: Response[] = await request(`${_apiBase}positions`);

        const positions: string[] = [];

        for (let i = 0; i < res.length; i++) {
            positions.push(res[i].name)
        }

        return positions
    }
    return {
        getAllSkills,
        getAllPositions
    }
}