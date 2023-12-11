import {RedirectButtonPropsType} from "./types";
import '@/app/styles/buttons/redirect-button.scss'

const RedirectButton = ({ label, url, fontSize }: RedirectButtonPropsType) => {
    const style = {
        fontSize: fontSize || 16
    }

    const redirectTo = () => {
        console.log(`You redirected to ${url}`);
        if (url.includes('youtube')) location.href = url;
    };

    return (
        <div className='button' onClick={() => redirectTo()}>
            <p style={style}>{ label }</p>
        </div>
    );
}

export default RedirectButton