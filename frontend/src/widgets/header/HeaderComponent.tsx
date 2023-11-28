import {HeaderButtonsStuct} from "./struct";
import {ButtonType} from "./types";
import RedirectButton from "../../shared/buttons/RedirectButton.tsx";

import '@/app/styles/header/header.scss';

const HeaderComponent = () => {

    return (
        <div className='wrapper'>
            {
                HeaderButtonsStuct.map((button: ButtonType) => {
                    return (<RedirectButton label={button.label} url={button.url} key={button.url}/>)
                })
            }
            <p>+7 555 555-55-55</p>
        </div>
    )
}

export default HeaderComponent