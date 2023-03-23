"use client"
import type { FC } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface MenuItemProps {
    title: string;
    path: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, path }) => {
    const searchParams = useSearchParams();
    const genre  = searchParams.get('genre');

    return (<li className="nav-item">
        <Link className={`nav-link ${
            genre && genre === path? 'active' : ''
        }`} href={`/?genre=${path}`}>
            {title}
        </Link>
    </li>);
}
export default MenuItem;