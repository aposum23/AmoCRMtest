import {AboutStruct, MenuStruct} from "./struct/footer.ts";
import {ButtonType} from "../../app/types/buttons.ts";
import RedirectButton from "../../shared/buttons/RedirectButton.tsx";
import Telegram from '@/app/images/telegram.svg';
import Viber from '@/app/images/viber.svg';
import Whatsapp from '@/app/images/whatsapp.svg';

import '@/app/styles/footer/footer.scss';

const FooterComponent = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__about">
                    <h3>О компании</h3>
                    {
                        AboutStruct.map((about: ButtonType) => {
                            return (<RedirectButton label={about.label} url={about.url} />);
                        })
                    }
                </div>
                <div className="footer__menu">
                    <h3>Меню</h3>
                    <div className="footer__menu-points">
                        {
                            MenuStruct.map((point: ButtonType) => {
                                return (<RedirectButton label={point.label} url={point.url} />);
                            })
                        }
                    </div>
                </div>
                <div className="footer__contacts">
                    <h3>Контакты</h3>
                    <p>+7 555 555-55-55</p>
                    <div className="footer__contacts-social">
                        <img src={Telegram} alt="Telegram" />
                        <img src={Viber} alt="Viber" />
                        <img src={Whatsapp} alt="Whatsapp" />
                    </div>
                    <p>Москва, Путевой проезд 3с1, к 902</p>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="spacer"></div>
                <p>&#169;WELBEX 2022. Все права защищены. <a href="">Политика конфиденциальности</a></p>
            </div>
        </>
    )
}

export default FooterComponent