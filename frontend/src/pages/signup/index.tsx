import Head from '../../../node_modules/next/head'
import styles from '../../../styles/Home.module.scss'
import Image from '../../../node_modules/next/image'

import logoImg from '../../../public/logoImg.png'

import { Input } from '../../components/ui/input/index' 
import { Button } from '../../components/ui/Button/index'

import Link  from '../../../node_modules/next/link'


export default function Signup() {
    return ( 
    <>
    <Head>
        <title>Pizzaria - Faça seu Cadastro</title>
    </Head>
    <div>
        <div className={styles.containerCenter}>
        <Image className={styles.logo}src={logoImg} alt="logo Pizzaria" />

        <div className={styles.login}>

            <h1>Criando sua conta</h1>
            <form>
                <Input placeholder='Digite seu nome' type='text'/>
                <Input placeholder='Digite seu email' type='text'/>
                <Input placeholder='Digite sua senha' type='password'/>

                <Button
                    type="submit"
                    loading={false}
                    >
                        Cadastrar
                
                </Button>
            </form>
            <Link href="/">
            <a className={styles.text}>Já possui uma conta? Faça seu login</a>
            </Link>
        </div>

        </div>
    </div>
    </>
    )
}