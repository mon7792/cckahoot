import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

type Props = {
    children: React.ReactNode;
};

const CreateLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Sidebar /> 
            <main className="flex-1 flex-col">
            {children}
            </main>
            <Footer />
        </div>
    );
};

export default CreateLayout;