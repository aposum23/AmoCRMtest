import { useEffect, useState } from "react";
import {HeaderButtonsStuct} from "./struct";
import {ButtonType} from "../../app/types/buttons.ts";
import RedirectButton from "../../shared/buttons/RedirectButton.tsx";
import Welbex from '@/app/images/welbex.svg';
import Telegram from '@/app/images/telegram.svg';
import Viber from '@/app/images/viber.svg';
import Whatsapp from '@/app/images/whatsapp.svg';

import '@/app/styles/header/header.scss';

const HeaderComponent = () => {
    const [ mobileVersion, setMobileVersion ] = useState(false);

    useEffect(() => {
        setMobileVersion(window.screen.width < 576);
        console.log(mobileVersion);
    }, [mobileVersion]);

    return (
        <div className='header'>
            {!mobileVersion ?
                <div className="header__logo">
                    <img src={Welbex} alt="Welbex logo"/>
                    <p>крупный интегратор CRM в России и ещё 8 странах</p>
                </div>
                : null
            }
            {
                HeaderButtonsStuct.map((button: ButtonType) => {
                    if (!button.deleteInMobile) return (<RedirectButton label={button.label} url={button.url} key={button.url}/>);
                })
            }
            {!mobileVersion ?
                <>
                    <div className="spacer"></div>
                    <p>+7 555 555-55-55</p>
                    <img src={Telegram} alt="Telegram" />
                    <img src={Viber} alt="Viber" />
                    <img src={Whatsapp} alt="Whatsapp" />
                </>
                : null
            }
        </div>
    )
}

export default HeaderComponent