import {HeaderButtonsStuct} from "./struct";
import {ButtonType} from "./types";
import RedirectButton from "../../shared/buttons/RedirectButton.tsx";
import Welbex from '@/app/images/welbex.svg';
import Telegram from '@/app/images/telegram.svg';
import Viber from '@/app/images/viber.svg';
import Whatsapp from '@/app/images/whatsapp.svg';

import '@/app/styles/header/header.scss';

const HeaderComponent = () => {

    return (
        <div className='wrapper'>
            <div className="header__logo">
                <img src={Welbex} alt="Welbex logo"/>
                <p>крупный интегратор CRM в России и ещё 8 странах</p>
            </div>
            {
                HeaderButtonsStuct.map((button: ButtonType) => {
                    return (<RedirectButton label={button.label} url={button.url} key={button.url}/>)
                })
            }
            <div className="spacer"></div>
            <p>+7 555 555-55-55</p>
            <img src={Telegram} alt="Telegram" />
            <img src={Viber} alt="Viber" />
            <img src={Whatsapp} alt="Whatsapp" />
        </div>
    )
}

export default HeaderComponent