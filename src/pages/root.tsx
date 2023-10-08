import React from 'react';

import {Header, Body, AboutUs, KeyMembers, Footer} from 'components';
import { KeyMember } from 'types';

export default function Root () {
    let keymembers: KeyMember[] = [
        {
            name: "Gavlna",
            role: "Lead Developer",
            description: "idk some shits etc. etc. really just some shit I am too lazy to google lorem ipsum",
            imagePath: "/img/gavlnaprofile.webp"
        },
        
        {
            name: "Gavlna",
            role: "Lead Developer",
            description: "idk some shits etc. etc. really just some shit I am too lazy to google lorem ipsum",
            imagePath: "/img/gavlnaprofile.webp"
        },
        
        {
            name: "Gavlna",
            role: "Lead Developer",
            description: "idk some shits etc. etc. really just some shit I am too lazy to google lorem ipsum",
            imagePath: "/img/gavlnaprofile.webp"
        }
    ];
    return <>
        <Header/>
        <Body>
            <AboutUs/>
            <KeyMembers members={keymembers}/>
        </Body>
        <Footer/>
    </>
}
