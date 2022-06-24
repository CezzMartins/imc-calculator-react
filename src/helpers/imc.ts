import { Level } from "../types/imcType"

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5]},
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9]},
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]},
]

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);
    for(let item in levels){
        if(imc >= levels[item].imc[0] && imc <= levels[item].imc[1]){
            levels[item].imcLevel = parseFloat(imc.toFixed(2));
            return levels[item];
        }
    }
    return null;
}