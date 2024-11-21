type Signature = 'easy' | 'medium' | 'strong' | 'short' | 'empty'

//In this fn we need a check and valid our pass, should return one of signature
const checkStrength = (password: string): Signature => {
    const hasLetters = /[a-zA-Z-а-юА-Ю]/.test(password); //Check if pass has a letters
    const hasDigits = /\d/.test(password); //Check if pass has any nums
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password); //Check if pass has any symbol


    if (!password || password.trim() === "") return 'empty'
    else if (password.length < 8) return 'short'
    else if (hasLetters && hasDigits && hasSymbols) return 'strong';
    else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasSymbols && hasDigits)) return 'medium';

    return 'easy';
};

//Inside this fn we can pick one of a color gray, red, yellow, green
// using our aforementioned fn validation checkStrength.
export const getSectionColor = (section: number, password: string): string => {
    const strength = checkStrength(password);

    if (strength === 'empty') return 'gray';
    else if (strength === 'short') return 'red';
    else if (strength === 'easy') return section === 1 ? 'red' : 'gray';
    else if (strength === 'medium') return section <= 2 ? 'yellow' : 'gray';
    else if (strength === 'strong') return 'green';

    return 'gray';
};