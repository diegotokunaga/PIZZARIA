import {FormEvent, useContext, useState} from 'react'

import Head from '../../node_modules/next/head'
import styles from '../../styles/Home.module.scss'
import Image from '../../node_modules/next/image'

import logoImg from '../../public/logoImg.png'

import { Input } from '../components/ui/input/index' 
import { Button } from '../components/ui/Button/index'
import { AuthContext } from '../contexts/AuthContext'

import Link  from '../../node_modules/next/link'




export default function Home() {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleLogin(event: FormEvent){
        event.preventDefault();

        let data = {
            email,
            password
        }


        await signIn(data)
    }
    
    return ( 
    <>
    <Head>
        <title>Pizzaria - Faça seu login</title>
    </Head>
    <div>
        <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo Pizzaria" />

        <div className={styles.login}>
            <form onSubmit={handleLogin}>
                <Input 
                placeholder='Digite seu email'
                 type='text'
                 value={email}
                 onChange= {(e)=> setEmail(e.target.value)}
                 />
                <Input placeholder='Digite sua senha'
                 type='password'
                 value={password}
                 onChange= {(e)=> setPassword(e.target.value)}
                 />

                <Button
                    type="submit"
                    loading={false}
                    >
                        Acessar
                
                </Button>
            </form>
            <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
            </Link>
        </div>

        </div>
    </div>
    </>
    )
}