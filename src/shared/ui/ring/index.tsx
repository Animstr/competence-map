interface RingProp {
    children?: React.ReactNode;
    clName: string;
}

export const Ring = ({children, clName}: RingProp) => {
    
    return ( 
        <div className={clName}>
            {children}
        </div>
    );
}