import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyBill, FaUser, FaUserTie, FaPlaceOfWorship, FaClipboardList } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md"

export const LinksData = [
    {
        title: 'Inicio',
        path: '/Principal',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Miembros',
        path: '/Miembros',
        icon: <FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Personal',
        path: '/Personal',
        icon: <FaUserTie />,
        cName: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/Usuarios',
        icon: <RiAdminFill />,
        cName: 'nav-text'
    },
    {
        title: 'Cargos',
        path: '/Cargos',
        icon: <MdOutlineWork />,
        cName: 'nav-text'
    },
    {
        title: 'Ingresos-Egresos',
        path: '/Dinerito',
        icon: <FaMoneyBill />,
        cName: 'nav-text'
    },
    {
        title: 'Ministerios',
        path: '/Ministerios',
        icon: <FaPlaceOfWorship />,
        cName: 'nav-text'
    },
    {
        title: 'Actividades',
        path: '/Actividades',
        icon: <FaClipboardList />,
        cName: 'nav-text'
    },
]