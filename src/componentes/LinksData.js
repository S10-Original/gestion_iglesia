import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyBill, FaUser, FaUserTie, FaPlaceOfWorship, FaClipboardList } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md"

export const LinksData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Miembros',
        path: '/miembros',
        icon: <FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Personal',
        path: '/personal',
        icon: <FaUserTie />,
        cName: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/usuarios',
        icon: <RiAdminFill />,
        cName: 'nav-text'
    },
    {
        title: 'Cargos',
        path: '/cargos',
        icon: <MdOutlineWork />,
        cName: 'nav-text'
    },
    {
        title: 'Ingresos-Egresos',
        path: '/ingresosegresos',
        icon: <FaMoneyBill />,
        cName: 'nav-text'
    },
    {
        title: 'Ministerios',
        path: '/ministerios',
        icon: <FaPlaceOfWorship />,
        cName: 'nav-text'
    },
    {
        title: 'Actividades',
        path: '/actividades',
        icon: <FaClipboardList />,
        cName: 'nav-text'
    },
]