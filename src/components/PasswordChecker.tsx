import {useState} from 'react';
import {getSectionColor} from "../utility";

const PasswordChecker = () => {
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />

            <div style={{display: 'flex', gap: '10px'}}>
                <div style={{backgroundColor: getSectionColor(1, password), height: '10px', width: '33%'}}/>
                <div style={{backgroundColor: getSectionColor(2, password), height: '10px', width: '33%'}}/>
                <div style={{backgroundColor: getSectionColor(3, password), height: '10px', width: '33%'}}/>
            </div>
        </div>
    );
};

export default PasswordChecker;
