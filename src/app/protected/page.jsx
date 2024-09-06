"use client"
import { useSession, signIn } from 'next-auth/react';

const ProtectedPage = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Cargando...</p>;
    }

    if (!session) {
        return (
        <div>
            <h1>Acceso denegado</h1>
            <button onClick={() => signIn()}>Iniciar sesión</button>
        </div>
        );
    }

    return <h1>Contenido protegido</h1>;
}

export default ProtectedPage;