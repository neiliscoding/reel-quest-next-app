import type { FC } from 'react';
import Link from 'next/link';

interface MenuItemProps {
    title: string;
    address: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, address }) => {
    return (<li className="nav-item">
        <a className="nav-link active" href="address">
            {title}
        </a>
    </li>);
}
export default MenuItem;