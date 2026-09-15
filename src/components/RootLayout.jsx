import { Outlet } from "react-router";
import Header from "./Header";
import { ListProvider } from "../context/ListContext";

const RootLayout = () => {
    return (
        <ListProvider>
            <Header />
            <Outlet />
        </ListProvider>
    );
};

export default RootLayout;