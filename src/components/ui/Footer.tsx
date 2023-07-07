import Container from "./Container";

export default function Footer() {

    return (
        <Container
            direction="flex-col"
            others=""
        >
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center lg:w-1/5 lg:items-start">
                        <h6 className="pb-5 text-lg font-bold text-left lg:self-start lg:text-base">Grupo de links 1</h6>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 1</a>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 2</a>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 3</a>
                    </div>
                    <div className="flex flex-col items-center lg:w-1/5 lg:items-start">
                        <h6 className="pb-5 text-lg font-bold text-left lg:self-start lg:text-base">Grupo de links 2</h6>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 1</a>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 2</a>
                        <a href="#" className="w-full mt-3 mb-5 font-light underline transition-all duration-300 ease-in-out lg:w-auto decoration-transparent hover:decoration-black hover:font-normal">link 3</a>
                    </div>
                </div>
                <hr className="bg-black w-full h-[2px] opacity-40 my-5" />
                <p className="mb-5 text-sm font-light lg:self-start">&copy; Instituto Van Veen 2023 - Feito Por Arthur Mancio</p>
            </div>
        </Container>
    );
}
