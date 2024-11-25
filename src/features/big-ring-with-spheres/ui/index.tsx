import { useEffect, useState } from 'react';
import { Ring, Sphere, TextArea } from '../../../shared';

import s from './styles.module.scss';
import { useSkillsService } from '../service/skills-service';
type Skills = string[];

export const BigRingWithSpheres= () => {
    const [skills, setSkills] = useState<Skills>([])
    const {getAllSkills} = useSkillsService();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        getAllSkills()
            .then((data: string[]) => setSkills(data))
    }

    const circles = skills.map((item, i) => {
        const click = () => {
            
        }
        return (
            <Sphere key={i} theme={s.outer} active={s.active} click={click}/>
        )
    })  

    const content = skills.map((item, i) => {

        return (
            <TextArea key={i} text={item} theme={s.text}/>
        )
    })
   
    return (
        <div className={s.invisible_ring}>
            <Ring clName={s.big}>
                {circles}
            </Ring>
            {content}
        </div>
    )
}