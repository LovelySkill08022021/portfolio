import NavBar from "./components/NavBar";
import PageDesign from "./components/PageDesgin";


export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <>
            <NavBar />
            <div className="px-5 lg:px-40">
                {children}
                {/* <PageDesign /> */}
            </div>
        </>
    )
}