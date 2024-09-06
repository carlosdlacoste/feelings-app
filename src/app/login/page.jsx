"use client"

import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () =>{
    const { data: session } = useSession();

    return (
        <div>
            {!session ? (
                <>
                    <h1>No estás autenticado</h1>
                    <button onClick={() => signIn('google')}>Iniciar sesión con Google</button>
                    <button onClick={() => signIn('github')}>Iniciar sesión con GitHub</button>
                    <button onClick={() => signIn('twitter')}>Iniciar sesión con Twitter</button>
                </>
            ) : (
                <>
                    <h1>Bienvenido, {session.user.name}</h1>
                    <button onClick={() => signOut()}>Cerrar sesión</button>
                </>
            )}
        </div>
    );
}

export default Login;