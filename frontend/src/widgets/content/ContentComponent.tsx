import '@/app/styles/content/content.scss';
import {ContentStruct} from "./struct/content.ts";
import {ContentType} from "./types";
import GetConsalting from "../../features/GetConsalting.tsx";
import {useEffect, useState} from "react";

const ContentComponent = () => {
    const [ mobileVersion, setMobileVersion ] = useState(false);

    useEffect(() => {
        setMobileVersion(window.screen.width < 576);
        console.log(mobileVersion);
    }, [mobileVersion]);

    return (
        <div className="content">
            <div>
                <h1 className="content__title">
                    Зарабатывайте больше
                </h1>
                <h1 className="content__title-gradient">с WELBEX</h1>
                <h2>Развиваем и контролируем продажи за вас</h2>
            </div>
            <div className="spacer"></div>
            <div>
                <h2 className="content__text">Вместе с <span className="content__text-gradient">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span>  мы дарим:</h2>
                <div className="content__text-describe">
                    {
                        ContentStruct.map((content: ContentType) => {
                            return (
                                <div className="content__text-describe-point">
                                    <h2>{ content.label }</h2>
                                    { !mobileVersion ? <p>{ content.description }</p> : null }
                                </div>
                            )
                        })
                    }
                </div>
                { !mobileVersion ? <GetConsalting /> : null }
            </div>
        </div>
    )
}

export default ContentComponent;