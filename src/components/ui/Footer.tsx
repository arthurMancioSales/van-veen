import Container from "./Container";

export default function Footer() {

    return (
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center w-2/5">
                        <h6 className="text-lg font-bold text-left">Grupo de links 1</h6>
                        <p className="w-full py-3 font-light">link 1</p>
                        <p className="w-full py-3 font-light">link 2</p>
                        <p className="w-full py-3 font-light">link 3</p>
                    </div>
                    <div className="flex flex-col items-center w-2/5">
                        <h6 className="text-lg font-bold text-left">Grupo de links 2</h6>
                        <p className="w-full py-3 font-light">link 1</p>
                        <p className="w-full py-3 font-light">link 2</p>
                        <p className="w-full py-3 font-light">link 3</p>
                    </div>
                </div>
                <hr className="bg-black w-full h-[2px] opacity-40 my-5" />
                <p className="mb-5 text-sm font-light">&copy; Instituto Van Veen 2023 - Feito Por Arthur Mancio</p>
            </div>
        </Container>
    );
}
