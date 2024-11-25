import { ReactElement, useEffect, useState } from 'react';
import { useSkillsService } from '../../big-ring-with-spheres';
import { Sphere, TextArea, Ring} from '../../../shared';

import s from './styles.module.scss';
import { click } from '@testing-library/user-event/dist/click';

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
        const click = (value: HTMLElement) => {
            const allSpheres = document.querySelectorAll(`.${s.outer}`);

            allSpheres.forEach(sphere => {
                sphere.classList.remove(`${s.active}`)
            })

            value.classList.add(`${s.active}`)
        }
        
        return (
            <Sphere key={i} theme={s.outer} active={s.active} click={click}/>
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