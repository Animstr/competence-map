import { useEffect, useState } from 'react';
import { useSkillsService } from '../../big-ring-with-spheres';
import { Sphere, TextArea, Ring} from '../../../shared';

import s from './styles.module.scss';

type Positions = string[];

export const SmallRingWithSpheres = () => {
    const [positions, setPositions] = useState<Positions>([])
    const {getAllPositions} = useSkillsService();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        getAllPositions()
            .then((data: string[]) => setPositions(data))
    }

    const circles = positions.map((item, i) => {
        
        return (
            <Sphere key={i} theme={s.outer}/>
        )
    })  

    const content = positions.map((item, i) => {

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