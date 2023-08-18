import { useEffect } from "react";

export const useScrollToTopOnLoad = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

};