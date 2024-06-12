import NavBar from "./components/NavBar";
import PageDesign from "./components/PageDesgin";


export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <>
            <NavBar />
            {children}
            <PageDesign />
        </>
    )
}