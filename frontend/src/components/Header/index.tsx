import { useContext } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'



export function Header(){

    const {signOut} = useContext(AuthContext)
    
    return(
        <header className={styles.headerConteiner}>

            <div className={styles.headerContent}>
                <Link href='/dashboard'>
                    <img  src='/logo.svg' width={200} height={70} />
                </Link>
                    

            <nav>
                <Link href='/category'>
                    <a>Categoria</a>
                </Link>

                <Link href='/product'>
                    <a>Novo Produto</a>
                </Link>

                <button onClick={signOut}>
                    <FiLogOut color='#FFF' size={24} />
                </button>

            </nav>
            </div>
        </header>
    )
}