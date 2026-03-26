import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    return (
        <footer className={`w-full py-6 mt-10 bg-gray-100 rounded-md fixed-bottom ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`} >
            <div className="max-w-7xl mx-auto flex  flex-col md:flex-row justify-between items-center gap-6 px-4">
                <div className="flex items-center gap-2 font-display text-lg font-bold">
                   <i class="fa-regular fa-building"></i>

                    <span className="my-2">DineSpot</span>
                </div>
                <div className="flex gap-4 text-sm md:text-base">
                    <button>Home</button>
                    <button>Menu</button>
                    <button>Contact</button>

                </div>
                <div className="flex gap-4 text-xl">
                    <a>            <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a>            <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a>            <i className="fa-brands fa-instagram"></i>
                    </a>

                </div>
            </div>
            <div className="mt-6 text-center text-xs">
                @2026 Foodie.All Rights reserved.

            </div>

        </footer>
    )
}