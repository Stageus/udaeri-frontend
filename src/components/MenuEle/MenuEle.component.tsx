import React from 'react';
import { MenuEleWrap, MenuName, ContentWrap, MenuDes, MenuPrice, MenuThumbnail } from './MenuEle.Style';

interface Props {
    menuName : string;
    menuDes : string;
    menuPrice : string;
}

const MenuEle = ({ menuName, menuDes, menuPrice } : Props) : JSX.Element => {
    return (
        <MenuEleWrap>
            <ContentWrap>
                <MenuName>
                    {menuName}
                </MenuName>
                <MenuDes>
                    {menuDes}
                </MenuDes>
                <MenuPrice>
                    {menuPrice}
                </MenuPrice>
            </ContentWrap>
            <MenuThumbnail>

            </MenuThumbnail>
        </MenuEleWrap>
    )
}

export default MenuEle;
