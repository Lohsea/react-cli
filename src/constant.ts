/*
 * @Description: 
 * @Author: lixin
 * @Date: 2021-08-27 11:52:05
 * @LastEditTime: 2021-08-30 14:32:43
 * 
 */
import kyc from "./images/kyc.svg";
import rt from "./images/rt.svg";
import cs from "./images/cs.svg";
import rc from "./images/rc.svg";
import kycHover from "./images/kyc_hover.svg";
import rtHover from "./images/rt_hover.svg";
import csHover from "./images/cs_hover.svg";
import rcHover from "./images/rc_hover.svg";

export const CardInfo = [
    {
        img: kyc,
        imgHover: kycHover,
        url: './kyc',
        title: 'KYC',
        subTitle: 'Upload your entity proof onchain'
    },
    {
        img: rt,
        imgHover: rtHover,
        url: './rt',
        title: 'Regulated Transfer',
       
        subTitle: 'Transfer between two entities'
    },
    {
        img: rc,
        imgHover: rcHover,
        url: './rc',
        title: 'Regulated Crowdfunding',
        subTitle: 'Participate onchain crowdfunding with real-world investment entities'
    },
    {
        img: cs,
        imgHover: csHover,
        url: '',
        title: 'Coming Soon',
        subTitle: 'More regulated Dapps are on the way'
    }

]