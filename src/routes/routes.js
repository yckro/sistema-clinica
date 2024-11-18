import { useContext } from "react";
import RoutesOpen from "./routesOpen.js";
import RoutesPrivate from "./routesPrivate.js";
import { AuthContext } from "../contexts/auth.js";

function Routes() {
    const { user } = useContext(AuthContext);

    // Verifique se user está definido antes de acessar id_user
    if (!user || !user.id_user) {
        // Caso o usuário não esteja autenticado ou o valor não seja encontrado, exibe RoutesOpen
        return <RoutesOpen />;
    }

    // Se o usuário estiver autenticado, exibe RoutesPrivate
    return <RoutesPrivate />;
}

export default Routes;
