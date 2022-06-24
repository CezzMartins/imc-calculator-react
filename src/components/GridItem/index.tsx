import { Level } from "../../types/imcType";
import styles from './GridItem.module.css';
import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                { item.icon === 'up' && <img src={upImage} alt="icon" width="30"></img>}
                { item.icon === 'down' && <img src={downImage} alt="icon" width="30"></img>}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            { item.imcLevel &&
                <div className={styles.imcLevel}>Seu IMC é de {item.imcLevel} Kg/m²</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC esta entre <strong>{ item.imc[0] }</strong> e <strong>{ item.imc[1] }</strong>
                </>
            </div>
        </div>
    )
}