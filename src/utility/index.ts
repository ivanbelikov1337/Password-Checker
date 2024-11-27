type Signature = 'easy' | 'medium' | 'strong' | 'short' | 'empty'

const checks = (password:string) => {
    return [
        /[!@#$%^&*(),.?":{}|<>]/.test(password),
        /[a-zA-Z-а-юА-Ю]/.test(password),
        /\d/.test(password),].filter(Boolean).length
}


const checkStrength = (password: string): Signature => {
    if (!password.trim()) return 'empty';
    if (password.length < 8) return 'short';
    return checks(password) === 3 ? 'strong' : checks(password) === 2 ? 'medium' : 'easy';
};

const colorMap: Record<string, string[]> = {
    empty: ['gray', 'gray', 'gray'],
    short: ['red', 'red', 'red'],
    easy: ['red', 'gray', 'gray'],
    medium: ['yellow', 'yellow', 'gray'],
    strong: ['green', 'green', 'green'],
};

export const getSectionColor = (section: number, password: string): string => {
    return colorMap[checkStrength(password)]?.[section - 1] ?? 'gray';
}